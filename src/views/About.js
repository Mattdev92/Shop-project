import React from 'react';

import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Footer from 'components/organisms/footer/footer';
import { Wrapper, Content } from 'views/About-styles';

const About = () => {
  return (
    <>
      <MainTemplate>
        <Wrapper>
          Cześć ! Witaj w moim fikcyjnym sklepie internetowym stworzonym na
          potrzeby nauki Reacta ! Źródłem zdjęć fikcyjnych produktow jest strona
          unsplash.com
        </Wrapper>
      </MainTemplate>
      <Content />
      <Footer />
    </>
  );
};

export default About;
