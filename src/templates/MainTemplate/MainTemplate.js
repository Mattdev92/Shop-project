import React from 'react';
import Sidebar from 'components/organisms/sidebar/sidebar';
import Navigation from 'components/organisms/navigation/navigation';
import PropTypes from 'prop-types';

class MainTemplate extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Navigation />
        <Sidebar />
        {children}
      </>
    );
  }
}

export default MainTemplate;
MainTemplate.propTypes = {
  children: PropTypes.any.isRequired,
};
