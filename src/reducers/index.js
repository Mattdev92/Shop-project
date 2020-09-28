import hatMan1 from 'assets/man/hat-1.jpg';
import hatMan2 from 'assets/man/hat-2.jpg';
import hatMan3 from 'assets/man/hat-3.jpg';
import hatMan4 from 'assets/man/hat-4.jpg';
import hatMan5 from 'assets/man/hat-5.jpg';
import jacketMan1 from 'assets/man/jacket-1.jpg';
import jacketMan2 from 'assets/man/jacket-2.jpg';
import jacketMan3 from 'assets/man/jacket-3.jpg';
import jacketMan4 from 'assets/man/jacket-4.jpg';
import jacketMan5 from 'assets/man/jacket-5.jpg';
import tShirtMan1 from 'assets/man/jacket-1.jpg';
import tShirtMan2 from 'assets/man/jacket-2.jpg';
import tShirtMan3 from 'assets/man/jacket-3.jpg';
import tShirtMan4 from 'assets/man/jacket-4.jpg';
import tShirtMan5 from 'assets/man/jacket-5.jpg';

import dressWoman1 from 'assets/woman/dress-1.jpg';
import dressWoman2 from 'assets/woman/dress-2.jpg';
import dressWoman3 from 'assets/woman/dress-3.jpg';
import dressWoman4 from 'assets/woman/dress-4.jpg';
import dressWoman5 from 'assets/woman/dress-5.jpg';
import shoesWoman1 from 'assets/woman/shoes-woman-1.jpg';
import shoesWoman2 from 'assets/woman/shoes-woman-2.jpg';
import shoesWoman3 from 'assets/woman/shoes-woman-3.jpg';
import shoesWoman4 from 'assets/woman/shoes-woman-4.jpg';
import shoesWoman5 from 'assets/woman/shoes-woman-5.jpg';
import tShirtWoman1 from 'assets/woman/t-shirt-woman-1.jpg';
import tShirtWoman2 from 'assets/woman/t-shirt-woman-2.jpg';
import tShirtWoman3 from 'assets/woman/t-shirt-woman-3.jpg';
import tShirtWoman4 from 'assets/woman/t-shirt-woman-4.jpg';
import tShirtWoman5 from 'assets/woman/t-shirt-woman-5.jpg';

