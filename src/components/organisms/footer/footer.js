import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  width: 100vw;
  height: 5vh;
  opacity: 30%;
  background-color: white;
  color: black;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;

const Footer = () => (
  <Wrapper>
    <p>© 2020 Mateusz Grzejszczyk. All rights reserved</p>
  </Wrapper>
);

export default Footer;
