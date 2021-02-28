import React from 'react';
import { useChallenge } from '../../hooks/challenge';
import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

const Profile: React.FC = () => {
  const { level } = useChallenge();
  const { user } = useAuth();

  return user && (
    <Container>
      <img src={user.avatar_url} alt={user.name}/>
      <div>
        <strong>{user.name}</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level {level}
        </p>
      </div>
    </Container>
  );
}

export default Profile;
