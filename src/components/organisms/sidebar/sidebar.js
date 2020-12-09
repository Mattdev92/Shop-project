import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { hamburgerClicked } from 'actions';
import PropTypes from 'prop-types';
import {
   SidebarWrapper,
   ListWrapper,
   ItemWrapper,
} from 'components/organisms/sidebar/sidebar-styles';

const sidebarDelay = ['1s', '1.3s', '1.6s'];
const sidebarData = [
   'Informacje',
   'Kontakt',
   'Timer',
];

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
               {sidebarData.map((item, index) => (
                  <ItemWrapper
                     as={NavLink}
                     to={`/${item}`}
                     time={sidebarDelay[index]}
                     sidebaropen={sidebarOpen}
                     onClick={hamburgerClicked}
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
