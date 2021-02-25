import React from 'react';
import { useChallenge } from '../../hooks/challenge';

import { Container, ChallengeNotActive, ChallengeActive } from './styles';

const ChallengeBox: React.FC = () => {
    const { activeChallenge, resetChallenge, finishChallenge } = useChallenge();

    return (
        <Container>
            {activeChallenge ? (
                <ChallengeActive>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt={activeChallenge.type} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button onClick={resetChallenge}>Falhei</button>
                        <button onClick={() => {
                            finishChallenge(activeChallenge.amount);
                            resetChallenge();
                        }}>Completei</button>
                    </footer>
                </ChallengeActive>
            ) : (
                    <ChallengeNotActive>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level Up" />
                            Avance de Level completando desafios
                        </p>
                    </ChallengeNotActive>
                )}
        </Container>
    );
}

export default ChallengeBox;