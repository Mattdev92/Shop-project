import React, {
   useRef,
   useEffect,
   useState,
} from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';
import { ReturnClicked } from 'actions';
import { RedirectReset } from 'actions';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import Footer from 'components/organisms/footer/footer';
import CardLazy from 'components/molecules/card/cardlazy';
import {
   DetailSection,
   DescriptionSection,
   Button,
   InfoWrapper,
   ListItem,
   Option,
   CustomSelect,
   SelectWrapper,
   CardWrapper,
   CustomArrow
} from 'views/Details-styles';

const sizes = ['Rozmiar S', 'Rozmiar M', 'Rozmiar L', 'Rozmiar XL', 'Rozmiar XXL'];

const Details = ({
   actualInfo,
   ReturnClicked,
   RedirectReset,
   actualProduct,
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
         case 'Rozmiar S':
            setAvailable(true);
            break;
         case 'Rozmiar M':
            setAvailable(false);
            break;
         case 'Rozmiar L':
            setAvailable(true);
            break;
         case 'Rozmiar XL':
            setAvailable(false);
            break;
         case 'Rozmiar XXL':
            setAvailable(true);
            break;
         default:
      }
   };
   return (
      <>
         <MainTemplate>
            <DetailSection>
               <DescriptionSection>
                  <CardWrapper>
                     <CardLazy
                        product={actualProduct}
                        ref={myImage}
                     />
                  </CardWrapper>
                  <InfoWrapper
                     ref={myInfoWrapper}
                  >
                     <SelectWrapper>
                        <CustomSelect
                           value={actualSize}
                           onChange={(e) => {
                              handleChecked(e);
                           }}
                        >
                           {sizes.map((item) => (
                              <Option
                                 value={item}
                                 key={item}
                              >
                                 {item}
                              </Option>
                           ))}
                        </CustomSelect>
                        <CustomArrow/>
                     </SelectWrapper>
                     <ListItem>
                      {available
                        ? `Rozmiar ${actualSize} jest dostepny`
                        : `Rozmiar ${actualSize} nie jest dostepny`}  
                     </ListItem>
                     <ListItem>
                        Dostawa 48 godzin
                     </ListItem>
                     <ListItem>
                        100 dni na zwrot
                     </ListItem>
                     <ListItem>
                        Darmowa wysyłka od 200zł
                     </ListItem>
                  </InfoWrapper>
               </DescriptionSection>
               <Button
                  as={NavLink}
                  to={`${
                     actualInfo.includes('męsk')
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
         <Footer />
      </>
   );
};

const mapStateToProps = (state) => {
   const {
      actualItem,
      actualInfo,
      actualProduct,
   } = state;
   return {
      actualItem,
      actualInfo,
      actualProduct,
   };
};
const mapDispatchToProps = (dispatch) => ({
   ReturnClicked: () => dispatch(ReturnClicked()),
   RedirectReset: () => dispatch(RedirectReset()),
});
export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Details);
Details.propTypes = {
   actualItem: PropTypes.string,
   actualInfo: PropTypes.string,
};
