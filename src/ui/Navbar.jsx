import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

const types = {
   primary: css`
      height: 6rem;
   `,
   secondary: css`
      height: 4.2rem;
   `,
};

const Menu = styled.div`
   backdrop-filter: var(--filter-blue-md);
   border-left: 2.5px solid #33383fa3;
   border-right: 2.5px solid #33383fa3;
   box-shadow: var(--shadow-inset);

   ${(props) => types[props.type]}
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   border-radius: var(--border-radius-lg);
   color: var(--color-gray-900);
   cursor: pointer;

   &:first-child {
      border-left: none;
   }
   &:last-child {
      border-right: none;
   }

   &:hover {
      background: #33383fa3;
   }
   &.active {
      background: var(--color-brand-700);
   }
`;

Menu.defaultProps = {
   type: "secondary",
};

const MenuContent = styled.div`
   color: var(--color-grey-900);
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1rem;
   font-size: 1.5rem;
   @media screen and (max-width: 770px) {
      :last-child {
         display: none;
      }
   }
`;

function Navbar({ icon, name, link, type = "secondary" }) {
   const Navigate = useNavigate();
   const { pathname } = useLocation();
   return (
      <Menu type={type} className={pathname === `/${link}` ? "active" : ""}>
         <MenuContent onClick={() => Navigate(link)}>
            <h3>{name}</h3>
            {icon || (
               <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M21 18.9993V10.2042C21 9.20084 20.4987 8.26383 19.6641 7.70725L13.1094 3.33601C12.4376 2.888 11.5624 2.888 10.8906 3.33601L4.3359 7.70725C3.5013 8.26383 3 9.20084 3 10.2042V18.9993C3 20.1043 3.89543 21 5 21H8.5C9.05228 21 9.5 20.5521 9.5 19.9997V17.4988C9.5 16.3939 10.3954 15.4982 11.5 15.4982H12.5C13.6046 15.4982 14.5 16.3939 14.5 17.4988V19.9997C14.5 20.5521 14.9477 21 15.5 21H19C20.1046 21 21 20.1043 21 18.9993Z"
                     stroke="var(--color-grey-900)"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            )}
         </MenuContent>
      </Menu>
   );
}

export default Navbar;
