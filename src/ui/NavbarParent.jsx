import styled from "styled-components";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Account from "./Account";

const StyledNavbar = styled.div`
   padding: 2.5rem 3rem;
   z-index: 1000;
   transition: all 0.5s;
   width: 100%;
   height: 12vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
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
   backdrop-filter: blur(15px);
   background-color: #0000002b;
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
      backdrop-filter: blur(15px);
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
         icon: (
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M17.79 22.75H6.21C3.47 22.75 1.25 20.52 1.25 17.78V10.37C1.25 9.00997 2.09 7.29997 3.17 6.45997L8.56 2.25997C10.18 0.999974 12.77 0.939974 14.45 2.11997L20.63 6.44997C21.82 7.27997 22.75 9.05997 22.75 10.51V17.79C22.75 20.52 20.53 22.75 17.79 22.75ZM9.48 3.43997L4.09 7.63997C3.38 8.19997 2.75 9.46997 2.75 10.37V17.78C2.75 19.69 4.3 21.25 6.21 21.25H17.79C19.7 21.25 21.25 19.7 21.25 17.79V10.51C21.25 9.54997 20.56 8.21997 19.77 7.67997L13.59 3.34997C12.45 2.54997 10.57 2.58997 9.48 3.43997Z"
                  fill="var(--color-grey-900)"
               />
               <path
                  d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
                  fill="var(--color-grey-900)"
               />
            </svg>
         ),
      },
      {
         name: "محصولات",
         link: "products",
         icon: (
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M3.1709 7.43994L12.0009 12.5499L20.7709 7.46994"
                  stroke="var(--color-grey-900)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
               <path
                  d="M12.001 21.61V12.54"
                  stroke="var(--color-grey-900)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
               <path
                  d="M9.93111 2.48004L4.59111 5.44004C3.38111 6.11004 2.39111 7.79004 2.39111 9.17004V14.82C2.39111 16.2 3.38111 17.88 4.59111 18.55L9.93111 21.52C11.0711 22.15 12.9411 22.15 14.0811 21.52L19.4211 18.55C20.6311 17.88 21.6211 16.2 21.6211 14.82V9.17004C21.6211 7.79004 20.6311 6.11004 19.4211 5.44004L14.0811 2.47004C12.9311 1.84004 11.0711 1.84004 9.93111 2.48004Z"
                  stroke="var(--color-grey-900)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
            </svg>
         ),
      },
      {
         name: "سفارشات",
         link: "orders",
         icon: (
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M3.00977 11.22V15.71C3.00977 20.2 4.80977 22 9.29977 22H14.6898C19.1798 22 20.9798 20.2 20.9798 15.71V11.22"
                  stroke="var(--color-grey-900)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
               <path
                  d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.66999L8.99999 8.68C8.81999 10.51 10.17 12 12 12Z"
                  stroke="var(--color-grey-900)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
               <path
                  d="M18.3098 12C20.3298 12 21.8098 10.36 21.6098 8.35L21.3298 5.6C20.9698 3 19.9698 2 17.3498 2H14.2998L14.9998 9.01C15.1698 10.66 16.6598 12 18.3098 12Z"
                  stroke="var(--color-grey-900)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
               <path
                  d="M5.63988 12C7.28988 12 8.77988 10.66 8.93988 9.01L9.15988 6.8L9.63988 2H6.58988C3.96988 2 2.96988 3 2.60988 5.6L2.33988 8.35C2.13988 10.36 3.61988 12 5.63988 12Z"
                  stroke="var(--color-grey-900)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
               <path
                  d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z"
                  stroke="var(--color-grey-900)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
            </svg>
         ),
      },
      {
         name: "کامنت ها",
         link: "Comments",
         icon: (
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                  stroke="var(--color-grey-900)"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
               <path
                  d="M7 8H17"
                  stroke="var(--color-grey-900)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
               <path
                  d="M7 13H13"
                  stroke="var(--color-grey-900)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
               />
            </svg>
         ),
      },
      {
         name: "منو",
         link: "menu",
         icon: (
            <svg
               width="25"
               height="24"
               viewBox="0 0 25 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M19.0156 10.75H17.0156C14.5956 10.75 13.2656 9.42 13.2656 7V5C13.2656 2.58 14.5956 1.25 17.0156 1.25H19.0156C21.4356 1.25 22.7656 2.58 22.7656 5V7C22.7656 9.42 21.4356 10.75 19.0156 10.75ZM17.0156 2.75C15.4356 2.75 14.7656 3.42 14.7656 5V7C14.7656 8.58 15.4356 9.25 17.0156 9.25H19.0156C20.5956 9.25 21.2656 8.58 21.2656 7V5C21.2656 3.42 20.5956 2.75 19.0156 2.75H17.0156Z"
                  fill="var(--color-grey-900)"
               />
               <path
                  d="M7.01562 22.75H5.01562C2.59562 22.75 1.26562 21.42 1.26562 19V17C1.26562 14.58 2.59562 13.25 5.01562 13.25H7.01562C9.43563 13.25 10.7656 14.58 10.7656 17V19C10.7656 21.42 9.43563 22.75 7.01562 22.75ZM5.01562 14.75C3.43563 14.75 2.76562 15.42 2.76562 17V19C2.76562 20.58 3.43563 21.25 5.01562 21.25H7.01562C8.59562 21.25 9.26562 20.58 9.26562 19V17C9.26562 15.42 8.59562 14.75 7.01562 14.75H5.01562Z"
                  fill="var(--color-grey-900)"
               />
               <path
                  d="M6.01562 10.75C3.39563 10.75 1.26562 8.62 1.26562 6C1.26562 3.38 3.39563 1.25 6.01562 1.25C8.63562 1.25 10.7656 3.38 10.7656 6C10.7656 8.62 8.63562 10.75 6.01562 10.75ZM6.01562 2.75C4.22563 2.75 2.76562 4.21 2.76562 6C2.76562 7.79 4.22563 9.25 6.01562 9.25C7.80562 9.25 9.26562 7.79 9.26562 6C9.26562 4.21 7.80562 2.75 6.01562 2.75Z"
                  fill="var(--color-grey-900)"
               />
               <path
                  d="M18.0156 22.75C15.3956 22.75 13.2656 20.62 13.2656 18C13.2656 15.38 15.3956 13.25 18.0156 13.25C20.6356 13.25 22.7656 15.38 22.7656 18C22.7656 20.62 20.6356 22.75 18.0156 22.75ZM18.0156 14.75C16.2256 14.75 14.7656 16.21 14.7656 18C14.7656 19.79 16.2256 21.25 18.0156 21.25C19.8056 21.25 21.2656 19.79 21.2656 18C21.2656 16.21 19.8056 14.75 18.0156 14.75Z"
                  fill="var(--color-grey-900)"
               />
            </svg>
         ),
      },
   ]; // items

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
