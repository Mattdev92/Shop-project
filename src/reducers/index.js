import jacketMan1 from 'assets/man/model1.png';
import jacketMan2 from 'assets/man/model2.png';
import jacketMan3 from 'assets/man/model3.png';
import jacketMan4 from 'assets/man/model4.png';
import tShirtMan1 from 'assets/man/model6.png';
import tShirtMan2 from 'assets/man/model7.png';
import blouseMan1 from 'assets/man/model5.png';
import suiteMan1 from 'assets/man/model8.png';
import suiteMan2 from 'assets/man/model9.png';
import suiteMan3 from 'assets/man/model10.png';
import suiteMan4 from 'assets/man/model11.png';
import dressWoman1 from 'assets/woman/model1-1.png';
import dressWoman2 from 'assets/woman/model2-1.png';
import dressWoman3 from 'assets/woman/model3-1.png';
import dressWoman4 from 'assets/woman/model4-1.png';
import dressWoman5 from 'assets/woman/model5-1.png';
import dressWoman6 from 'assets/woman/model6-1.png';
import dressWoman7 from 'assets/woman/model7-1.png';
import dressWoman8 from 'assets/woman/model1-2.png';
import dressWoman9 from 'assets/woman/model2-2.png';
import dressWoman10 from 'assets/woman/model3-2.png';
import dressWoman11 from 'assets/woman/model4-2.png';
import dressWoman12 from 'assets/woman/model5-2.png';
import dressWoman13 from 'assets/woman/model6-2.png';
import dressWoman14 from 'assets/woman/model7-2.png';

const initialState = {
   actualProduct: null,
   sidebarOpen: null,
   hamburgerAnimStart: false,
   productQuantity: 0,
   productTab: [],
   SumOfAllPrices: 0,
   cartIconAnim: false,
   Man: [
      [
         jacketMan1,
         'Kurtka męska model 1 ',
         150,
         null,
      ],
      [
         jacketMan2,
         'Kurtka męska model 2 ',
         250,
         null,
      ],
      [
         jacketMan3,
         'Kurtka męska model 3 ',
         300,
         null,
      ],
      [
         jacketMan4,
         'Kurtka męska model 4 ',
         130,
         null,
      ],
      [
         tShirtMan1,
         'Koszulka męska model 1 ',
         20,
         null,
      ],
      [
         tShirtMan2,
         'Koszulka męska model 2 ',
         50,
         null,
      ],
      [
         blouseMan1,
         'Bluza męska model 1 ',
         20,
         null,
      ],
      [
         suiteMan1,
         'Garnitur męski model 1 ',
         240,
         null,
      ],
      [
         suiteMan2,
         'Garnitur męski model 2 ',
         340,
         null,
      ],
      [
         suiteMan3,
         'Garnitur męski model 3 ',
         440,
         null,
      ],
      [
         suiteMan4,
         'Garnitur męski model 4 ',
         2240,
         null,
      ],
   ],
   Woman: [
      [
         dressWoman1,
         'Spudnica model 1 ',
         50,
         dressWoman8,
      ],
      [
         dressWoman2,
         'Kurtka model 1 ',
         100,
         dressWoman9,
      ],
      [
         dressWoman3,
         'Spodnie model 1 ',
         150,
         dressWoman10,
      ],
      [
         dressWoman4,
         'Sukienka model 1 ',
         350,
         dressWoman11,
      ],
      [
         dressWoman5,
         'Sukienka model 2 ',
         250,
         dressWoman12,
      ],
      [
         dressWoman6,
         'Spodnie model 2 ',
         50,
         dressWoman13,
      ],
      [
         dressWoman7,
         'Sukienka model 3 ',
         350,
         dressWoman14,
      ],
   ],
   eventText: '',
   redirect: false,
   actualItem: '',
};

