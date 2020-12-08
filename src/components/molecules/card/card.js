import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Cart from 'assets/add-to-basket.svg';
import { CartClicked } from 'actions';
import { DetailClicked } from 'actions';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  height: 580px;
  overflow: hidden;
  max-width: 333px;
  :hover {
    cursor: pointer;
    transition: all 1.3s ease-out;
  }
  @media (max-width: 440px) {
  }
`;
const DiscountDescription = styled.h1`
  position: absolute;
  bottom: 20px;
  right: 0;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: #191919;
  z-index: 2;
`;
const Description = styled.div`
  position: absolute;
  bottom: 24px;
  width: 100%;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #191919;
`;
const PriceDescription = styled.div`
  position: absolute;
  bottom: 6px;
  width: 100%;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #191919;
  font-weight: 700 !important;
`;

const CartImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 40px;
  width: 40px;
  height: 40px;
  margin: 10px;
  :hover {
    cursor: pointer;
    transform: scale(1.5) translateY(-10px);
    transition: all 0.3s ease-out;
  }
`;
const ProductInCart = styled.h3`
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
  height: 14px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #191919;
  :hover {
    cursor: pointer;
    transform: translateY(-10px);
    transition: all 0.3s ease-out;
  }
  @media (max-width: 440px) {
    font-size: 1.5rem;
  }
`;
const Card = ({
  product,
  productTab,
  CartClicked,
  DetailClicked,
  redirect,
}) => {
  const [change, setChange] = useState(false);
  if (redirect) {
    return (
      <Redirect
        to={`${
          product[1].includes('męsk')
            ? routes.OnDetails
            : routes.OnaDetails
        }${product[1]}`}
      />
    );
  }

  return (
    <Wrapper>
      {product[2] <= 60 && (
        <DiscountDescription>
          -20%
        </DiscountDescription>
      )}
      <img
        src={
          change && product[3] !== null
            ? product[3]
            : product[0]
        }
        onClick={() =>
          DetailClicked(product[0], product[1], product[2],product[3])
        }
        onMouseEnter={() => setChange(true)}
        onMouseLeave={() => setChange(false)}
        alt="Image1"
      />
      <Description>{product[1]}</Description>
      <PriceDescription>
        {product[2]} zł
      </PriceDescription>
      {productTab.hasOwnProperty(product[1]) ? (
        <ProductInCart>
          Produkt w koszyku
        </ProductInCart>
      ) : (
        <CartImg
          src={Cart}
          alt="Cart"
          onClick={() =>
            CartClicked(
              product[0],
              product[1],
              product[2],
              productTab.hasOwnProperty(
                product[1],
              )
                ? productTab[product[1]]
                    .QuantityInCart
                : 1,
            )
          }
        />
      )}
    </Wrapper>
  );
};
const mapStateToProps = (state) => {
  const {
    productTab,
    redirect,
  } = state;
  return {
    productTab: productTab,
    redirect: redirect,
  };
};
const mapDispatchToProps = (dispatch) => ({
  CartClicked: (
    productImage,
    productInfo,
    productPrice,
    itemQuantity,
  ) =>
    dispatch(
      CartClicked(
        productImage,
        productInfo,
        productPrice,
        itemQuantity,
      ),
    ),
  DetailClicked: (actualItem, actualInfo) =>
    dispatch(
      DetailClicked(actualItem, actualInfo),
    ),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Card);
Card.propTypes = {
  product: PropTypes.array,
  productTab: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  redirect: PropTypes.bool,
};
