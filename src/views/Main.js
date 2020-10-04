import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import styled from 'styled-components';
const Wrapper = styled.div`
  position: absolute;
  top: 80px;
  background-color: rgb(215, 179, 157);
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 30vh;
  opacity: 70%;
`;
const Title = styled.h1`
  font-size: 3rem;
  @media (max-width: 440px) {
    font-size: 2rem;
  }
`;
const StoreName = styled.div`
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10vh;
  @media (max-width: 440px) {
    font-size: 2rem;
    top: 50vh;
  }
`;

const Main = () => (
  <MainTemplate bottom>
    <Wrapper>
      <Title>RABATY DO -70%</Title>
    </Wrapper>
    <StoreName>Sklep LoremIpsum</StoreName>
  </MainTemplate>
);
export default Main;
