import React, {
    useRef,
    useEffect,
    useState,
} from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import { ReturnClicked } from 'actions';
import { RedirectReset } from 'actions';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import Footer from 'components/organisms/footer/footer';
import CardLazy from 'components/molecules/card/cardlazy';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
const DetailSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 440px) {
    }
`;

const ImageWrapper=styled.div`
 position: relative;
  height: 580px;
  overflow: hidden;
  max-width: 333px;
  :hover {
    cursor: pointer;
    transition: all 1.3s ease-out;
  }
  @media (max-width: 440px) {
  }
`;

const DescriptionSection = styled.section`
    padding: 0px auto;
    margin: 5px;
    display: flex;
    flex-direction: row;
    width: 60vw;
    justify-content: center;
    align-items: center;
    text-align: justify;
    @media (max-width: 440px) {
        flex-direction: column;
    }
`;

const Title = styled.h1`
    font-size: 1rem;
    @media (max-width: 440px) {
        font-size: 0.5rem;
    }
`;

const Button = styled.button`
    background-color: black;
    border: none;
    width: 130px;
    height: 30px;
    color: white;
    border-radius: 8px;
    font-size: 1.5rem;
    text-align:center;
    text-decoration:none;
    &:hover {
        cursor: pointer;
    }
`;

const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin: 20px;
    @media (max-width: 440px) {
        margin: 2px;
    }
`;

const ListItem = styled.h5`
    margin: 10px 2px;
`;

const ItemSize = styled.option`
    margin: 5px;
`;

const Details = ({
    actualItem,
    actualInfo,
    ReturnClicked,
    RedirectReset,
    productAll
}) => {
    const myImage = useRef(null);
    const myInfoWrapper = useRef(null);
    const myButton = useRef(null);
    const [actualSize, setActualSize] = useState(
        'S',
    );
    const [available, setAvailable] = useState(
        true,
    );
    RedirectReset();
    useEffect(() => {
        const tl = gsap.timeline();
        if (window.screen.width > 400) {
            tl.fromTo(
                myImage.current,
                { x: 200, autoAlpha: 0 },
                {
                    duration: 0.5,
                    x: 0,
                    autoAlpha: 1,
                },
            )
                .fromTo(
                    myInfoWrapper.current,
                    { y: 200, autoAlpha: 0 },
                    {
                        duration: 0.5,
                        y: 0,
                        autoAlpha: 1,
                    },
                )
                .fromTo(
                    myButton.current,
                    { x: -200, autoAlpha: 0 },
                    {
                        duration: 0.5,
                        x: 0,
                        autoAlpha: 1,
                    },
                );
        }
    }, []);
    const handleChecked = (event) => {
        setActualSize(event.target.value);
        switch (event.target.value) {
            case 'S':
                setAvailable(true);
                break;
            case 'M':
                setAvailable(false);
                break;
            case 'L':
                setAvailable(true);
                break;
            case 'XL':
                setAvailable(false);
                break;
            case 'XXL':
                setAvailable(true);
                break;
            default:
        }
    };
    return (
        <>
        <MainTemplate>
            <DetailSection
               
            >
                <Title>{actualInfo}</Title>
                <DescriptionSection>
                  <ImageWrapper>
                   <img
                        src={actualItem}
                        alt="product"
                        ref={myImage}
                    />
                    {/* <CardLazy product={productAll[0]} ref={myImage}/> */}
                  </ImageWrapper>
                    <InfoWrapper
                        ref={myInfoWrapper}
                    >
                        <h3>Dostępne rozmiary</h3>
                        <List>
                            <select
                                value={actualSize}
                                onChange={(e) => {
                                    handleChecked(
                                        e,
                                    );
                                }}
                            >
                                {sizes.map(
                                    (item) => (
                                        <ItemSize
                                            value={
                                                item
                                            }
                                            key={
                                                item
                                            }
                                        >
                                            {item}
                                        </ItemSize>
                                    ),
                                )}
                            </select>
                        </List>
                        {available
                            ? `Rozmiar ${actualSize} jest dostepny`
                            : `Rozmiar ${actualSize} nie jest dostepny`}
                        <ListItem>
                            Dostawa 48 godzin
                        </ListItem>
                        <ListItem>
                            100 dni na zwrot
                        </ListItem>
                        <ListItem>
                            Darmowa wysyłka od
                            200zł
                        </ListItem>
                    </InfoWrapper>
                </DescriptionSection>
                    <Button
                    as={NavLink}
                    to={`${
                        actualInfo.includes(
                            'męsk',
                        )
                            ? routes.On
                            : routes.Ona
                    }`}
                        onClick={ReturnClicked}
                        ref={myButton}
                    >
                        Powrót
                    </Button>
            </DetailSection>
        </MainTemplate>
        <Footer/>
        </>
    );
};

const mapStateToProps = (state) => {
    const {
        actualItem,
        actualInfo,
        productAll
      
    } = state;
    return {
        actualItem,
        actualInfo,
        productAll
    };
};
const mapDispatchToProps = (dispatch) => ({
    ReturnClicked: () =>
        dispatch(ReturnClicked()),
    RedirectReset: () =>
        dispatch(RedirectReset()),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Details);
Details.propTypes = {
    actualItem: PropTypes.string,
    actualInfo: PropTypes.string,
};
