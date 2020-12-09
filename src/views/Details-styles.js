import styled from 'styled-components';

export const DetailSection = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
`;

export const DescriptionSection = styled.section`
   padding: 0;
   margin: 0;
   display: flex;
   flex-direction: row;
   width: 60vw;
   justify-content: left;
   align-items: top;
   text-align: justify;
   @media (max-width: 440px) {
      flex-direction: column;
      justify-content: left;
      align-items: left;
   }
`;

export const Button = styled.button`
   background-color: black;
   border: none;
   width: 130px;
   height: 30px;
   color: white;
   border-radius: 8px;
   font-size: 1.5rem;
   text-align: center;
   text-decoration: none;
   &:hover {
      cursor: pointer;
   }
`;

export const InfoWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: left;
   margin-left: 100px;
   @media (max-width: 440px) {
      margin: 2px;
   }
`;
export const ListItem = styled.h5`
   margin: 10px 2px;
`;

export const ItemSize = styled.option`
   margin: 5px;
`;
export const CustomSelect = styled.select`
   -webkit-appearance: none;
   -ms-appearance: none;
   -moz-appearance: none;
   -o-appearance: none;
   appearance: none;
   display: block;
   margin: 10px 0;
   padding: 10px 80px 10px 10px;
   background-color: #222;
   color: white;
   border-radius: 4px;
   border: 2px solid white;
   width: 280px;
   text-align: center;
   &:hover {
      cursor: pointer;
   }
`;
