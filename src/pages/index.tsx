import React from 'react';
import styled from 'styled-components';
import CompleteChallenges from '../components/CompleteChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import Head from 'next/head';
import ChallengeBox from '../components/ChallengeBox';
import { GetServerSideProps } from 'next';
import ChallengeProvider from '../hooks/challenge';
import { useAuth } from '../hooks/auth';
import { useRouter } from 'next/router';

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

function App({ level, challengesCompleted, currentExperience }) {
  const { user } = useAuth();
  const { push } = useRouter();

  React.useEffect(() => {
    if (!user) {
      push('/login');
    }
  }, []);

  return user && (
    <ChallengeProvider level={level} challengesCompleted={challengesCompleted} currentExperience={currentExperience} >
      <Container>
        <Head>
          <title>Home | MoveIt</title>
        </Head>
        <ExperienceBar />

        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </Container>
    </ChallengeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, challengesCompleted, currentExperience } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      challengesCompleted: Number(challengesCompleted),
      currentExperience: Number(currentExperience)
    }
  }
}

export default App;
