import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Container, CycleButton } from './styles';

const Countdown: React.FC = () => {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = useMemo(() => Math.floor(time / 60), [time]);
    const seconds = useMemo(() => time % 60, [time]);

    const splittedMinutes = useMemo(() => String(minutes).padStart(2, '0').split(''), [minutes]);
    const splittedSeconds = useMemo(() => String(seconds).padStart(2, '0').split(''), [seconds]);

    useEffect(() => {
        if (active && time > 0) {
            const timeout = setTimeout(() => setTime(time - 1), 1000);
            return () => clearTimeout(timeout);
        }
    }, [active, time]);

    const toggleCounter = useCallback(
        () => {
            setActive(!active);
        },
        [active, setActive],
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
            <CycleButton onClick={toggleCounter} type="button">Iniciar um ciclo</CycleButton>
        </>
    );
}

export default Countdown;