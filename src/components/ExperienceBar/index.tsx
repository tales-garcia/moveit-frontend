import React from 'react'
import { useChallenge } from '../../hooks/challenge';
import { Container } from './styles';

export default function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useChallenge();

    return (            
        <Container percentage={Math.floor((currentExperience * 100) / experienceToNextLevel)}>
            <span>0 xp</span>
            <div>
                <div />
                <span>{currentExperience} xp</span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </Container>
    )
}
