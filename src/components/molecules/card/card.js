import React, { useState } from 'react';
import { connect } from 'react-redux';
import Cart from 'assets/add-to-basket.svg';
import { CartClicked } from 'actions';
import { DetailClicked } from 'actions';
import { Redirect } from 'react-router-dom';
import { routes } from 'routes';
import PropTypes from 'prop-types';
import {
  Wrapper,
  DiscountDescription,
  Description,
  PriceDescription,
  CartImg,
  ProductInCart,
} from 'components/molecules/card/card-styles';

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
          product[1].includes('męsk') ? routes.OnDetails : routes.OnaDetails
        }${product[1]}`}
      />
    );
  }
  return (
    <Wrapper>
      {product[2] <= 60 && <DiscountDescription>-20%</DiscountDescription>}
      <img
        src={change && product[3] !== null ? product[3] : product[0]}
        onClick={() => DetailClicked(product[0], product[1], product)}
        onMouseEnter={() => setChange(true)}
        onMouseLeave={() => setChange(false)}
        alt="Image1"
      />
      <Description>{product[1]}</Description>
      <PriceDescription>{product[2]} zł</PriceDescription>
      {productTab.hasOwnProperty(product[1]) ? (
        <ProductInCart>Produkt w koszyku</ProductInCart>
      ) : (
        <CartImg
          src={Cart}
          alt="Cart"
          onClick={() =>
            CartClicked(
              product[0],
              product[1],
              product[2],
              productTab.hasOwnProperty(product[1])
                ? productTab[product[1]].QuantityInCart
                : 1
            )
          }
        />
      )}
    </Wrapper>
  );
};
const mapStateToProps = (state) => {
  const { productTab, redirect } = state;
  return {
    productTab: productTab,
    redirect: redirect,
  };
};
const mapDispatchToProps = (dispatch) => ({
  CartClicked: (productImage, productInfo, productPrice, itemQuantity) =>
    dispatch(
      CartClicked(productImage, productInfo, productPrice, itemQuantity)
    ),
  DetailClicked: (actualItem, actualInfo, actualProduct) =>
    dispatch(DetailClicked(actualItem, actualInfo, actualProduct)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
Card.propTypes = {
  product: PropTypes.array,
  productTab: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  redirect: PropTypes.bool,
};
