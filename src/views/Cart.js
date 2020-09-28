import React from 'react';
import styled, { css } from 'styled-components';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { connect } from 'react-redux';
import { PlusClicked } from 'actions';
import { MinusClicked } from 'actions';
import { DeleteClicked } from 'actions';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';

const Wrapper = styled.div`
  background-color: rgb(243, 243, 245);
  margin: -90vh 5px 5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100vw;
  opacity: 80%;
  @media (max-width: 440px) {
    margin: 0px;
    padding: 0px;
    margin: 40px 0 0 0;
    ${({ sidebaropen }) =>
      sidebaropen &&
      css`
        display: none;
      `}
  }
`;
const ItemWrapper = styled.div`
  background-color: white;
  margin: 20px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  max-width: 100vw;
  font-size: 2rem;
  @media (max-width: 440px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    margin: 20px;
  }
`;
const Img = styled.img`
  height: 256px;
  width: 192px;
  margin: 0px 30px;
`;

const Button = styled.button`
  background-color: ${({ color }) =>
    color === 'green'
      ? 'green'
      : color === 'red'
      ? 'red'
      : color === 'ZAMAWIAM'
      ? 'rgb(238,94,98)'
      : 'blue'};
  height: 30px;
  margin: ${({ color }) =>
    color === 'green' ? '10px 0px 0 30px' : color === 'ZAMAWIAM' ? '10px' : '10px 30px'};
  width: ${({ color }) => (color === 'ZAMAWIAM' ? '150px' : '30px')};
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 30px;
`;
const PriceSection = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  margin: 0px 10px;
  font-size: 1.5rem;
  color: black;
  text-align: center;
`;
const AllProductPrice = styled.h1`
  font-size: 2rem;
  color: black;
  font-weight: bold;
  @media (max-width: 440px) {
    font-size: 1rem;
  }
`;
const CourtTitle = styled.h1`
  font-size: 1rem;
  color: black;
  font-weight: bold;
`;

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.myButton = [];
    this.myImage = [];
    this.myButtonSection = [];
    this.myPriceSection = [];
    this.mySecondPriceSection = [];
    this.tlMain = new TimelineMax();
  }

  componentDidMount() {
    // use the node ref to create the animation
    if (window.screen.width > 400) {
      this.myButton.map((item, number) =>
        this.tlMain
          .fromTo(
            this.myButton[number],
            { autoAlpha: 0, x: 200 },
            { duration: 0.2, autoAlpha: 1, x: 0 },
          )
          .fromTo(
            this.myImage[number],
            { autoAlpha: 0, x: 200 },
            { duration: 0.2, autoAlpha: 1, x: 0 },
          )
          .fromTo(
            this.myButtonSection[number],
            { autoAlpha: 0, x: -200 },
            { duration: 0.2, autoAlpha: 1, x: 0 },
          )
          .fromTo(
            this.myPriceSection[number],
            { autoAlpha: 0, y: 100 },
            { duration: 0.2, autoAlpha: 1, y: 0 },
          )
          .fromTo(
            this.mySecondPriceSection[number],
            { autoAlpha: 0, x: 100 },
            { duration: 0.2, autoAlpha: 1, x: 0 },
          ),
      );
    }
  }

  render() {
    const {
      productTab,
      PlusClicked,
      MinusClicked,
      DeleteClicked,
      SumOfAllPrices,
      productQuantity,
      sidebarOpen,
    } = this.props;
    return (
      <MainTemplate display>
        <Wrapper sidebaropen={sidebarOpen}>
          {productQuantity !== 0 && <CourtTitle>Artykuły w koszyku</CourtTitle>}
          {Object.keys(productTab).map((key, number) => {
            return (
              <ItemWrapper key={key}>
                <Button
                  onClick={() => DeleteClicked(key, productTab[key].productInfo)}
                  color="red"
                  ref={(button) => (this.myButton[number] = button)}
                >
                  -
                </Button>
                <Img
                  src={productTab[key].productImage}
                  alt="error"
                  ref={(image) => (this.myImage[number] = image)}
                />
                {productTab[key].productInfo}
                <ButtonSection ref={(section) => (this.myButtonSection[number] = section)}>
                  <Button
                    onClick={() => PlusClicked(productTab[key], productTab[key].productInfo)}
                    color="green"
                  >
                    +
                  </Button>
                  {productTab[key].QuantityInCart !== 0 ? (
                    <Button
                      onClick={() => MinusClicked(productTab[key], productTab[key].productInfo)}
                      color="red"
                    >
                      -
                    </Button>
                  ) : (
                    <Button color="red" />
                  )}
                </ButtonSection>
                <PriceSection ref={(section) => (this.myPriceSection[number] = section)}>
                  {productTab[key].QuantityInCart}
                </PriceSection>
                <PriceSection ref={(section) => (this.mySecondPriceSection[number] = section)}>
                  {productTab[key].TotalPrice} zł
                </PriceSection>
              </ItemWrapper>
            );
          })}
          <AllProductPrice>
            {productQuantity === 0
              ? 'Twój koszyk jest pusty :('
              : `Koszt twoich zakupów ${SumOfAllPrices} zł brutto`}
          </AllProductPrice>
          {productQuantity !== 0 && (
            <NavLink to="/Buy">
              <Button color="ZAMAWIAM">ZAMAWIAM</Button>
            </NavLink>
          )}
        </Wrapper>
      </MainTemplate>
    );
  }
}
const mapStateToProps = (state) => {
  const { productTab, SumOfAllPrices, productQuantity, sidebarOpen } = state;
  return { productTab, SumOfAllPrices, productQuantity, sidebarOpen };
};
const mapDispatchToProps = (dispatch) => ({
  PlusClicked: (selectedProductTab, productInfo) =>
    dispatch(PlusClicked(selectedProductTab, productInfo)),
  MinusClicked: (selectedProductTab, productInfo) =>
    dispatch(MinusClicked(selectedProductTab, productInfo)),
  DeleteClicked: (selectedProductTab, productInfo) =>
    dispatch(DeleteClicked(selectedProductTab, productInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
Cart.defaultProps = {
  productTab: [],
};
Cart.propTypes = {
  productTab: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  SumOfAllPrices: PropTypes.number,
  productQuantity: PropTypes.number,
  sidebarOpen: PropTypes.bool,
};
