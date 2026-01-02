import React, { useState } from 'react';
import { FAQS } from '../site-constants';
import { ChevronDownIcon } from './Icons';
import { useNavigate } from 'react-router-dom';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const navigate = useNavigate();

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-white mb-10 text-center">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="bg-white/5 border border-white/5 rounded-lg overflow-hidden transition-colors hover:border-white/10">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-slate-200">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-48 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
          <h4 className="text-white font-semibold mb-2">Have more questions?</h4>
          <p className="text-slate-400 text-sm mb-4 max-w-xl mx-auto">
            If you didn’t find what you were looking for, our AI chatbot is available 24/7 to help. It can answer questions, guide you through our services, and point you in the right direction instantly—no waiting required.
          </p>
          <button
            onClick={() => navigate('/book')}
            className="text-primary hover:text-white font-medium text-sm transition-colors border-b border-primary hover:border-white pb-0.5"
          >
            Ask Reelin Bot &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};