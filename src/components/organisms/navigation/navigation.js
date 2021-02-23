import React from 'react';
import Hamburger from 'components/atoms/hamburger/hamburger';
import { connect } from 'react-redux';
import Home from 'assets/home.svg';
import Cart from 'assets/shopping-cart.svg';
import { NavLink } from 'react-router-dom';
import { HomeClicked } from 'actions';
import { YourCartClicked } from 'actions';
import { sidebarStopAnim } from 'actions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {
  Wrapper,
  InnerWrapper,
  CartWrapper,
  Counter,
  Img,
  ImgCart,
  Item,
  Sale,
  UserSale,
} from 'components/organisms/navigation/navigation-styles';

const sidebarData = ['On', 'Ona'];
const Navigation = ({
  HomeClicked,
  productQuantity,
  cartIconAnim,
  YourCartClicked,
  sidebarOpen,
  location: { pathname },
  sidebarStopAnim,
}) => (
  <Wrapper sidebaropen={sidebarOpen}>
    <Hamburger />
    {sidebarData.map((item) => (
      <Item
        as={NavLink}
        to={`/${item}`}
        sidebaropen={sidebarOpen}
        onClick={() => sidebarStopAnim()}
        key={item}
      >
        {item}
      </Item>
    ))}
    {pathname === '/' ? (
      <Sale
        sidebaropen={sidebarOpen}
        to="Okazje"
        smooth={true}
        spy={true}
        duration={1000}
        onClick={() => sidebarStopAnim()}
      >
        Okazje
      </Sale>
    ) : (
      <UserSale
        sidebaropen={sidebarOpen}
        as={NavLink}
        to="/Okazje"
        onClick={() => sidebarStopAnim()}
      >
        Okazje
      </UserSale>
    )}
    <InnerWrapper sidebaropen={sidebarOpen}>
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
  const { newone, productQuantity, cartIconAnim, sidebarOpen } = state;
  return {
    newone,
    productQuantity,
    cartIconAnim,
    sidebarOpen,
  };
};
const mapDispatchToProps = (dispatch) => ({
  HomeClicked: () => dispatch(HomeClicked()),
  YourCartClicked: () => dispatch(YourCartClicked()),
  sidebarStopAnim: () => dispatch(sidebarStopAnim()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navigation));
Navigation.propTypes = {
  productQuantity: PropTypes.number,
  cartIconAnim: PropTypes.bool,
};
