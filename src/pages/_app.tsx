import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';

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

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp
