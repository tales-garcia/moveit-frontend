import React from 'react';

import { Container, ChallengeNotActive, ChallengeActive } from './styles';

const ChallengeBox: React.FC = () => {
    const hasActiveChallenge = true;

    return (
        <Container>
            {hasActiveChallenge ? (
                <ChallengeActive>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt="Body" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos.</p>
                    </main>

                    <footer>
                        <button>Falhei</button>
                        <button>Completei</button>
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