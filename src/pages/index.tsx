import React from 'react';
import styled from 'styled-components';
import CompleteChallenges from '../components/CompleteChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }
`;

function App() {
  return (
    <Container>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>
        <div>

        </div>
      </section>
    </Container>
  );
}

export default App;
