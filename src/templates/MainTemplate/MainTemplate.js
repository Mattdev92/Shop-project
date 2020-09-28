import React from 'react';
import Sidebar from 'components/organisms/sidebar/sidebar';
import Navigation from 'components/organisms/navigation/navigation';
import PropTypes from 'prop-types';
import Footer from 'components/organisms/footer/footer';
class MainTemplate extends React.Component {
  render() {
    const { children, bottom,display} = this.props;
    return (
      <>
      <Navigation />
      <Sidebar />
      {children} 
      <Footer bottom={bottom} display={display}/>         
      </>
    );
  }
}

export default MainTemplate;
MainTemplate.propTypes = {
  children: PropTypes.any.isRequired
}