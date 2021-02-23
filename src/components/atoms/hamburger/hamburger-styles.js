import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  width: 43px;
  height: 49px;
  background-color: white;
  ${({ sidebaropen }) =>
    sidebaropen &&
    css`
      background-color: transparent;
    `}
  &:hover {
    cursor: pointer;
  }
`;
export const HamburgerLine = styled.span`
  display: block;
  height: 1px;
  background-color: black;
  width: 80%;
  margin: 11px 4px;
  ${({ hamburgerAnim, rotation, position }) =>
    hamburgerAnim === true &&
    css`
      height: 2px;
      transform: translateY(${position}) rotate(${rotation});
      transition: all 0.3s 0.1s ease-out;
      background-color: white;
      z-index: 999;
    `}
`;
export const HamburgerMiddleLine = styled(HamburgerLine)`
  ${({ hamburgerAnim }) =>
    hamburgerAnim === true &&
    css`
      visibility: hidden;
      transition: visibility 0.1s ease-out;
      background-color: white;
      z-index: 999;
    `}
`;
