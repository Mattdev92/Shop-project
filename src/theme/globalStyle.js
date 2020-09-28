import { createGlobalStyle, css } from 'styled-components';
import Img from 'assets/background.jpg';
import { connect } from 'react-redux';


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
  background-image: url(${Img}); 
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  ${({ backgroundImage }) =>
  backgroundImage &&
  css`background-image: none;
    background-color: rgb(243, 243, 245);
    transition: background-color ease-in-out 1s;
    `
  }
  ${({ sidebarOpen }) =>
    sidebarOpen &&
    css`
      backdrop-filter: blur(8px);
    `}
    @media (max-width: 440px) {
    background-size:auto 1000px;
  }
}
`;
const mapStateToProps = (state) => {
  const { sidebarOpen,backgroundImage } = state;
  return { sidebarOpen,backgroundImage };
};
export default connect(mapStateToProps)(GlobalStyle);
