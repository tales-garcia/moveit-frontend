import React from 'react';
import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <img src="https://github.com/tales-garcia.png" alt="Tales Garcia"/>
      <div>
        <strong>Tales Garcia</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 9999999999999999999
        </p>
      </div>
    </Container>
  );
}

export default Profile;
