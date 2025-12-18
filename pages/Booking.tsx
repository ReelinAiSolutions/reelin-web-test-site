import React from 'react';

export const Booking: React.FC = () => {
    return (
        <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                    Initialize Your Architecture
                </h1>

                <div className="w-full max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                        src="https://reelin-bookings-app.vercel.app/reelin"
                        style={{ width: '100%', height: '700px', border: 'none', borderRadius: '12px' }}
                        title="Book Appointment"
                    />
                </div>
            </div>
        </div>
    );
};
