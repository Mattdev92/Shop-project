import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Footer from 'components/organisms/footer/footer';

const Wrapper = styled.div`
  position: absolute;
  width: 60vw;
  height: 60vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  box-shadow: 0 0 30px #333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  @media (max-width: 440px) {
    text-align: center;
  }
`;
const Content =styled.div`
width:100vw;
height:65vh;
`;
const About = () => {
  return (
    <>
    <MainTemplate>
      <Wrapper>
        Cześć ! Witaj w moim fikcyjnym sklepie internetowym stworzonym na potrzeby nauki Reacta !
        Źródłem zdjęć fikcyjnych produktow jest strona unsplash.com
      </Wrapper>
    </MainTemplate>
    <Content/>
    <Footer/>
  </>  
  );
};
export default About;
