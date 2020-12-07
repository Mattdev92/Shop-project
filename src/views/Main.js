import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import styled from 'styled-components';
import bacgroundImage from 'assets/fashion.jpg';
import bacgroundImageTwo from 'assets/fashionMen.jpg';
import Slider from 'react-slick';
import { TimelineMax } from 'gsap';
import Title from 'components/atoms/title/title';
import SaleSlider from 'components/organisms/slider/slider';
const Wrapper = styled.div`
    background-image: url(${bacgroundImage});
    width: 80vw;
    height: 85vh;
    background-size: cover;
    background-repeat: no-repeat;
`;
const WrapperTwo = styled.div`
    background-image: url(${bacgroundImageTwo});
    width: 80vw;
    height: 85vh;
    background-size: cover;
    background-repeat: no-repeat;
`;
const MainTitle = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 42px;
    font-family: 'Jost', sans-serif;
    font-weight: 700;
    color: white;
    background-color: black;
    z-index: 2;
`;
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
        const settings = {
            dots: false,
            fade: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: 1,
            className: 'slides',
            lazyLoad: true,
        };
        return (
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
                <Title>SALE</Title>
                <SaleSlider />
            </MainTemplate>
        );
    }
}

export default Main;
