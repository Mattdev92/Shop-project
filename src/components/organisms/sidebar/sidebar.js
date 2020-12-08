import styled, {
    keyframes,
    css,
} from 'styled-components';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { hamburgerClicked } from 'actions';
import PropTypes from 'prop-types';

const sidebarData = [
    'Informacje',
    'Kontakt',
    'Timer',
];
const sidebarDelay = ['1s', '1.3s', '1.6s'];

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
const SidebarWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 310px;
    transform: translateX(-310px);
    height: 100vh;
    background-color: black;
    color: white;
    z-index: 998;
    ${({ sidebaropen }) =>
        sidebaropen &&
        css`
            transform: translateX(0px);
            animation: ${SidebarAnim} 1s ease-out;
        `}
    ${({ sidebaropen }) =>
        sidebaropen === "false"
            ? css`
                  transform: translateX(-310px);
                  animation: ${SidebarAnimBack}
                      0.4s ease-out;
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
        ${({ sidebaropen }) =>
            sidebaropen &&
            css`
                z-index: 998;
                transform: translateX(0px);
                animation: ${SidebarAnim} 0.6s
                    ease-out;
            `}
    }
`;
const ListWrapper = styled.ul`
    position: absolute;
    top: 15vh;
    margin: 30px 0;
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
    ${({ sidebaropen }) =>
        sidebaropen &&
        css`
            transform: translateX(0px);
            animation: ${ItemAnim}
                ${({ time }) => time} ease-out;
        `}
    ${({ sidebaropen }) =>
        sidebaropen === "false"
            ? css`
                  transform: translateX(-100px);
                  animation: ${ItemAnimBack}
                      ${({ time }) => time}
                      ease-out;
              `
            : null}
  &::after {
        position: absolute;
        content: '';
        width: 0%;
        height: 11vh;
        left: 0px;
        z-index: -1;
        background-color: white;
        color:black;
    }
    &:hover {
        color:black;
    }
    &:hover::after {
        width: 100%;
        height: 11vh;
        transition: all 0.3s
            cubic-bezier(0.215, 0.061, 0.355, 1);
        cursor: pointer;
    }
    @media (max-width: 440px) {
        padding: 0px;
        margin: 0px;
        width: 80vw;
        height: 14vh;
        font-size: 2rem;
        ${({ sidebaropen }) =>
            sidebaropen &&
            css`
                align-items: center;
                border-bottom: thin solid grey;
                &:hover::after {
                    height: 14vh;
                }
            `}
    }
`;



class Sidebar extends React.Component {
    render() {
        const {
            sidebarOpen,
            hamburgerClicked,
        } = this.props;
        return (
            <SidebarWrapper
                sidebaropen={sidebarOpen}
            >
                <ListWrapper>
                    {sidebarData.map(
                        (item, index) => (
                            <ItemWrapper
                                as={NavLink}
                                to={`/${item}`}
                                time={
                                    sidebarDelay[
                                        index
                                    ]
                                }
                                sidebaropen={
                                    sidebarOpen
                                }
                                onClick={
                                    hamburgerClicked
                                }
                                item={item}
                                key={item}
                            >
                                {item}
                            </ItemWrapper>
                        ),
                    )}
                </ListWrapper>
            </SidebarWrapper>
        );
    }
}
const mapStateToProps = (state) => {
    const { sidebarOpen } = state;
    return { sidebarOpen };
};
const mapDispatchToProps = (dispatch) => ({
    hamburgerClicked: () =>
        dispatch(hamburgerClicked()),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Sidebar);
SidebarWrapper.propTypes = {
    sidebarOpen: PropTypes.bool,
};
