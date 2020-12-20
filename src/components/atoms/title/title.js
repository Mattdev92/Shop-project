import React from 'react';
import { Wrapper } from 'components/atoms/title/title-styles';

const Title = ({ children }) => {
   return <Wrapper id="mainTitle">{children}</Wrapper>;
};
export default Title;
