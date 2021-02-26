import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useChallenge } from '../../hooks/challenge';

import { Container, CycleButton } from './styles';

const Countdown: React.FC = () => {
    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const { activeChallenge } = useChallenge();
    const { startNewChallenge } = useChallenge()

    const minutes = useMemo(() => Math.floor(time / 60), [time]);
    const seconds = useMemo(() => time % 60, [time]);

    const splittedMinutes = useMemo(() => String(minutes).padStart(2, '0').split(''), [minutes]);
    const splittedSeconds = useMemo(() => String(seconds).padStart(2, '0').split(''), [seconds]);

    useEffect(() => {
        if (isActive && time > 0) {
            const timeout = setTimeout(() => setTime(time - 1), 1000);
            return () => clearTimeout(timeout);
        } else if (isActive && time === 0) {
            startNewChallenge();
        }
    }, [isActive, time]);

    useEffect(() => {
        if (!activeChallenge) {
            resetCounter();
        }
    }, [activeChallenge]);

    const toggleCounter = useCallback(
        () => {
            setIsActive(!isActive);
        },
        [isActive, setIsActive],
    );

    const resetCounter = useCallback(
        () => {
            setIsActive(false);
            setTime(0.05 * 60);
        },
        []
    )

    return (
        <>
            <Container>
                <div>
                    <span>{splittedMinutes[0]}</span>
                    <span>{splittedMinutes[1]}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{splittedSeconds[0]}</span>
                    <span>{splittedSeconds[1]}</span>
                </div>
            </Container>
            {activeChallenge ? (
                <CycleButton disabled type="button">Ciclo encerrado</CycleButton>
            ) : (
                <CycleButton isActive={Number(isActive)} onClick={isActive ? resetCounter : toggleCounter} type="button">{isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'}</CycleButton>
            )}
        </>
    );
}

export default Countdown;