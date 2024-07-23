import { Outlet } from "react-router-dom";
import NavbarParent from "./NavbarParent";
import styled from "styled-components";

const Main = styled.main`
   padding-top: 8rem;
   backdrop-filter: blur(15px);
   background-color: #33383f51;
   height: 88vh;
   border-top-right-radius: 7rem;
   border-top-left-radius: 7rem;
   width: 100%;
   overflow-y: scroll;
   border: 1px solid #33383f51;
`;

const Container = styled.div`
   background: url("../../public/Gradient-For-Project.jpg") 100% 0%;
   width: 100%;
   height: 100%;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: end;

   @media screen and (max-width: 770px) {
      background: url("../../public/Gradient-For-Project-Mobile.jpg") 50% 0%;
   }
`;

const SpaceBottom = styled.div`
   height: 15rem;
`;

function AppLayout() {
   return (
      <Container>
         <NavbarParent />
         <Main>
            <Outlet />
            <SpaceBottom/>
         </Main>
      </Container>
   );
}

export default AppLayout;
