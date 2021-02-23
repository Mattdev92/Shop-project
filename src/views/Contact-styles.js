import styled, { css } from 'styled-components';
import Title from 'components/atoms/title/title';

export const Wrapper = styled.div`
  width: 100vw;
  height: 65vh;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 440px) {
    ${({ sidebaropen }) =>
      sidebaropen &&
      css`
        display: none;
      `}
  }
`;
export const Form = styled.form`
  width: 80vw;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  background-color: black;
  box-shadow: 0 0 30px #333;
  color: white;
  @media (max-width: 440px) {
    width: 80vw;
    height: 80vh;
  }
`;
export const Button = styled.button`
  margin: 15px 0;
  background-color: white;
  color: black;
  border-radius: 5px;
  width: 140px;
  font-size: 2rem;
  &:hover {
    cursor: pointer;
    background-color: black;
    color: white;
    border: none;
  }
`;
export const Input = styled.input`
  padding: 15px 0;
  width: 30vw;
  display: flex;
  align-items: left;
  border: none;
  border-bottom: 3px solid black;
  text-align: center;
  @media (max-width: 440px) {
    width: 60vw;
  }
`;
export const ContactTitle = styled(Title)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 6rem;
  @media (max-width: 440px) {
    font-size: 4rem;
    margin: 70px 0 0 0;
  }
`;
