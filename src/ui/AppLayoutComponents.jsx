import styled from "styled-components";

export const StyledAppLayout = styled.div`
   background: url("../../Gradient-For-Project.jpg") 100% 0%;
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: end;

   @media screen and (max-width: 768px) {
      background: url("../../Gradient-For-Project-Mobile.jpg") 15% 80%;
   }
`;

export const Main = styled.main`
   backdrop-filter: blur(15px);
   background-color: #24293051;
   border-top-right-radius: 7rem;
   border-top-left-radius: 7rem;
   box-shadow: var(--shadow-outset);
   border: 1px solid #33383f51;
   padding: 3rem 4.8rem 13rem;
   overflow-y: scroll;
   width: 100%;

   @media screen and (max-width: 1150px) {
      border-top-right-radius: 5rem;
      border-top-left-radius: 5rem;
      padding: 1.2rem 1.2rem 14rem;
   }
`;

export const Container = styled.div`
   max-width: 130rem;
   margin: 0 auto;
   display: flex;
   direction: rtl;
   flex-direction: column;
   gap: 1rem;
`;
