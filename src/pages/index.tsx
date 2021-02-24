import React from 'react';
import styled from 'styled-components';
import ExperienceBar from '../components/ExperienceBar';

const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <ExperienceBar />

      <section>
        <div></div>
        <div></div>
      </section>
      <section>
        <div></div>
      </section>
    </Container>
  );
}

export default App;
