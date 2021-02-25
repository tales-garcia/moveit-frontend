import React from 'react';
import { useChallenge } from '../../hooks/challenge';

import { Container } from './styles';

const CompleteChallenges: React.FC = () => {
  const { challengesCompleted } = useChallenge();

  return (
    <Container>
        <span>Desafios Completos</span>
        <span>{challengesCompleted}</span>
    </Container>
  );
}

export default CompleteChallenges;