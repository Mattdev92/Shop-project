import React from 'react';
import styled, {
    keyframes,
    css,
} from 'styled-components';
import Hamburger from 'components/atoms/hamburger/hamburger';
import { connect } from 'react-redux';
import Home from 'assets/home.svg';
import Cart from 'assets/shopping-cart.svg';
import { NavLink } from 'react-router-dom';
import { HomeClicked } from 'actions';
import { YourCartClicked } from 'actions';
import { sidebarStopAnim } from 'actions';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
const sidebarData = ['On', 'Ona'];
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
    height: 15vh;
    padding: 0 30px;
    position: sticky;
    top: 0;
    display: flex;
    z-index: 999;
    justify-content: space-between;
    align-items: center;
    font-family: 'Jost', sans-serif;
    text-transform: uppercase;
    font-size: 12px;
    background-color: white;
    transition-property: background-color;
    transition-duration: 1s;
    transition-timing-function: linear;
    ${({ sidebaropen }) =>
        sidebaropen===true &&
        css`
    background-color: black;
    @media (max-width: 440px) {
        padding: 0;
        margin:0;
        justify-content: space-evenly;
  }
    `} `;

const InnerWrapper = styled.div`
    margin: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${({ sidebaropen }) =>
        sidebaropen===true &&
        css`
    background-color:white;
    filter: invert(1);
    transition-property: filter;
    transition-duration: 1s;
    transition-timing-function: linear;
    `}
    @media (max-width: 440px) {
        padding: 0;
        margin:0;
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
    color: black;
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

const Item = styled(NavLink)`
    color: black;
    transition-property: color;
    transition-duration: 1s;
    transition-timing-function: linear;
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        cursor: pointer;
    }
    ${({ sidebaropen }) =>
        sidebaropen===true &&
        css`
    color: white;
    `} 
    @media (max-width: 440px) {
        padding: 0;
        margin:0;
  }
`;

const Sale = styled(Link)`
    color: black;
    transition-property: color;
    transition-duration: 1s;
    transition-timing-function: linear;
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        cursor: pointer;
    }
    ${({ sidebaropen }) =>
        sidebaropen===true &&
        css`
    color: white;
    `} 
    @media (max-width: 440px) {
        padding: 0;
        margin:0;
  }
`;

const UserSale = styled(NavLink)`
    color: black;
    transition-property: color;
    transition-duration: 1s;
    transition-timing-function: linear;
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        cursor: pointer;
    }
    ${({ sidebaropen }) =>
        sidebaropen===true &&
        css`
    color: white;
    `} 
    @media (max-width: 440px) {
        padding: 0;
        margin:0;
  }
`;

const Navigation = ({
    HomeClicked,
    productQuantity,
    cartIconAnim,
    YourCartClicked,
    sidebarOpen,location: {pathname},
    sidebarStopAnim
}) => (
    <Wrapper sidebaropen={sidebarOpen}>
        <Hamburger/>
        {sidebarData.map((item) => (
            <Item as={NavLink} to={`/${item}`} sidebaropen={sidebarOpen} onClick={()=>sidebarStopAnim()} key={item}>
                {item}
            </Item>
        ))}
        {
           pathname==="/" ?
           <Sale
            sidebaropen={sidebarOpen}
                to="Okazje"
                smooth={true}
                duration={1000}
                onClick={()=>sidebarStopAnim()}
            >
              
                Okazje
            </Sale>: <UserSale
            sidebaropen={sidebarOpen}
                as={NavLink}
                to='/Okazje'
                onClick={()=>sidebarStopAnim()}
            >
              
                Okazje
            </UserSale>

        }
        <InnerWrapper sidebaropen={sidebarOpen}>
            <NavLink to="/">
                <Img
                    src={Home}
                    alt="Home logo"
                    onClick={HomeClicked}

                />
            </NavLink>
            <CartWrapper>
                <Counter>
                    {productQuantity}
                </Counter>
                <NavLink to="/Cart">
                    <ImgCart
                        src={Cart}
                        alt="Shopping cart"
                        onClick={YourCartClicked}
                        cartIconAnim={
                            cartIconAnim
                        }
                    />
                </NavLink>
            </CartWrapper>
        </InnerWrapper>
    </Wrapper>
);

const mapStateToProps = (state) => {
    const {
        newone,
        productQuantity,
        cartIconAnim,
        sidebarOpen,
    } = state;
    return {
        newone,
        productQuantity,
        cartIconAnim,
        sidebarOpen,
    };
};

const mapDispatchToProps = (dispatch) => ({
    HomeClicked: () => dispatch(HomeClicked()),
    YourCartClicked: () =>
        dispatch(YourCartClicked()),
    sidebarStopAnim: ()=>dispatch(sidebarStopAnim())
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(Navigation));
Navigation.propTypes = {
    productQuantity: PropTypes.number,
    cartIconAnim: PropTypes.bool,
};
