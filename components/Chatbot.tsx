import React, { useState, useRef, useEffect } from 'react';
import { Icon } from './ui/Icon';
import { SERVICE_TIERS, COMPANY_NAME, TAGLINE_MAIN, ADDRESS, CONTACT_EMAIL } from '../constants';

// --- Build Knowledge Base from Constants ---
const WEBSITE_CONTENT = `
OFFICIAL REELIN KNOWLEDGE BASE:

COMPANY PROFILE:
Name: ${COMPANY_NAME}
Tagline: ${TAGLINE_MAIN}
Location: ${ADDRESS}
Contact Email: ${CONTACT_EMAIL}

SERVICE TIERS (Our Systems):
${SERVICE_TIERS.map(tier => `
[SYSTEM: ${tier.title}]
- Role: ${tier.subtitle}
- What it does: ${tier.description}
- Target Audience: ${tier.bestFor.join(', ')}
- Key Features: ${tier.features.join(', ')}
- Key Benefit: ${tier.outcome}
`).join('\n')}

BRAND PHILOSOPHY (The Reelin Protocol):
- Mission: "We are the architects of the invisible. Reelin engineers the signal that drives autonomous growth."
- Core Principles: 
  1. Autonomy First: Remove human latency. If it can be automated, it should be.
  2. Speed: Speed is a feature. Systems architected for millisecond decision making.
  3. Evolution: Self-improving architectures that learn from data.

NAVIGATION & PAGES:
- Services Page: Detailed breakdown of Foundation, Growth, and Full Stack tiers.
- About Page: The Reelin Protocol and operating principles.
- Contact Page: Initialization form to start a partnership.
`;

interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
  sources?: { title: string; uri: string }[];
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'bot',
      text: 'Greetings. I am Reelin\'s AI assistant. I can help you find the right automation tier for your business. How can I help?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setInputValue('');

    // Add User Message
    const newUserMsg: Message = { id: Date.now().toString(), role: 'user', text: userText };
    setMessages(prev => [...prev, newUserMsg]);
    setIsLoading(true);

    try {
      // Connect to n8n Universal Agent
      // NOTE: Switched to Production 'webhook' URL for stability.
      const response = await fetch('https://reelin.app.n8n.cloud/webhook/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: 'reelin_001', // Identifying ourselves as the first client
          message: userText
        })
      });

      const data = await response.json();
      const generatedText = data.response || "System connection interrupted.";

      const newBotMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        text: generatedText
        // Sources are handled by the agent now, simplified for frontend
      };

      setMessages(prev => [...prev, newBotMsg]);

    } catch (error) {
      console.error("Chat error:", error);
      let errorMessage = "System connection interrupted.";
      if (error instanceof Error) {
        errorMessage += ` Details: ${error.message}`;
      }
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'bot',
        text: errorMessage
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      {isOpen && (
        <div
          className="mb-4 w-[350px] md:w-[400px] bg-white/90 dark:bg-black/90 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right pointer-events-auto animate-fade-in"
        >
          {/* Header */}
          <div className="bg-zinc-50/50 dark:bg-zinc-900/50 p-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-semibold text-black dark:text-white">Reelin Intelligence</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <Icon name="X" size={16} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-black dark:text-zinc-200 rounded-bl-none'
                    }`}
                >
                  {msg.text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                    part.match(/https?:\/\/[^\s]+/) ? (
                      <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80 break-all">{part}</a>
                    ) : (
                      part
                    )
                  )}
                </div>

                {/* Sources Display */}
                {msg.sources && msg.sources.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2 max-w-[85%]">
                    {msg.sources.map((source, idx) => (
                      <a
                        key={idx}
                        href={source.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-2 py-1 rounded-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-[10px] text-zinc-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors truncate max-w-full"
                      >
                        <Icon name="Globe" size={10} className="mr-1 flex-shrink-0" />
                        <span className="truncate max-w-[150px]">{source.title}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-center gap-2 text-zinc-400 text-xs ml-2">
                <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce delay-200"></div>
                <span className="ml-1">Thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-black/50">
            <div className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about AI strategies..."
                className="w-full bg-zinc-100 dark:bg-zinc-900 border-none rounded-full pl-4 pr-12 py-3 text-sm text-black dark:text-white placeholder-zinc-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black dark:bg-white text-white dark:text-black rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-80 transition-opacity"
              >
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center pointer-events-auto ${isOpen
          ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white'
          : 'bg-black dark:bg-white text-white dark:text-black'
          }`}
      >
        <Icon name={isOpen ? "X" : "Zap"} size={24} />
      </button>
    </div>
  );
};