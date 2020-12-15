import React from 'react';
import { connect } from 'react-redux';
import { hamburgerClicked } from 'actions';
import PropTypes from 'prop-types';
import {
   Wrapper,
   HamburgerLine,
   HamburgerMiddleLine,
} from 'components/atoms/hamburger/hamburger-styles';

const Hamburger = ({
   hamburgerClicked,
   hamburgerAnimStart,
   sidebarOpen,
}) => (
   <Wrapper
      onClick={hamburgerClicked}
      sidebaropen={sidebarOpen}
      id="hamburgerComponent"
   >
      <HamburgerLine
         hamburgerAnim={hamburgerAnimStart}
         rotation={'45deg'}
         position="13px"
      />
      <HamburgerMiddleLine
         hamburgerAnim={hamburgerAnimStart}
      />
      <HamburgerLine
         hamburgerAnim={hamburgerAnimStart}
         rotation={'-45deg'}
         position="-13px"
      />
   </Wrapper>
);
const mapStateToProps = (state) => {
   const {
      hamburgerAnimStart,
      sidebarOpen,
   } = state;
   return { hamburgerAnimStart, sidebarOpen };
};

const mapDispatchToProps = (dispatch) => ({
   hamburgerClicked: () =>
      dispatch(hamburgerClicked()),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Hamburger);

Hamburger.propTypes = {
   hamburgerAnimStart: PropTypes.bool,
   sidebarOpen: PropTypes.bool,
};
