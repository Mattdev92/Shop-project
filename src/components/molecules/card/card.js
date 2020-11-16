import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import Cart from 'assets/product.svg';
import { CartClicked } from 'actions';
import { DetailClicked } from 'actions';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: auto;
  position: relative;
  width: 240px;
  height: 320px;
  :hover {
    cursor: pointer;
    transition: all 1.3s ease-out;
  }
  @media (max-width: 440px) {
    width: 300px;
    height: 410px;
    ${({ sidebarOpen }) =>
      sidebarOpen &&
      css`
        visibility: hidden;
        width: 0;
        height: 0;
      `};
  }
`;
const DiscountTitle = styled.h1`
  position: absolute;
  color: red;
  font-size: 2rem;
  z-index: 999;
`;
const TitleWrapper = styled.div`
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  background-color: ${({ productPrice, productInfo }) =>
    productPrice <= 60
      ? 'red'
      : ['damsk', 'Sukienka'].some((item) => productInfo.includes(item)) === true
      ? '#00008b'
      : 'green'};
  color: white;
  @media (max-width: 440px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const BackgroundImg = styled.img`
  position: absolute;
  width: 240px;
  height: 320px;
  :hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: all 0.3s ease-out;
  }

  @media (max-width: 440px) {
    width: 300px;
    height: 410px;
    :hover {
      cursor: pointer;
      transform: scale(1);
      transition: none;
    }
  }
`;

const Img = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  margin: 20px;
  :hover {
    cursor: pointer;
    transform: scale(1.5) translateY(-10px);
    transition: all 0.3s ease-out;
  }
`;
const ProductInCart = styled.h3`
  position: absolute;
  color: red;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  margin: 0 10px;
  :hover {
    cursor: pointer;
    transform: translateY(-10px);
    transition: all 0.3s ease-out;
  }
  @media (max-width: 440px) {
    font-size: 1.5rem;
  }
`;
const DateWrapper = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(17, 119, 246);
  color: white;
  font-size: 1rem;
  z-index: 999;
`;
const Card = ({
  children,
  product,
  productTab,
  CartClicked,
  DetailClicked,
  redirect,
  sidebarOpen,
}) => {
  const [displayDate, setDisplayDate] = useState(false);
  if (redirect) {
    return (
      <Redirect
        to={`${product[1].includes('męska') ? routes.OnDetails : routes.OnaDetails}${product[1]}`}
      />
    );
  }
  return (
    <Wrapper sidebarOpen={sidebarOpen}>
      {product[2] <= 60 && <DiscountTitle>-20%</DiscountTitle>}
      <BackgroundImg
        src={product[0]}
        onClick={() => DetailClicked(product[0], product[1])}
        onMouseEnter={() => setDisplayDate(true)}
        onMouseLeave={() => setDisplayDate(false)}
      />
      {displayDate && <DateWrapper>U CIEBIE W 2 DNI ROBOCZE</DateWrapper>}
      <TitleWrapper productPrice={product[2]} productInfo={product[1]}>
        {children}
      </TitleWrapper>
      {productTab.hasOwnProperty(product[1]) ? (
        <ProductInCart>Produkt w koszyku</ProductInCart>
      ) : (
        <Img
          src={Cart}
          alt="Cart"
          onClick={() =>
            CartClicked(
              product[0],
              product[1],
              product[2],
              productTab.hasOwnProperty(product[1]) ? productTab[product[1]].QuantityInCart : 1,
            )
          }
        />
      )}
    </Wrapper>
  );
};
const mapStateToProps = (state) => {
  const { productTab, redirect, sidebarOpen } = state;
  return {
    productTab: productTab,
    redirect: redirect,
    sidebarOpen: sidebarOpen,
  };
};
const mapDispatchToProps = (dispatch) => ({
  CartClicked: (productImage, productInfo, productPrice, itemQuantity) =>
    dispatch(CartClicked(productImage, productInfo, productPrice, itemQuantity)),
  DetailClicked: (actualItem, actualInfo) => dispatch(DetailClicked(actualItem, actualInfo)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Card);
Card.propTypes = {
  product: PropTypes.array,
  productTab: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  redirect: PropTypes.bool,
  sidebarOpen: PropTypes.bool,
};
