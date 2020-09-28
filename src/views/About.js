import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate/MainTemplate';

const Wrapper = styled.div`
  position: absolute;
  width: 60vw;
  height: 60vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: black;
  opacity: 50%;
  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const About = () => {
  return (
    <MainTemplate bottom>
      <Wrapper>Cześć ! Witaj w moim fikcyjnym sklepie internetowym stworzonym na potrzeby nauki Reacta</Wrapper>;
    </MainTemplate>
  );
};
export default About;
