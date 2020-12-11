import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
   opacity: 80%;
   background-color: black;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   max-width: 100vw;
   @media (max-width: 440px) {
      margin: 0px;
      padding: 0px;
      margin: 40px 0 0 0;
      ${({ sidebaropen }) =>
         sidebaropen &&
         css`
            display: none;
         `}
   }
`;
export const ItemWrapper = styled.div`
   background-color: black;
   color: white;
   margin: 20px 5px;
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
   align-items: center;
   max-width: 100vw;
   width: 85vw;
   font-size: 2rem;
   font-family: 'Jost', sans-serif;
   font-size: 14px;
   @media (max-width: 440px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 20px;
   }
`;
export const Img = styled.img`
   height: 256px;
   width: 192px;
   margin: 0px 30px;
`;

export const Button = styled.button`
   background-color: white;
   height: 30px;
   margin: ${({ type }) =>
      type === 'add'
         ? '10px 0px 0 30px'
         : type === 'ZAMAWIAM'
         ? '10px'
         : '10px 30px'};
   width: ${({ type }) =>
      type === 'ZAMAWIAM' ? '150px' : '30px'};
   border: none;
   border-radius: 5px;
   font-size: 1.5rem;
   color: black;
   &:hover {
      cursor: pointer;
   }
`;
export const ButtonSection = styled.div`
   display: flex;
   flex-direction: row;
   margin: 0 30px;
`;
export const PriceSection = styled.h1`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 150px;
   margin: 0px 10px;
   font-size: 1.5rem;
   color: white;
   text-align: center;
`;
export const AllProductPrice = styled.h1`
   background-color: black;
   font-size: 2rem;
   color: white;
   font-weight: bold;
   @media (max-width: 440px) {
      font-size: 1rem;
   }
`;
export const CourtTitle = styled.h1`
   font-size: 1rem;
   color: white;
   font-weight: bold;
`;
