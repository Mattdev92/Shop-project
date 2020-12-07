import styled from 'styled-components';
import React from 'react';
const Wrapper = styled.h1`
  text-align:center;
  height:30px;
  margin-top:35px;
  bottom:0;
  font-family: 'Jost', sans-serif;
  font-weight:700;
`;
const Title = ({children})=>{
  return(<Wrapper>{children}</Wrapper>)
}
export default Title;
