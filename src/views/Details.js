import React, { useRef, useEffect, useState } from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import { ReturnClicked } from 'actions';
import PropTypes from 'prop-types';
import gsap from 'gsap';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: -95vh auto 0 auto;
  align-items: center;
  @media (max-width: 440px) {
    margin: 70px auto 0 auto;
    ${({ sidebarOpen }) =>
      sidebarOpen &&
      css`
        display: none;
      `}
  }
`;

const DescriptionSection = styled.section`
  padding: 0px auto;
  margin: 5px;
  display: flex;
  flex-direction: row;
  width: 60vw;
  justify-content: center;
  align-items: center;
  text-align: justify;
  @media (max-width: 440px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 1rem;
  @media (max-width: 440px) {
    font-size: 0.5rem;
  }
`;

const Img = styled.img`
  padding: 10px;
  width: 430px;
  height: 570px;
  @media (max-width: 440px) {
    width: 192px;
    height: 252px;
  }
`;

const Wrapper = styled.button``;
const Button = styled.button`
  margin-bottom: 20px;
  border: none;
  background-color: blue;
  width: 130px;
  height: 30px;
  color: white;
  border-radius: 8px;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
  }
`;
const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 20px;
  @media (max-width: 440px) {
    margin: 2px;
  }
`;
const ListItem = styled.h5`
  margin: 10px 2px;
`;
const ItemSize = styled.option`
  margin: 5px;
`;

const Details = ({ actualItem, actualInfo, ReturnClicked, sidebarOpen }) => {
  const myImage = useRef(null);
  const myInfoWrapper = useRef(null);
  const myButton = useRef(null);
  const [actualSize, setActualSize] = useState('S');
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline();
    if (window.screen.width > 400) {
      tl.fromTo(myImage.current, { x: 200, autoAlpha: 0 }, { duration: 0.5, x: 0, autoAlpha: 1 })
        .fromTo(
          myInfoWrapper.current,
          { y: 200, autoAlpha: 0 },
          { duration: 0.5, y: 0, autoAlpha: 1 },
        )
        .fromTo(myButton.current, { x: -200, autoAlpha: 0 }, { duration: 0.5, x: 0, autoAlpha: 1 });
    }
  }, []);
  const handleChecked = (event) => {
    setActualSize(event.target.value);
    switch (event.target.value) {
      case 'S':
        setAvailable(true);
        break;
      case 'M':
        setAvailable(false);
        break;
      case 'L':
        setAvailable(true);
        break;
      case 'XL':
        setAvailable(false);
        break;
      case 'XXL':
        setAvailable(true);
        break;
      default:
    }
  };
  return (
    <MainTemplate bottom>
      <DetailSection sidebarOpen={sidebarOpen}>
        <Title>{actualInfo}</Title>
        <DescriptionSection>
          <Img src={actualItem} alt="product" ref={myImage} />
          <InfoWrapper ref={myInfoWrapper}>
            <h3>Dostępne rozmiary</h3>
            <List>
              <select
                value={actualSize}
                onChange={(e) => {
                  handleChecked(e);
                }}
              >
                {sizes.map((item) => (
                  <ItemSize value={item} key={item}>
                    {item}
                  </ItemSize>
                ))}
              </select>
            </List>
            {available
              ? `Rozmiar ${actualSize} jest dostepny`
              : `Rozmiar ${actualSize} nie jest dostepny`}
            <ListItem>Dostawa 48 godzin</ListItem>
            <ListItem>100 dni na zwrot</ListItem>
            <ListItem>Darmowa wysyłka od 200zł</ListItem>
          </InfoWrapper>
        </DescriptionSection>
        <Wrapper as={NavLink} to={`${actualInfo.includes('męska') ? routes.On : routes.Ona}`}>
          <Button onClick={ReturnClicked} ref={myButton}>
            Powrót
          </Button>
        </Wrapper>
      </DetailSection>
    </MainTemplate>
  );
};

const mapStateToProps = (state) => {
  const { actualItem, actualInfo, sidebarOpen } = state;
  return { actualItem, actualInfo, sidebarOpen };
};
const mapDispatchToProps = (dispatch) => ({
  ReturnClicked: () => dispatch(ReturnClicked()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Details);
Details.propTypes = {
  actualItem: PropTypes.string,
  actualInfo: PropTypes.string,
  sidebarOpen: PropTypes.bool,
};
