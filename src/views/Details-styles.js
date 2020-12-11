import styled from 'styled-components';

export const DetailSection = styled.div`
   width: 100vw;
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
   width: 100vw;
   justify-content: center;
   align-items: top;
   text-align: justify;
   @media (max-width: 440px) {
      flex-direction: column;
      align-items: center;
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
   max-width: 333px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: left;
   margin-left: 100px;
   @media (max-width: 440px) {
      width: 100vw;
      padding: 0;
      margin: 0;
      justify-content: center;
      align-items: left;
   }
`;
export const ListItem = styled.h5`
   margin: 10px 2px;
   padding:10px 0;
`;

export const Option = styled.option`
   margin: 5px;
`;

export const CardWrapper = styled.div`
   align-self: center;
`;

export const CustomSelect = styled.select`
   box-shadow: 0 10px 25px black;
   font-size: 1rem;
   padding: 0.5em 1em;
   background: #4d5061;
   text-shadow:0 1px 0 rgba(0,0,0,0.4);
   color: white;
   width:100%;
   border:0;
   &:hover {
      cursor: pointer;
   }
`;
export const CustomArrow = styled.span`
background:#3b3c47;
display:block;
height:100%;
width:2rem;
position:absolute;
top:0;
right:0;
pointer-events:none; 
&:before,:after{
   content:'';
   position:absolute;
   width:0;
   height:0;
   left:50%;
   top:50%;
   transform:translate(-50%,-50%);
}
&:before{
   border-left:0.35em solid transparent;
   border-right: 0.35em solid transparent;
   border-bottom: 0.35em solid rgba(255,255,255,0.5);
   top:35%;
}
&:after{
   border-left:0.35em solid transparent;
   border-right: 0.35em solid transparent;
   border-top: 0.35em solid rgba(255,255,255,0.5);
   top:65%;
}
`;
export const SelectWrapper = styled.div`
position:relative;
`;
