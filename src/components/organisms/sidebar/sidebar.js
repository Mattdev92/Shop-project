import styled, { keyframes, css } from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { HamburgerClicked } from 'actions';
import PropTypes from 'prop-types';

const sidebarData = ['On', 'Ona', 'Okazje', 'Informacje', 'Kontakt', 'Timer'];
const sidebarDelay = ['1s', '1.3s', '1.6s', '1.9s', '2.2s', '2.5s'];
const SidebarAnim = keyframes`
from{
  transform: translateX(-310px);
opacity: 0%;
}
to{
transform: translateX(0px);
opacity: 100%;
}
@media(max-width:440px){
  from{
  transform: translateX(-80vw);
opacity: 0%;
}
to{
transform: translateX(0px);
opacity: 100%;
}
}
`;

const ItemAnim = keyframes`
from{
opacity: 0%;
transform: translateX(-100px)
}
to{
opacity: 100%;
transform: translateX(0px)
}
`;

const SidebarAnimBack = keyframes`
from{
  transform: translateX(0px);
  opacity:0%;
}
to{
  transform: translateX(-310px);
  opacity:100%
}
@media (max-width: 440px) {
  from{
transform: translateX(0px);
opacity: 0%;
}
to{
transform: translateX(-80vw)
opacity: 100%;
}
}
`;

const ItemAnimBack = keyframes`
from{
transform: translateX(0px)
}
to{
transform: translateX(-100px)
}
`;

const ListWrapper = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const ItemWrapper = styled.li`
  transform: translateX(-100px);
  width: 310px;
  margin: 0px;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  list-style: none;
  border: none;
  border-bottom: thin solid grey;
  height: 11vh;
  font-size: 1.2rem;
  text-decoration: none;
  color: white;
  ${({ open }) =>
    open &&
    css`
      transform: translateX(0px);
      animation: ${ItemAnim} ${({ time }) => time} ease-out;
    `}
  ${({ open, firstclick }) =>
    open === 0 && firstclick
      ? css`
          transform: translateX(-100px);
          animation: ${ItemAnimBack} ${({ time }) => time} ease-out;
        `
      : null}
  &::after {
    position: absolute;
    content: '';
    width: 0%;
    height: 11vh;
    left: 0px;
    z-index: -1;
    background-color: ${({ item }) =>
      item === 'Ona'
        ? '#00008b'
        : item === 'On'
        ? 'green'
        : item === 'Okazje'
        ? 'red'
        : item === 'Kontakt'
        ? 'yellow'
        : 'grey'};
  }
  &:hover::after {
    width: 100%;
    height: 11vh;
    transition: all 0.3s cubic-bezier(0.215, 0.061, 0.355, 1);
    cursor: pointer;
  }
  @media (max-width: 440px) {
    padding: 0px;
    margin: 0px;
    width: 80vw;
    height: 14vh;
    font-size: 2rem;
    ${({ open }) =>
      open &&
      css`
        align-items: center;
        border-bottom: thin solid grey;
        &:hover::after {
          height: 14vh;
        }
      `}
  }
`;

const SidebarWrapper = styled.div`
  width: 310px;
  transform: translateX(-310px);
  margin: -30px;
  position: sticky;
  top: 0;
  height: 100vh;
  background-color: black;
  color: white;
  z-index: 1;
  ${({ open }) =>
    open &&
    css`
      transform: translateX(0px);
      animation: ${SidebarAnim} 1s ease-out;
    `}
  ${({ open, firstclick }) =>
    open === 0 && firstclick
      ? css`
          transform: translateX(-310px);
          animation: ${SidebarAnimBack} 0.4s ease-out;
          height: 100vh;
        `
      : null}
    @media (max-width: 440px) {
    position: absolute;
    width: 80vw;
    transform: translateX(-80vw);
    top: 0px;
    margin: 0px;
    padding: 0px;
    ${({ open }) =>
      open &&
      css`
        z-index: 998;
        transform: translateX(0px);
        animation: ${SidebarAnim} 0.6s ease-out;
      `}
  }
`;

class Sidebar extends React.Component {
  render() {
    const { sidebarOpen, hamburgerClicked, HamburgerClicked } = this.props;
    return (
      <SidebarWrapper open={sidebarOpen} firstclick={hamburgerClicked}>
        <ListWrapper>
          {sidebarData.map((item, index) => (
            <ItemWrapper
              as={NavLink}
              to={`/${item}`}
              time={sidebarDelay[index]}
              open={sidebarOpen}
              firstclick={hamburgerClicked}
              onClick={HamburgerClicked}
              item={item}
              key={item}
            >
              {item}
            </ItemWrapper>
          ))}
        </ListWrapper>
      </SidebarWrapper>
    );
  }
}
const mapStateToProps = (state) => {
  const { sidebarOpen, hamburgerClicked } = state;
  return { sidebarOpen, hamburgerClicked };
};
const mapDispatchToProps = (dispatch) => ({
  HamburgerClicked: () => dispatch(HamburgerClicked()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
SidebarWrapper.propTypes = {
  sidebarOpen: PropTypes.bool,
};
