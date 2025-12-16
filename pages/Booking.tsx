import React from 'react';

export const Booking: React.FC = () => {
    const BOOKING_LINK = "https://square.site/book/L7P6DK445WYRV/naie51spoxxmo7";

    return (
        <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                    Initialize Your Architecture
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
                    Select a time below to speak with our Systems Architect.
                </p>

                <a
                    href={BOOKING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                >
                    Book Consultation (Square)
                </a>
            </div>
        </div>
    );
};
