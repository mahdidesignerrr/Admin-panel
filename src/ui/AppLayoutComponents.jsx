import styled from "styled-components";

export const StyledAppLayout = styled.div`
   background: url("../../Gradient-For-Project.jpg") 100% 0%;
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: end;

   @media screen and (max-width: 770px) {
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

   &::-webkit-scrollbar {
      width: 12px;
   }

   &::-webkit-scrollbar-track {
      border-radius: 10px;
      margin-top: 55px; /* Adjust this value */
      border: 2px solid #3c414896;
   }
   
   &::-webkit-scrollbar-thumb {
      background: var(--color-grey-300);
      border-radius: 10px;
      border: 2px solid var(--color-grey-100);
   }

   &::-webkit-scrollbar-thumb:hover {
     background: var(--color-grey-200);
   }

   @media screen and (max-width: 770px) {
      border-top-right-radius: 5rem;
      border-top-left-radius: 5rem;
      padding: 2.5rem 2.5rem 12rem;
   }
`;

export const Container = styled.div`
   max-width: 130rem;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   gap: 2.5rem;
`;