import { Outlet } from "react-router-dom";
import NavbarParent from "./NavbarParent";
import { Container, Main, StyledAppLayout } from "./AppLayoutComponents";
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
