import React, { createContext, useContext, useState } from 'react';

interface AnimationContextType {
    pulse: boolean;
    triggerPulse: () => void;
}

const AnimationContext = createContext<AnimationContextType>({
    pulse: false,
    triggerPulse: () => { },
});

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [pulse, setPulse] = useState(false);

    const triggerPulse = () => {
        setPulse(true);
        setTimeout(() => setPulse(false), 400); // 400ms duration matches V3 pulse
    };

    return (
        <AnimationContext.Provider value={{ pulse, triggerPulse }}>
            {children}
        </AnimationContext.Provider>
    );
};

export const useAnimation = () => useContext(AnimationContext);
