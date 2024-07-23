import { Outlet } from "react-router-dom";
import NavbarParent from "./NavbarParent";
import styled from "styled-components";

const Main = styled.main`
   backdrop-filter: blur(15px);
   background-color: #33383f51;
   border-top-right-radius: 7rem;
   border-top-left-radius: 7rem;
   border: 1px solid #33383f51;
   padding: 4rem 4.8rem 10rem;
   overflow-y: scroll;
   width: 100%;

   &::-webkit-scrollbar {
      width: 12px;
   }

   &::-webkit-scrollbar-track {
      border-radius: 10px;
      margin-top: 55px; /* Adjust this value */
      border: 2px solid #33383f97;
   }
   
   &::-webkit-scrollbar-thumb {
      background: #33383fc5;
      border-radius: 10px;
      border: 2px solid var(--color-grey-200);
   }

   &::-webkit-scrollbar-thumb:hover {
      background: var(--color-grey-700);
   }

   @media screen and (max-width: 770px) {
      border-top-right-radius: 5rem;
      border-top-left-radius: 5rem;
   }
`;

const StyledAppLayout = styled.div`
   background: url("../../public/Gradient-For-Project.jpg") 100% 0%;
   width: 100%;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: end;

   @media screen and (max-width: 770px) {
      background: url("../../public/Gradient-For-Project-Mobile.jpg") 50% 0%;
   }
`;

const Container = styled.div`
   max-width: 120rem;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   gap: 3.2rem;
`;

function AppLayout() {
   return (
      <StyledAppLayout>
         <NavbarParent />
         <Main>
            <Container>
               <Outlet />
            </Container>
         </Main>
      </StyledAppLayout>
   );
}

export default AppLayout;
