import styled, { css } from 'styled-components';
import Loupe from 'assets/loupe.svg';

export const InnerWrapper = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-gap: 50px;
   padding: 10px;
   @media (max-width: 840px) and(min-width: 441px) {
      grid-template-columns: 300px 300px;
      justify-content: center;
      grid-gap: 100px;
      align-items: center;
   }
   @media (max-width: 440px) {
      grid-template-columns: 300px;
      justify-content: center;
      grid-gap: 100px;
      align-items: center;
      ${({ sidebaropen }) =>
         sidebaropen &&
         css`
            display: none;
         `}
   }
`;
export const FilterWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   @media (max-width: 440px) {
   }
`;
export const Input = styled.input`
   width: 20vw;
   border: none;
   border-bottom: 1px solid black;
   padding: 5px;
   height: 30px;
   outline: none;
   color: #9dbfaf;
   margin: 20px;
   @media (max-width: 440px) {
      width: 150px;
   }
   &::placeholder {
      color: black;
      opacity: 60%;
   }
`;
export const Img = styled.div`
   width: 20px;
   height: 20px;
   margin: 0;
   background-image: url(${Loupe});
`;
