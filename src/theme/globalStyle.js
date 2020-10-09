import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;800&family=Nunito:ital,wght@1,600&family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
html {
  font-size: 62,5%;
}

body {
  font-size: 1,6rem;
  margin:0;
  padding:0;
  font-family: 'Nunito', sans-serif;
}`

export default GlobalStyle;
