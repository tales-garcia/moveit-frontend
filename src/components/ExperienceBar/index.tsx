import React from 'react'
import { useChallenge } from '../../hooks/challenge';
import { Container } from './styles';
import { motion } from 'framer-motion';

export default function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useChallenge();

    const percentage = React.useMemo(() => Math.floor((currentExperience * 100) / experienceToNextLevel), [currentExperience, experienceToNextLevel]);

    return (
        <Container percentage={percentage}>
            <span>0 xp</span>
            <div>
                <motion.div
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.8 }}
                />
                <motion.span
                    animate={{ left: `${percentage}%` }}
                    transition={{ duration: 0.8 }}
                >{currentExperience} xp</motion.span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </Container>
    )
}
