import React, { useCallback, useEffect, useMemo, useState } from 'react';
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

    finishChallenge(experience: number): void;
    levelUp(): void;
    startNewChallenge(): void;
    resetChallenge(): void;
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
    const experienceToNextLevel = useMemo(() => Math.pow((level + 1) * 4, 2), [level]);

    const levelUp = useCallback(
        () => {
            setLevel(level + 1);
        },
        [level]
    );

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    const startNewChallenge = useCallback(
        async () => {
            const randomIndex = Math.floor(Math.random() * challenges.length);

            const challenge = (challenges as Challenge[])[randomIndex];

            setActiveChallenge(challenge);

            await new Audio('/notification.mp3').play();

            if (Notification.permission === 'granted') {
                new Notification('Novo desafio! 🎉', {
                    body: `Valendo ${challenge.amount} xp!`,
                    icon: 'favicon.png'
                });
            }
        },
        []
    );

    const resetChallenge = useCallback(
        () => {
            setActiveChallenge(null as Challenge);
        },
        []
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
            levelUp,
            startNewChallenge,
            resetChallenge,
            finishChallenge,
            activeChallenge
        }}>
            {children}
        </challengeContext.Provider>
    );
}

export default ChallengeProvider;