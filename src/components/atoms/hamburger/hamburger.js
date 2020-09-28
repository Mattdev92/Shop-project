import styled, { css } from 'styled-components';
import React from 'react';
import {connect} from 'react-redux';
import {HamburgerClicked} from 'actions';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: inline-block;
  width: 43px;
  height: 49px;
  background-color: black;
  ${({sidebarOpen})=>sidebarOpen&&
 css`background-color: transparent;`
 }
  &:hover {
    cursor: pointer;
  }
  @media(max-width: 440px){
  position:absolute;
  top:0;
  left:0;
  justify-content: space-between;
  align-items: center;
  z-index: 998; 
 }
  `;

const HamburgerLine = styled.span`
  display: block;
  height: 1px;
  background-color: white;
  width: 80%;
  margin: 11px 4px;
  ${({ hamburgerAnim, rotation, position }) =>
    hamburgerAnim === true &&
    css`
      height: 2px;
      transform: translateY(${position}) rotate(${rotation});
      transition: all 0.3s 0.1s ease-out;
    `}
`;

const HamburgerMiddleLine = styled(HamburgerLine)`
  ${({ hamburgerAnim}) =>
    hamburgerAnim === true &&
    css`
      visibility: hidden;
      transition: visibility 0.1s ease-out;
    `}
`;

const Hamburger = ({ HamburgerClicked, hamburgerAnimStart,sidebarOpen }) => (
  <Wrapper onClick={HamburgerClicked} sidebarOpen={sidebarOpen}>
    <HamburgerLine hamburgerAnim={hamburgerAnimStart} rotation={'45deg'} position="13px" />
    <HamburgerMiddleLine hamburgerAnim={hamburgerAnimStart} />
    <HamburgerLine hamburgerAnim={hamburgerAnimStart} rotation={'-45deg'} position="-13px" />
  </Wrapper>
);
const mapStateToProps = (state) => {
  const {  hamburgerAnimStart,sidebarOpen } = state;
  return { hamburgerAnimStart,sidebarOpen };
};

const mapDispatchToProps = dispatch => ({
  HamburgerClicked: () => dispatch(HamburgerClicked()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);
Hamburger.propTypes={
   hamburgerAnimStart: PropTypes.bool,
   sidebarOpen: PropTypes.bool
}