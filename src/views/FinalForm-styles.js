import styled, { css } from 'styled-components';
import Title from 'components/atoms/title/title';

export const Wrapper = styled.div`
   background-color: white;
   color: black;
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   width: 100vw;
   @media (max-width: 440px) {
      margin: 0;
      ${({ sidebaropen }) =>
         sidebaropen &&
         css`
            display: none;
         `}
   }
`;

export const Form = styled.form`
   width: 80vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   background-color: black;
   box-shadow: 0 0 30px #333;
   color: white;
   @media (max-width: 440px) {
      width: 80vw;
      height: 100vh;
   }
`;

export const Button = styled.button`
   background-color: black;
   color: white;
   border-radius: 5px;
   width: 140px;
   font-size: 2rem;
   margin: 40px;
   &:hover {
      cursor: pointer;
      background-color: white;
      color: black;
      border: none;
   }
`;

export const Input = styled.input`
   text-align: center;
   padding: 20px 0;
   width: 30vw;
   display: flex;
   align-items: left;
   border: none;
   border-bottom: 3px solid black;
   @media (max-width: 440px) {
      width: 60vw;
      padding: 10px 0;
   }
`;

export const ContactTitle = styled(Title)`
   font-family: 'Montserrat', sans-serif;
   font-weight: 800;
   font-size: 3rem;
   margin: 20px;
   @media (max-width: 440px) {
      font-size: 2rem;
      margin: 70px 0 0 0;
   }
`;
export const Info = styled.div`
   margin: 20px;
   font-size: 1.5rem;
   font-weight: bold;
`;
