import React from 'react';
import { useChallenge } from '../../hooks/challenge';
import { Container } from './styles';

const Profile: React.FC = () => {
  const { level } = useChallenge();

  return (
    <Container>
      <img src="https://github.com/tales-garcia.png" alt="Tales Garcia"/>
      <div>
        <strong>Tales Garcia</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </Container>
  );
}

export default Profile;
