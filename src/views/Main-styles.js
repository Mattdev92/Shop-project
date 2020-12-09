import styled from 'styled-components';
import bacgroundImage from 'assets/fashion.jpg';
import bacgroundImageTwo from 'assets/fashionMen.jpg';

export const Wrapper = styled.div`
   background-image: url(${bacgroundImage});
   width: 80vw;
   height: 85vh;
   background-size: cover;
   background-repeat: no-repeat;
`;
export const WrapperTwo = styled.div`
   background-image: url(${bacgroundImageTwo});
   width: 80vw;
   height: 85vh;
   background-size: cover;
   background-repeat: no-repeat;
`;
export const MainTitle = styled.h1`
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
