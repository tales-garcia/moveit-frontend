import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ExperienceBar from './components/ExperienceBar';
import GlobalStyle from './styles/global';

const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2rem 2.5rem;

  display: flex;
  flex-direction: column;
`;

const theme = {
  white: '#FFF',
  background: '#F2F3F5',
  grayLine: '#DCDDE0',
  text: '#666666',
  textHighlight: '#B3B9FF',
  title: '#2E384D',
  red: '#E83F5B',
  green: '#4CD62B',
  blue: '#5965E0',
  darkBlue: '#4953B8',
  twitterBlue: '#2AA9E0'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <ExperienceBar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