const rootReducer = (
   state = initialState,
   action,
) => {
   switch (action.type) {
      case 'HAMBURGER_CLICKED':
         return {
            ...state,
            sidebarOpen: !state.sidebarOpen,
            hamburgerAnimStart: !state.hamburgerAnimStart,
            cartIconAnim: false,
            redirect: false,
         };
      case 'HOME_CLICKED':
         return {
            ...state,
            sidebarOpen: null,
            hamburgerAnimStart: false,
            cartIconAnim: false,
            redirect: false,
         };

      case 'YOURCART_CLICKED':
         return {
            ...state,
            sidebarOpen: null,
            hamburgerAnimStart: false,
            cartIconAnim: false,
         };
      case 'REDIRECT_RESET':
         return {
            ...state,
            redirect: false,
         };
      case 'CART_CLICKED':
         return {
            ...state,
            productQuantity: state.productTab.hasOwnProperty(
               action.payload.productInfo,
            )
               ? state.productQuantity
               : state.productQuantity + 1,
            productTab: {
               ...state.productTab,
               [action.payload.productInfo]: {
                  productImage:
                     action.payload.productImage,
                  productInfo:
                     action.payload.productInfo,
                  productPrice:
                     action.payload.productPrice,
                  QuantityInCart:
                     action.payload
                        .QuantityInCart,
                  TotalPrice: state.productTab.hasOwnProperty(
                     action.payload.productInfo,
                  )
                     ? state.productTab[
                          action.payload
                             .productInfo
                       ].QuantityInCart *
                       state.productTab[
                          action.payload
                             .productInfo
                       ].productPrice
                     : action.payload
                          .productPrice,
               },
            },
            cartIconAnim: true,
            SumOfAllPrices:
               state.SumOfAllPrices +
               action.payload.productPrice,
         };
      case 'PLUS_CLICKED':
         return {
            ...state,
            productTab: {
               ...state.productTab,
               [action.payload.productInfo]: {
                  ...state.productTab[
                     action.payload.productInfo
                  ],
                  QuantityInCart:
                     state.productTab[
                        action.payload.productInfo
                     ].QuantityInCart + 1,
                  TotalPrice:
                     (state.productTab[
                        action.payload.productInfo
                     ].QuantityInCart +
                        1) *
                     state.productTab[
                        action.payload.productInfo
                     ].productPrice,
               },
            },
            SumOfAllPrices:
               state.SumOfAllPrices +
               state.productTab[
                  action.payload.productInfo
               ].productPrice,
         };
      case 'MINUS_CLICKED':
         return {
            ...state,
            productTab: {
               ...state.productTab,
               [action.payload.productInfo]: {
                  ...state.productTab[
                     action.payload.productInfo
                  ],
                  QuantityInCart:
                     state.productTab[
                        action.payload.productInfo
                     ].QuantityInCart - 1,
                  TotalPrice:
                     (state.productTab[
                        action.payload.productInfo
                     ].QuantityInCart -
                        1) *
                     state.productTab[
                        action.payload.productInfo
                     ].productPrice,
               },
            },
            SumOfAllPrices:
               state.SumOfAllPrices -
               state.productTab[
                  action.payload.productInfo
               ].productPrice,
         };
      case 'DELETE_CLICKED':
         return {
            ...state,
            productQuantity:
               state.productQuantity - 1,
            productTab: {
               ...Object.fromEntries(
                  Object.entries(
                     state.productTab,
                  ).filter(
                     (key) =>
                        key[0] !==
                        action.payload
                           .selectedProductTab,
                  ),
               ),
            },
            SumOfAllPrices:
               state.productQuantity === 1
                  ? 0
                  : Object.keys(state.productTab)
                       .filter(
                          (key) =>
                             key !==
                             action.payload
                                .productInfo,
                       )
                       .map(
                          (key) =>
                             state.productTab[key]
                                .TotalPrice,
                       )
                       .reduce((a, b) => a + b),
         };
      case 'TEXT_FILTER':
         return {
            ...state,
            eventText: action.payload.eventText,
         };
      case 'DETAIL_CLICKED':
         return {
            ...state,
            actualProduct: action.payload.product,
            sidebarOpen: null,
            hamburgerAnimStart: false,
            redirect: true,
            actualItem: action.payload.image,
            actualInfo: action.payload.info,
         };
      case 'RETURN_CLICKED':
         return {
            ...state,
            sidebarOpen: null,
            hamburgerAnimStart: false,
            cartIconAnim: false,
            redirect: false,
         };
      case 'SIDEBAR_STOP_ANIM':
         return {
            ...state,
            sidebarOpen: null,
            hamburgerAnimStart: false,
         };
      default:
         return state;
   }
};

export default rootReducer;
