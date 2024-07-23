import { Outlet } from "react-router-dom";
import NavbarParent from "./NavbarParent";
import styled from "styled-components";

const Main = styled.main`
   padding: 4rem;
   backdrop-filter: blur(15px);
   background-color: #33383f51;
   height: 88vh;
   border-top-right-radius: 7rem;
   border-top-left-radius: 7rem;
   width: 100%;
   border: 1px solid #33383f51;
`;

const Container = styled.div`
   background: url("../../public/Gradient-For-Project.jpg") 100% 30%;
   width: 100%;
   height: 100%;
   box-sizing: border-box;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: end;

   @media screen and (max-width: 770px) {
      background: url("../../public/Gradient-For-Project-Mobile.jpg") center;
   }
`;

function AppLayout() {
   return (
         <Container>
            <NavbarParent />
            <Main>
                  <Outlet />
            </Main>
         </Container>
   );
}

export default AppLayout;
