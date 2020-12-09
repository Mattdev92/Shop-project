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
   ItemSize,
   CustomSelect,
} from 'views/Details-styles';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

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
            <DetailSection>
               <DescriptionSection>
                  <CardLazy
                     product={actualProduct}
                     ref={myImage}
                  />
                  <InfoWrapper
                     ref={myInfoWrapper}
                  >
                     <CustomSelect
                        value={actualSize}
                        onChange={(e) => {
                           handleChecked(e);
                        }}
                     >
                        {sizes.map((item) => (
                           <ItemSize
                              value={item}
                              key={item}
                           >
                              {item}
                           </ItemSize>
                        ))}
                     </CustomSelect>
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
