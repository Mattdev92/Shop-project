import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cardlazy from 'components/molecules/card/cardlazy';
import styled from 'styled-components';

const SliderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class SaleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      className: 'slides',
      lazyLoad: true,
    };
    const { Woman, Man } = this.props;
    return (
      <section id="Okazje">
        <Slider {...settings}>
          {Woman.concat(Man)
            .filter((product) => product[2] < 60)
            .map((product) => (
              <SliderWrapper>
                <Cardlazy
                  product={product}
                  key={product}
                >
                  {product[1]} {product[2]}zł
                </Cardlazy>
              </SliderWrapper>
            ))}
        </Slider>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  const { Woman, Man } = state;
  return { Woman, Man };
};
SaleSlider.propTypes = {
  pathname: PropTypes.string,
  Man: PropTypes.array,
  Woman: PropTypes.array,
  eventText: PropTypes.string,
  sidebarOpen: PropTypes.bool,
};
export default connect(
  mapStateToProps,
  null,
)(SaleSlider);
