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
    ${({ sidebarOpen }) =>
        sidebarOpen===true &&
        css`
    background-color: black;
    `} `;
const InnerWrapper = styled.div`
    margin: 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    ${({ sidebarOpen }) =>
        sidebarOpen===true &&
        css`
    color: white;
    `} 
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
    ${({ sidebarOpen }) =>
        sidebarOpen===true &&
        css`
    color: white;
    `} 
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
    ${({ sidebarOpen }) =>
        sidebarOpen===true &&
        css`
    color: white;
    `} 
`;

const Navigation = ({
    HomeClicked,
    productQuantity,
    cartIconAnim,
    YourCartClicked,
    sidebarOpen,location: {pathname},
    sidebarStopAnim
}) => (
    <Wrapper sidebarOpen={sidebarOpen}>
        <Hamburger />
        {console.log(pathname)
        }
        {sidebarData.map((item) => (
            <Item as={NavLink} to={`/${item}`} sidebarOpen={sidebarOpen} onClick={()=>sidebarStopAnim()}>
                {item}
            </Item>
        ))}
        {
           pathname==="/" ?
           <Sale
            sidebarOpen={sidebarOpen}
                to="Okazje"
                smooth={true}
                duration={1000}
            >
              
                Okazje
            </Sale>: <UserSale
            sidebarOpen={sidebarOpen}
                as={NavLink}
                to='/Okazje'
            >
              
                Okazje
            </UserSale>

        }
        <InnerWrapper>
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
