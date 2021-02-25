import React, { useCallback, useMemo, useState } from 'react';
import { createContext, useContext } from "react";
import challenges from '../../challenges.json';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    hasFinishedCycle: boolean;

    finishChallenge(experience: number): void;
    levelUp(): void;
    startNewChallenge(): void;
    resetChallenge(): void;
    toggleCycle(): void;
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
    const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);
    const [hasFinishedCycle, setHasFinishedCycle] = useState(false);
    const experienceToNextLevel = useMemo(() => Math.pow((level + 1) * 4, 2), [level]);

    const levelUp = useCallback(
        () => {
            setLevel(level + 1);
        },
        [level]
    );

    const startNewChallenge = useCallback(
        () => {
            const randomIndex = Math.floor(Math.random() * challenges.length);

            setActiveChallenge((challenges as Challenge[])[randomIndex]);
        },
        []
    );

    const resetChallenge = useCallback(
        () => {
            setActiveChallenge(null as Challenge);
            setHasFinishedCycle(false);
        },
        []
    );

    const toggleCycle = useCallback(
        () => {
            setHasFinishedCycle(!hasFinishedCycle);
        },
        [hasFinishedCycle]
    );

    const finishChallenge = useCallback(
        (experience) => {
            setChallengesCompleted(challengesCompleted + 1);
            if (currentExperience + experience < experienceToNextLevel) {
                setCurrentExperience(currentExperience + experience);
            } else {
                const remainingExperience = (currentExperience + experience) - experienceToNextLevel;
                setCurrentExperience(remainingExperience);
                levelUp();
            }
        },
        [challengesCompleted, currentExperience, experienceToNextLevel]
    );

    return (
        <challengeContext.Provider value={{
            level,
            currentExperience,
            challengesCompleted,
            experienceToNextLevel,
            hasFinishedCycle,
            levelUp,
            startNewChallenge,
            resetChallenge,
            finishChallenge,
            toggleCycle,
            activeChallenge
        }}>
            {children}
        </challengeContext.Provider>
    );
}

export default ChallengeProvider;