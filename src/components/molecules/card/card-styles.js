import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 580px;
  overflow: hidden;
  max-width: 333px;
  :hover {
    cursor: pointer;
    transition: all 1.3s ease-out;
  }
  @media (max-width: 440px) {
  }
`;
export const DiscountDescription = styled.h1`
  position: absolute;
  bottom: 20px;
  right: 0;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  color: #191919;
  z-index: 2;
`;
export const Description = styled.div`
  position: absolute;
  bottom: 24px;
  width: 100%;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #191919;
`;
export const PriceDescription = styled.div`
  position: absolute;
  bottom: 6px;
  width: 100%;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #191919;
  font-weight: 700 !important;
`;

export const CartImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 40px;
  width: 40px;
  height: 40px;
  margin: 10px;
  :hover {
    cursor: pointer;
    transform: scale(1.5) translateY(-10px);
    transition: all 0.3s ease-out;
  }
`;
export const ProductInCart = styled.h3`
  position: absolute;
  bottom: 40px;
  left: 0;
  width: 100%;
  height: 14px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #191919;
  :hover {
    cursor: pointer;
    transform: translateY(-10px);
    transition: all 0.3s ease-out;
  }
  @media (max-width: 440px) {
    font-size: 1.5rem;
  }
`;
