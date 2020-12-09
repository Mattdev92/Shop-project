import React from 'react';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import { connect } from 'react-redux';
import { PlusClicked } from 'actions';
import { MinusClicked } from 'actions';
import { DeleteClicked } from 'actions';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';
import {
   Wrapper,
   ItemWrapper,
   Img,
   Button,
   ButtonSection,
   PriceSection,
   AllProductPrice,
   CourtTitle,
} from 'views/Cart-styles';

class Cart extends React.Component {
   constructor(props) {
      super(props);
      this.myItem = [];
      this.tlMain = new TimelineMax();
   }

   componentDidMount() {
      // use the node ref to create the animation
      if (window.screen.width > 400) {
         this.myItem.map((item) =>
            this.tlMain.fromTo(
               this.myItem[item],
               { autoAlpha: 0, x: 200 },
               {
                  duration: 0.2,
                  autoAlpha: 1,
                  x: 0,
               },
            ),
         );
      }
   }

   render() {
      const {
         productTab,
         PlusClicked,
         MinusClicked,
         DeleteClicked,
         SumOfAllPrices,
         productQuantity,
         sidebarOpen,
      } = this.props;
      return (
         <>
            <MainTemplate>
               <Wrapper sidebaropen={sidebarOpen}>
                  {productQuantity !== 0 && (
                     <CourtTitle>
                        Artykuły w koszyku
                     </CourtTitle>
                  )}
                  {Object.keys(productTab).map(
                     (key, number) => {
                        return (
                           <ItemWrapper
                              key={key}
                              ref={(div) =>
                                 (this.myItem[
                                    number
                                 ] = div)
                              }
                           >
                              <Button
                                 onClick={() =>
                                    DeleteClicked(
                                       key,
                                       productTab[
                                          key
                                       ]
                                          .productInfo,
                                    )
                                 }
                                 type="delete"
                              >
                                 -
                              </Button>
                              <Img
                                 src={
                                    productTab[
                                       key
                                    ].productImage
                                 }
                                 alt="error"
                              />
                              {
                                 productTab[key]
                                    .productInfo
                              }
                              <ButtonSection>
                                 <Button
                                    onClick={() =>
                                       PlusClicked(
                                          productTab[
                                             key
                                          ],
                                          productTab[
                                             key
                                          ]
                                             .productInfo,
                                       )
                                    }
                                    type="add"
                                 >
                                    +
                                 </Button>
                                 {productTab[key]
                                    .QuantityInCart !==
                                 0 ? (
                                    <Button
                                       onClick={() =>
                                          MinusClicked(
                                             productTab[
                                                key
                                             ],
                                             productTab[
                                                key
                                             ]
                                                .productInfo,
                                          )
                                       }
                                       type="delete"
                                    >
                                       -
                                    </Button>
                                 ) : (
                                    <Button type="delete" />
                                 )}
                              </ButtonSection>
                              <PriceSection>
                                 {
                                    productTab[
                                       key
                                    ]
                                       .QuantityInCart
                                 }
                              </PriceSection>
                              <PriceSection>
                                 {
                                    productTab[
                                       key
                                    ].TotalPrice
                                 }{' '}
                                 zł
                              </PriceSection>
                           </ItemWrapper>
                        );
                     },
                  )}
                  <AllProductPrice>
                     {productQuantity === 0
                        ? 'Twój koszyk jest pusty :('
                        : `Koszt twoich zakupów ${SumOfAllPrices} zł brutto`}
                  </AllProductPrice>
                  {productQuantity !== 0 && (
                     <NavLink to="/Buy">
                        <Button type="ZAMAWIAM">
                           ZAMAWIAM
                        </Button>
                     </NavLink>
                  )}
               </Wrapper>
            </MainTemplate>
         </>
      );
   }
}
const mapStateToProps = (state) => {
   const {
      productTab,
      SumOfAllPrices,
      productQuantity,
      sidebarOpen,
   } = state;
   return {
      productTab,
      SumOfAllPrices,
      productQuantity,
      sidebarOpen,
   };
};
const mapDispatchToProps = (dispatch) => ({
   PlusClicked: (
      selectedProductTab,
      productInfo,
   ) =>
      dispatch(
         PlusClicked(
            selectedProductTab,
            productInfo,
         ),
      ),
   MinusClicked: (
      selectedProductTab,
      productInfo,
   ) =>
      dispatch(
         MinusClicked(
            selectedProductTab,
            productInfo,
         ),
      ),
   DeleteClicked: (
      selectedProductTab,
      productInfo,
   ) =>
      dispatch(
         DeleteClicked(
            selectedProductTab,
            productInfo,
         ),
      ),
});
export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(Cart);
Cart.defaultProps = {
   productTab: [],
};
Cart.propTypes = {
   productTab: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
   ]),
   SumOfAllPrices: PropTypes.number,
   productQuantity: PropTypes.number,
   sidebarOpen: PropTypes.bool,
};
