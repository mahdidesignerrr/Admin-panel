import styled from "styled-components";
import Navbar from "../../ui/Navbar";
import { motion } from "framer-motion";
import { createContext, useContext } from "react";

const StyledMenus = styled(motion.div)`
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 3rem;
   flex-direction: column;
`;

const StyledContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 3%;
   width: 65vw;

   @media screen and (max-width: 900px) {
      width: 90vw;
   }
`;

const StyledCategories = styled(motion.div)`
   display: flex;
   justify-content: center;
   align-items: end;
   gap: 1rem;
   flex-direction: column;
`;

const StyledTitleSection = styled(motion.div)`
   display: flex;
   align-items: center;
   width: 100%;
   gap: 2rem;
`;

const MenuTitleLine = styled(motion.div)`
   height: 1.5px;
   flex-grow: 1;
   background-color: var(--color-grey-200);
   opacity: 0.5;
`;

const MenuTitle = styled.h2`
   flex-shrink: 0;
   font-size: 2.3rem;
`;

const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.3,
      },
   },
};

const itemVariants = {
   hidden: { opacity: 0, y: 30 },
   visible: { opacity: 1, y: 0 },
};

const MenuContext = createContext();

function MenuAppLayout({ children, menus }) {
   return (
      <StyledMenus
         initial="hidden"
         animate="visible"
         variants={containerVariants}
      >
         {Object.keys(menus).map((category) => (
            <MenuContext.Provider key={category} value={{ category, menus }}>
               {children}
            </MenuContext.Provider>
         ))}
      </StyledMenus>
   );
}

function MenuTitleSection() {
   const { category } = useContext(MenuContext);
   return (
      <StyledTitleSection>
         <MenuTitle>{category}</MenuTitle>
         <MenuTitleLine />
      </StyledTitleSection>
   );
}

function MenuContainer() {
   const { category, menus } = useContext(MenuContext);
   return (
      <StyledContainer key={category}>
         {menus[category].map((menu) => (
            <Navbar
               type="primary"
               key={menu.link}
               name={menu.title}
               icon={menu.icon}
               link={menu.link}
            />
         ))}
      </StyledContainer>
   );
}

function MenuCategories({ children }) {
   const { category } = useContext(MenuContext);
   return (
   <StyledCategories variants={itemVariants} key={category}>
      {children}
   </StyledCategories>
   )
}

MenuAppLayout.TitleSection = MenuTitleSection;
MenuAppLayout.Container = MenuContainer;
MenuAppLayout.Categories = MenuCategories;

export default MenuAppLayout;
