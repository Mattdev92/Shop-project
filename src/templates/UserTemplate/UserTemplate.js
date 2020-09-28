import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import styled, { css } from 'styled-components';
import Cardlazy from 'components/molecules/card/cardlazy';
import { connect } from 'react-redux';
import { textFilter } from 'actions';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';
const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  padding: 0px 10vw;
  margin-bottom:5vh;
  @media (max-width: 840px) and(min-width: 441px) {
    grid-template-columns: 300px 300px;
    justify-content: center;
    grid-gap: 100px;
    align-items: center;
    margin: 0 0 5vh;
    padding: 0px;
  }
  @media (max-width: 440px) {
    grid-template-columns: 300px;
    justify-content: center;
    grid-gap: 100px;
    align-items: center;
    margin: 0 0 5vh;
    padding: 0px;
    ${({ sidebarOpen }) =>
      sidebarOpen &&
      css`
        display: none;
      `}
  }
`;
const FilterWrapper = styled.div`
  margin: -95vh 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 440px) {
    padding: 0;
    margin: 40px 0 10px;
    ${({ sidebarOpen }) =>
      sidebarOpen &&
      css`
        display: none;
      `}
  }
`;
const Input = styled.input`
  width: 20vw;
  border: 3px solid #00b4cc;
  padding: 5px;
  height: 30px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9dbfaf;
  margin: 20px;
  @media (max-width: 440px) {
    width: 150px;
  }
`;
class UserTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.myCard = null;
    this.tlMain = new TimelineMax();
  }

  componentDidMount() {
    // use the node ref to create the animation
    this.tlMain.fromTo(this.myCard, { autoAlpha: 0 }, { duration: 0.8, autoAlpha: 1 }).delay(0.4);
  }

  render() {
    const { pathname, Man, Woman, textFilter, eventText, sidebarOpen } = this.props;
    return (
      <MainTemplate>
        <FilterWrapper sidebarOpen={sidebarOpen}>
          <Input
            onChange={(event) => textFilter(event.target.value)}
            type="text"
            placeholder="Czego szukasz?"
          />
        </FilterWrapper>
        <InnerWrapper sidebarOpen={sidebarOpen} ref={(card) => (this.myCard = card)}>
          {pathname.includes('Ona') === true
            ? eventText === ''
              ? Woman.map((
                  //Display all Woman products
                  product,
                ) => (
                  <Cardlazy product={product} key={product}>
                    {product[1]} {product[2]}zł
                  </Cardlazy>
                ))
              : Woman.filter((product) => product[1].toUpperCase().includes(eventText.toUpperCase())).map((
                  product,
                  //Display filtered Woman products
                ) => (
                  <Cardlazy product={product} key={product}>
                    {product[1]} {product[2]}zł
                  </Cardlazy>
                ))
            : pathname.includes('On') === true //Display all Man products
            ? eventText === ''
              ? Man.map((product) => (
                  <Cardlazy product={product} key={product}>
                    {product[1]} {product[2]}zł
                  </Cardlazy>
                ))
              : Man.filter((product) => product[1].toUpperCase().includes(eventText.toUpperCase())).map((
                  product,
                  //Display filtered Man products
                ) => (
                  <Cardlazy product={product} key={product}>
                    {product[1]} {product[2]}zł
                  </Cardlazy>
                ))
            : pathname.includes('Okazje') === true
            ? eventText === ''
              ? Man.filter((product) => product[2] < 60).map((
                  product,
                  //display all Man occasion. Price below 60zl
                ) => (
                  <Cardlazy product={product} key={product}>
                    {product[1]} {product[2]}zł
                  </Cardlazy>
                ))
              : Man.filter((product) => product[2] < 60 && product[1].toUpperCase().includes(eventText.toUpperCase())).map((
                  product,
                  //display all Man filtered occasion
                ) => (
                  <Cardlazy product={product} key={product}>
                    {product[1]} {product[2]}zł
                  </Cardlazy>
                ))
            : 'Error'}
          {pathname.includes('Okazje') === true
            ? eventText === '' //display all Woman occasion. Price below 60zł
              ? Woman.filter((product) => product[2] < 60).map((product) => (
                  <Cardlazy product={product} key={product}>
                    {product[1]} {product[2]}zł
                  </Cardlazy>
                ))
              : Woman.filter((product) => product[2] < 60 && product[1].toUpperCase().includes(eventText.toUpperCase())).map((
                  product,
                  //display all Woman filtered occasion
                ) => (
                  <Cardlazy product={product} key={product}>
                    {product[1]} {product[2]}zł
                  </Cardlazy>
                ))
            : null}
        </InnerWrapper>
      </MainTemplate>
    );
  }
}

const mapStateToProps = (state) => {
  const { Man, Woman, eventText, sidebarOpen } = state;
  return { Man, Woman, eventText, sidebarOpen };
};
const mapDispatchToProps = (dispatch) => ({
  textFilter: (eventText) => dispatch(textFilter(eventText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserTemplate);
UserTemplate.propTypes = {
  pathname: PropTypes.string,
  Man: PropTypes.array,
  Woman: PropTypes.array,
  eventText: PropTypes.string,
  sidebarOpen: PropTypes.bool,
};
