import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { createContext, useContext } from "react";
import challenges from '../../challenges.json';
import Cookie from 'js-cookie';
import LevelUpModal from '../components/LevelUpModal';

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeProviderProps {
    currentExperience?: number;
    level?: number;
    challengesCompleted?: number;
}

interface ChallengeContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    isActive: boolean;

    finishChallenge(experience: number): void;
    levelUp(): void;
    startNewChallenge(): void;
    resetChallenge(): void;
    toggleModal(state: boolean): void;
}

export const challengeContext = createContext({} as ChallengeContextData);

export const useChallenge = () => {
    const data = useContext(challengeContext);

    if (!data) throw new Error('useChallenge must be used within ChallengeProvider');

    return data;
}

const ChallengeProvider: React.FC<ChallengeProviderProps> = ({ children, level: levelCookie, challengesCompleted: challengesCompletedCookie, currentExperience: currentExperienceCookie }) => {
    const [level, setLevel] = useState(levelCookie || 1);
    const [currentExperience, setCurrentExperience] = useState(currentExperienceCookie || 0);
    const [challengesCompleted, setChallengesCompleted] = useState(challengesCompletedCookie || 0);
    const [activeChallenge, setActiveChallenge] = useState<Challenge | null>(null);
    const experienceToNextLevel = useMemo(() => Math.pow((level + 1) * 4, 2), [level]);
    const [isActive, setIsActive] = useState(false);

    const toggleModal = useCallback(
        (state) => {
            setIsActive(state);
        },
        [isActive, setIsActive]
    );

    const levelUp = useCallback(
        () => {
            setLevel(level + 1);
            toggleModal(true);
        },
        [level]
    );

    useEffect(() => {
        Notification.requestPermission();
    }, [])

    useEffect(() => {
        Cookie.set('level', String(level));
        Cookie.set('currentExperience', String(currentExperience));
        Cookie.set('challengesCompleted', String(challengesCompleted));
    }, [level, currentExperience, activeChallenge, challengesCompleted]);

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
            toggleModal,
            isActive,
            activeChallenge
        }}>
            <LevelUpModal />
            {children}
        </challengeContext.Provider>
    );
}

export default ChallengeProvider;