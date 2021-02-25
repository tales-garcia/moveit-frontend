import React, { useCallback, useState } from 'react';
import { createContext, useContext } from "react";

interface ChallengeContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;

    levelUp(): void;
    startNewChallenge(): void;
}

export const challengeContext = createContext({} as ChallengeContextData);

export const useChallenge = () => {
    const data = useContext(challengeContext);

    if (!data) throw new Error('useChallenge must be used within ChallengeProvider');

    return data;
}

const ChallengeProvider: React.FC = ({ children }) => {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const levelUp = useCallback(
        () => {
            setLevel(level + 1);
        },
        [level]
    );

    const startNewChallenge = useCallback(
        () => {

        },
        []
    );

    return (
        <challengeContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            levelUp,
            startNewChallenge
        }}>
            {children}
        </challengeContext.Provider>
    );
}

export default ChallengeProvider;