const initialState = {
  clicked: false,
  sidebarOpen: false,
  hamburgerClicked: false,
  hamburgerAnimStart: false,
  productQuantity: 0,
  productTab: [],
  SumOfAllPrices: 0,
  cartIconAnim: false,
  backgroundImage:false,
  Man: [
    [hatMan1, 'Czapka męska model 1. ', 70],
    [hatMan2, 'Czapka męska model 2. ', 50],
    [hatMan3, 'Czapka męska model 3. ', 80],
    [hatMan4, 'Czapka męska model 4. ', 150],
    [hatMan5, 'Czapka męska model 5. ', 20],
    [jacketMan1, 'Kurtka męska model 1. ', 150],
    [jacketMan2, 'Kurtka męska model 2. ', 250],
    [jacketMan3, 'Kurtka męska model 3. ', 300],
    [jacketMan4, 'Kurtka męska model 4. ', 130],
    [jacketMan5, 'Kurtka męska model 5 ', 100],
    [tShirtMan1, 'Koszulka męska model 1. ', 50],
    [tShirtMan2, 'Koszulka męska model 2. ', 100],
    [tShirtMan3, 'Koszulka męska model 3. ', 20],
    [tShirtMan4, 'Koszulka męska model 4. ', 40],
    [tShirtMan5, 'Koszulka męska model 5. ', 120],
  ],
  Woman: [
    [dressWoman1, 'Sukienka model 1. ', 50],
    [dressWoman2, 'Sukienka model 2. ', 100],
    [dressWoman3, 'Sukienka model 3. ', 150],
    [dressWoman4, 'Sukienka model 4. ', 350],
    [dressWoman5, 'Sukienka model 5. ', 250],
    [shoesWoman1, 'Buty damskie model 1. ', 250],
    [shoesWoman2, 'Buty damskie model 2. ', 350],
    [shoesWoman3, 'Buty damskie model 3. ', 250],
    [shoesWoman4, 'Buty damskie model 4. ', 450],
    [shoesWoman5, 'Buty damskie model 5. ', 150],
    [tShirtWoman1, 'Koszulka damska model 1. ', 50],
    [tShirtWoman2, 'Koszulka damska model 2. ', 30],
    [tShirtWoman3, 'Koszulka damska model 3. ', 20],
    [tShirtWoman4, 'Koszulka damska model 4. ', 55],
    [tShirtWoman5, 'Koszulka damska model 5. ', 50],
  ],
  eventText: '',
  redirect: false,
  actualItem: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HAMBURGER_CLICKED':
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
        hamburgerAnimStart: !state.hamburgerAnimStart,
        hamburgerClicked: true,
        cartIconAnim: false,
        redirect: false,
        clicked: true,
        imageLoaded: false,
        backgroundImage: false
      };
    case 'HOME_CLICKED':
      return {
        ...state,
        sidebarOpen: false,
        hamburgerAnimStart: false,
        hamburgerClicked: false,
        cartIconAnim: false,
        redirect: false,
        clicked:false,
        backgroundImage: false
      };

    case 'YOURCART_CLICKED':
      return {
        ...state,
        sidebarOpen: false,
        hamburgerAnimStart: false,
        hamburgerClicked: false,
        cartIconAnim: false,
        backgroundImage: false
      };
    case 'CART_CLICKED':
      return {
        ...state,
        productQuantity: state.productTab.hasOwnProperty(action.payload.productInfo)
          ? state.productQuantity
          : state.productQuantity + 1,
        productTab: {
          ...state.productTab,
          [action.payload.productInfo]: {
            productImage: action.payload.productImage,
            productInfo: action.payload.productInfo,
            productPrice: action.payload.productPrice,
            QuantityInCart: action.payload.QuantityInCart,
            TotalPrice: state.productTab.hasOwnProperty(action.payload.productInfo)
              ? state.productTab[action.payload.productInfo].QuantityInCart *
                state.productTab[action.payload.productInfo].productPrice
              : action.payload.productPrice,
          },
        },
        cartIconAnim: true,
        SumOfAllPrices: state.SumOfAllPrices+ action.payload.productPrice,
        backgroundImage: false
      };
    case 'PLUS_CLICKED':
      return {
        ...state,
        productTab: {
          ...state.productTab,
          [action.payload.productInfo]: {
            ...state.productTab[action.payload.productInfo],
            QuantityInCart: state.productTab[action.payload.productInfo].QuantityInCart + 1,
            TotalPrice:
              (state.productTab[action.payload.productInfo].QuantityInCart + 1) *
              state.productTab[action.payload.productInfo].productPrice,
          },
        },
        SumOfAllPrices:
          state.SumOfAllPrices + state.productTab[action.payload.productInfo].productPrice,
      };
    case 'MINUS_CLICKED':
      return {
        ...state,

        productTab: {
          ...state.productTab,
          [action.payload.productInfo]: {
            ...state.productTab[action.payload.productInfo],
            QuantityInCart: state.productTab[action.payload.productInfo].QuantityInCart - 1,
            TotalPrice:
              (state.productTab[action.payload.productInfo].QuantityInCart - 1) *
              state.productTab[action.payload.productInfo].productPrice,
          },
        },
        SumOfAllPrices:
          state.SumOfAllPrices - state.productTab[action.payload.productInfo].productPrice,
      };
    case 'DELETE_CLICKED':
      return {
        ...state,
        productQuantity: state.productQuantity - 1,
        productTab: {
          ...Object.fromEntries(
            Object.entries(state.productTab).filter(
              (key) => key[0] !== action.payload.selectedProductTab,
            ),
          ),
        },
        SumOfAllPrices:
          state.productQuantity === 1
            ? 0
            : Object.keys(state.productTab)
                .filter((key) => key !== action.payload.productInfo)
                .map((key) => state.productTab[key].TotalPrice)
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
        sidebarOpen: false,
        hamburgerAnimStart: false,
        hamburgerClicked: false,
        redirect: true,
        actualItem: action.payload.image,
        actualInfo: action.payload.info,
        backgroundImage: true
      };
      case 'RETURN_CLICKED':
      return {
        ...state,
        sidebarOpen: false,
        hamburgerAnimStart: false,
        hamburgerClicked: false,
        cartIconAnim: false,
        redirect: false,
        clicked:true,
        backgroundImage: false
      };
    default:
      return state;
  }
};

export default rootReducer;
