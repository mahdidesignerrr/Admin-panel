import styled from "styled-components";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Account from "./Account";
import { IconComment, IconDashboard, IconOrders, IconProduct } from "../styles/Icons";

const StyledNavbar = styled.div`
   padding: 2.5rem 3rem;
   z-index: 1000;
   transition: all 0.5s;
   width: 100%;
   height: 12vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
   @media screen and (max-width: 770px) {
      padding: 1.2rem 1.5rem;
   }
`;

const LogoContainer = styled.div`
   flex-grow: 1;
`;

const MenuContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1.5rem;
   flex-grow: 3;
   padding: 4px 4px;
   backdrop-filter: var(--filter-blur-md);
   background-color: #000;
   box-shadow: var(--shadow-sm);
   border-radius: var(--border-radius-lg);
   border: 2px solid #33383fa3;

   @media screen and (max-width: 900px) {
      position: absolute;
      bottom: 6rem;
      width: 94vw;
      left: 50%;
      right: 50%;
      transform: translate(-50%, 50%);
      gap: 2vw;
   }
`;

const AccountContainer = styled.div`
   flex-grow: 2;
`;

function NavbarParent() {
   const menuItems = [
      {
         name: "داشبورد",
         link: "dashboard",
         icon: <IconDashboard />,
      },
      {
         name: "محصولات",
         link: "products",
         icon: <IconProduct />,
      },
      {
         name: "سفارشات",
         link: "orders",
         icon: <IconOrders />,
      },
      {
         name: "کامنت ها",
         link: "Comments",
         icon: <IconComment/>,
      },
      {
         name: "منو",
         link: "menu",
         icon: <IconComment/>,
      },
   ];

   return (
      <StyledNavbar>
         <AccountContainer>
            <Account />
         </AccountContainer>
         <MenuContainer>
            {menuItems.map((menu) => (
               <Navbar
                  key={menu.name}
                  icon={menu.icon}
                  name={menu.name}
                  link={menu.link}
               />
            ))}
         </MenuContainer>
         <LogoContainer>
            <Logo />
         </LogoContainer>
      </StyledNavbar>
   );
}

export default NavbarParent;
