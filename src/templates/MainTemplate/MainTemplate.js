import React from 'react';
import Sidebar from 'components/organisms/sidebar/sidebar';
import Navigation from 'components/organisms/navigation/navigation';
import PropTypes from 'prop-types';
import SliderMan from 'components/organisms/slider/slider';
import styled from 'styled-components';
const Title=styled.div`
text-align:center;
font-size:24px;
font-family:'Jost','san-serif';
font-weight:700;
height:30px;
margin-top: 35px;
bottom:0;
`;
class MainTemplate extends React.Component {
  render() {
    const {
      children,
    } = this.props;
    return (
      <>
        <Navigation />
        <Sidebar />
        {children}
        <Title>SALE</Title>
        <SliderMan/>       
      </>
    );
  }
}

export default MainTemplate;
MainTemplate.propTypes = {
  children: PropTypes.any.isRequired,
};
