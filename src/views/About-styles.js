import styled from 'styled-components';
export const Wrapper = styled.div`
   position: absolute;
   width: 60vw;
   height: 60vh;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background-color: black;
   box-shadow: 0 0 30px #333;
   color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   @media (max-width: 440px) {
      text-align: center;
   }
`;
export const Content = styled.div`
   width: 100vw;
   height: 65vh;
`;
