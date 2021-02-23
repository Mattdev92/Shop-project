import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;800&family=Nunito:ital,wght@1,600&family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@700&family=Roboto:wght@700&display=swap');
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
  font-family: 'Jost', sans-serif;
}
.slides .slick-prev,
.slides .slick-next {
  position: absolute;
  top: 50%;
  z-index: 1;
  background-color:black;
  opacity:40%;
}
.slides {
  position: relative;
}
.slides .slick-prev {
  left: 5%;
}
.slides .slick-next {
  right: 5%;
}
`;

export default GlobalStyle;
