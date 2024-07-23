import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import Motion from "./Motion";

// Animation settings
const slideIn = {
   initial: { scale: 0.9, opacity: 0 },
   animate: { scale: 1, opacity: 1, ease: "circOut" },
   exit: { scale: 0.9, opacity: 0 },
};

const types = {
   primary: css`
      border: 2.5px solid #33383fa3;
      background-color: #2a2c2f62;
      @media screen and (max-width: 900px) {
         & div h3 {
            display: block !important;
         }
         height: 10rem !important;
      }
   `,
   secondary: css`
      height: 4.3rem;
      border-right: 2.5px solid #33383fa3;
      border-left: 2.5px solid #33383fa3;

      &:first-child {
         border-left: none;
      }
      &:last-child {
         border-right: none;
      }

      &.active {
         background-color: var(--color-brand-600);
         color: var(--color-grey-900);
      }

      @media screen and (max-width: 900px) {
         & div h3 {
            display: none;
         }

         &.active {
            & div svg {
               display: none;
            }
            & div h3 {
               display: block !important;
               font-size: 1.4rem;
            }
            & div div {
               display: block;
            }
            & div {
               gap: 0.4rem;
            }
         }
         height: 6rem;
      }
   `,
};

const Menu = styled(motion.div)`
   z-index: 10;
   box-shadow: var(--shadow-inset);
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
   flex-direction: column;
   border-radius: var(--border-radius-lg);
   cursor: pointer;
   transition: all 0.3s ease-out;
   height: 6rem;
   ${(props) => types[props.type]}

   @media screen and (max-width: 900px) {
      & div svg {
         height: 2.8rem;
         width: 2.8rem;
      }
      height: 6rem;
   }
`;

const MenuContent = styled(motion.div)`
   color: inherit;
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1rem;
   font-size: 1.5rem;
   &:hover {
      opacity: 1 !important;
   }

   @media screen and (max-width: 900px) {
      flex-direction: column-reverse;
      font-size: 1.3rem;
   }
`;

const MenuActive = styled(motion.div)`
   width: 5px;
   height: 5px;
   border-radius: 25px;
   background-color: #00ff00;
   margin: 0;
   padding: 0;
   display: none;
   transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

const MenuTitle = styled(motion.h3)`
   animation: showTitle 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

   @keyframes showTitle {
      0%{
         opacity: 0;
         transform: translateY(7px);
      }
      100%{
         opacity: 1;
         transform: translateY(0rem);
      }
   }
`;

function Navbar({ icon, name, link, type = "secondary" }) {
   const navigate = useNavigate();
   const { pathname } = useLocation();

   const isActive = pathname === `/${link}`;

   return (
      <Motion>
         <Menu
            type={type}
            className={isActive ? "active" : ""}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideIn}
            transition={{ duration: 0.3 }}
         >
            <MenuContent
               onClick={() => navigate(link)}
               initial={{ opacity: 0 }}
               animate={isActive ? { opacity: 1 } : { opacity: 0.7 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
            >
               <MenuActive
                  initial={{ scale: 0 }}
                  animate={isActive ? { scale: 1 } : { scale: 0 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.3 }}
               />
               <MenuTitle
                  initial={{ opacity: 0 }}
                  animate={isActive ? { opacity: 1 } : { opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
               >
                  {name}
               </MenuTitle>
               {icon}
            </MenuContent>
         </Menu>
      </Motion>
   );
}

export default Navbar;
