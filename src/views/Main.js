import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Slider from 'react-slick';
import { TimelineMax } from 'gsap';
import Title from 'components/atoms/title/title';
import SaleSlider from 'components/organisms/slider/slider';
import Footer from 'components/organisms/footer/footer';
import { connect } from 'react-redux';
import {
   Wrapper,
   MainTitle,
   WrapperTwo,
} from 'views/Main-styles';

class Main extends React.Component {
   constructor(props) {
      super(props);
      this.sliderSection = [];
      this.tlMain1 = new TimelineMax();
   }
   componentDidMount() {
      // use the node ref to create the animation
      if (window.screen.width > 400) {
         this.tlMain1.fromTo(
            this.sliderSection[0],
            { autoAlpha: 0, y: 50 },
            {
               duration: 0.5,
               autoAlpha: 1,
               y: 0,
               delay: 1,
            },
         );
      }
   }
   render() {
      const { sidebarOpen } = this.props;
      const settings = {
         dots: false,
         fade: true,
         infinite: true,
         speed: 500,
         autoplay: true,
         autoplaySpeed: 6000,
         slidesToShow: 1,
         arrows: true,
         slidesToScroll: 1,
         className: 'slides',
         lazyLoad: true,
      };
      return (
         <>
            <MainTemplate>
               <MainTitle
                  ref={(h1) =>
                     (this.sliderSection[0] = h1)
                  }
               >
                  NOTHIN' LIKE LUX
               </MainTitle>
               <Slider {...settings}>
                  <Wrapper />
                  <WrapperTwo />
               </Slider>

               {window.innerWidth < 500 ? (
                  sidebarOpen === true ? null : (
                     <>
                        <Title>SALE</Title>
                        <SaleSlider />
                     </>
                  )
               ) : (
                  <>
                     <Title>SALE</Title>
                     <SaleSlider />
                  </>
               )}
            </MainTemplate>
            <Footer />
         </>
      );
   }
}
const mapStateToProps = (state) => {
   const { sidebarOpen } = state;
   return { sidebarOpen };
};
export default connect(mapStateToProps)(Main);
