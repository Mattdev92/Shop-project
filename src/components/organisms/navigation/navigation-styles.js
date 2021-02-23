import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

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
export const Wrapper = styled.nav`
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
    sidebaropen === true &&
    css`
      background-color: black;
      @media (max-width: 440px) {
        padding: 0;
        margin: 0;
        justify-content: space-evenly;
      }
    `}
`;
export const InnerWrapper = styled.div`
  margin: 0px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ sidebaropen }) =>
    sidebaropen === true &&
    css`
      background-color: white;
      filter: invert(1);
      transition-property: filter;
      transition-duration: 1s;
      transition-timing-function: linear;
    `}
  @media (max-width: 440px) {
    padding: 0;
    margin: 0;
  }
`;
export const CartWrapper = styled.div`
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;
`;
export const Counter = styled.div`
  color: black;
  font-size: 20px;
  margin: 10px 0px;
  position: absolute;
`;
export const Img = styled.img`
  width: 20px;
  height: 20px;
  margin: 10px 10px;
`;
export const ImgCart = styled.img`
  width: 20px;
  height: 20px;
  margin: 10px 10px;
  ${({ cartIconAnim }) =>
    cartIconAnim &&
    css`
      animation: ${cartAnim} 1s ease-out;
    `}
`;
export const Item = styled(NavLink)`
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
    sidebaropen === true &&
    css`
      color: white;
    `}
  @media (max-width: 440px) {
    padding: 0;
    margin: 0;
  }
`;
export const Sale = styled(Link)`
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
    sidebaropen === true &&
    css`
      color: white;
    `}
  @media (max-width: 440px) {
    padding: 0;
    margin: 0;
  }
`;
export const UserSale = styled(NavLink)`
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
    sidebaropen === true &&
    css`
      color: white;
    `}
  @media (max-width: 440px) {
    padding: 0;
    margin: 0;
  }
`;
