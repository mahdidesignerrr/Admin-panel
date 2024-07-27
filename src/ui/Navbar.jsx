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
      border:var(--border-main-sm);
      background-color: var(--backdrop-color);
      height: 9rem !important;
      box-shadow: var(--shadow-inset), var(--shadow-lg);
      &:hover {
         box-shadow: var(--shadow-inset-bot), var(--shadow-sm) !important;
      }

      @media screen and (min-width: 1000px) {
         & div h3 {
            font-size: 2rem;
         }
      }
      @media screen and (max-width: 900px) {
         & div h3 {
            display: block !important;
         }
      }
   `,
   secondary: css`
      height: 4.8rem;

      
      &:first-child {
         border-left: none;
      }
      &:last-child {
         border-right: none;
      }

      &.Alive {
         box-shadow: var(--shadow-inset-full) !important;
         color: var(--color-grey-900);
         cursor: auto;
      }

      @media screen and (max-width: 900px) {
         height: 6.2rem;
         & div h3 {
            display: none;
         }

         &.Alive {
            & div svg {
               display: none;
            }
            & div h3 {
               display: block !important;
               font-size: 1.4rem;
               padding-top: 6px;
            }
            & div div {
               display: block;
            }
            & div {
               gap: 0.4rem;
            }
         }
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
   transition: all 0.4s ease-out;
   height: 6rem;
   ${(props) => types[props.type]}

   &:hover {
      box-shadow: var(--shadow-inset-bot);
   }

   @media screen and (max-width: 900px) {
      & div svg {
         height: 2.8rem;
         width: 2.8rem;
      }
      height: 6rem;
   }
`;

const MenuContent = styled(motion.div)`
   height: 100%;
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1rem;
   font-size: 1.5rem;

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
   transition: all 0.3s ease-in-out;
`;

const MenuTitle = styled(motion.h3)`
   animation: showTitle 0.5s ease-in-out;

   @keyframes showTitle {
      0% {
         opacity: 0;
         scale: 0.8;
      }
      100% {
         opacity: 1;
         scale: 1;
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
            onClick={() => navigate(`/${link}`, { replace: true })}
            className={isActive ? "Alive" : ""}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideIn}
            transition={{ duration: 0.3 }}
         >
            <MenuContent
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
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
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
               >
                  {name}
               </MenuTitle>
               {icon && icon}
            </MenuContent>
         </Menu>
      </Motion>
   );
}

export default Navbar;
