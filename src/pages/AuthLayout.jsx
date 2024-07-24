import { Outlet } from "react-router-dom"
import { Container, StyledAppLayout } from "../ui/AppLayoutComponents"
import Logo from "../ui/Logo"

function AuthLayout() {
  return (
    <StyledAppLayout>
            <Container>
              <Logo/>
               <Outlet/>
            </Container>
      </StyledAppLayout>
  )
}

export default AuthLayout
