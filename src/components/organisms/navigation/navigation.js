import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import Hamburger from 'components/atoms/hamburger/hamburger';
import { connect } from 'react-redux';

import Home from 'assets/home.svg';
import Cart from 'assets/shopping-cart.svg';

import { NavLink } from 'react-router-dom';
import { HomeClicked } from 'actions';
import { YourCartClicked } from 'actions';
import PropTypes from 'prop-types';

const cartAnim = keyframes`
0%{
  transform: translateX(0px)
  translateY(0px)
  scale(1);
}
50%{
  transform: translateX(-70px)
  translateY(70px)
  scale(3);
}
100%{
  transform: translateX(0px)
  translateY(0px)
  scale(1);
}
`;

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  height: 30px;
  width: 100vw;
  z-index: 999;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 440px) {
   justify-content:center;
   ${({sidebarOpen})=>sidebarOpen&&
  css`
    height: 49px;
    width:43px;
  `}
  ${({clicked})=>clicked&&
  css`
    height: 49px;
  `
  } 
  }
  
`;
const InnerWrapper = styled.nav`
  margin: 0px 10px;
  
 @media (max-width: 440px) {
    align-items: center;
   ${({sidebarOpen})=>sidebarOpen&&
    css`
    display: none;
    `
    } 
  }
`;
const CartWrapper = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;
`;
const Counter = styled.div`
  color: red;
  font-size: 20px;
  margin: 10px 0px;
  position: absolute;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  margin: 10px 10px;
`;
const ImgCart = styled.img`
  width: 20px;
  height: 20px;
  margin: 10px 10px;
  ${({ cartIconAnim }) =>
    cartIconAnim &&
    css`
      animation: ${cartAnim} 1s ease-out;
    `}
`;

const Navigation = ({ HomeClicked, productQuantity, cartIconAnim, YourCartClicked,sidebarOpen,clicked }) => (
  <Wrapper sidebarOpen={sidebarOpen} clicked={clicked}>
    <Hamburger />
    <InnerWrapper sidebarOpen={sidebarOpen}>
      <NavLink to="/">
        <Img src={Home} alt="Home logo" onClick={HomeClicked} />
      </NavLink>
      <CartWrapper>
        <Counter>{productQuantity}</Counter>
        <NavLink to="/Cart">
          <ImgCart
            src={Cart}
            alt="Shopping cart"
            onClick={YourCartClicked}
            cartIconAnim={cartIconAnim}
          />
        </NavLink>
      </CartWrapper>
    </InnerWrapper>
  </Wrapper>
);

const mapStateToProps = (state) => {
  const { newone, productQuantity, cartIconAnim,sidebarOpen, clicked } = state;
  return { newone, productQuantity, cartIconAnim,sidebarOpen, clicked };
};
const mapDispatchToProps = (dispatch) => ({
  HomeClicked: () => dispatch(HomeClicked()),
  YourCartClicked: () => dispatch(YourCartClicked()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
Navigation.propTypes={
   productQuantity: PropTypes.number,
   cartIconAnim: PropTypes.bool,
   sidebarOpen:PropTypes.bool,
   clicked: PropTypes.bool
}