import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { createPortal } from "react-dom";
import ReportsSection from "../features/dashboard/ReportsSection";
import { DashboardContext } from "../contexts/DashboardContext";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useState } from "react";
import Icon from "./Icon";
import { IconArrowRight, IconStarReport } from "../styles/Icons";
import Row from "./Row";
import LogoAccount from "./LogoAccount";

// Styled components with framer-motion
const StyledSideBar = styled(motion.div)`
   display: flex;
   flex-direction: column;
   position: fixed;
   top: 0;
   right: 0;
   width: 100%;
   max-width: 46rem;
   height: 100vh;
   direction: rtl;
   background: url("../../public/Gradient-For-Project-Mobile.jpg");
   /* border-left: 1px solid var(--color-brand-800); */
   z-index: 1001;
   border-top-left-radius: 50px;
   border-bottom-left-radius: 50px;
   &::-webkit-scrollbar-track {
      margin-top: 0px; /* Adjust this value */
   }
`;

const Overlay = styled(motion.div)`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background-color: #0000008d;
   z-index: 1000;
`;

const ContentWrapper = styled.div`
   flex: 1;
   box-sizing: border-box;
   overflow-y: auto;
   padding-top: 8rem;
`;

const TopSideBar = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 8rem;
   width: 100%;
   z-index: 10;
   position: fixed;
   top: 0px;
   left: 0px;
   border-bottom: var(--border-main-sm);
   padding: 2rem;
   backdrop-filter: var(--filter-blur-md);
`;

const AccountSection = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1.2rem;
   & p {
      font-size: 1.5rem;
      color: var(--color-grey-700);
   }
`;
const RowName = styled(Row)`
   align-items: start;
   line-height: 2rem;
`

function SideBar({ isLoading, admin, adminToken }) {
   const [show, setShow] = useState(false);
   const close = () => setShow(false);
   const ref = useOutsideClick(close);

   return (
      <>
         {window.innerWidth < 1100 && (
            <Icon onClick={() => setShow((bool) => !bool)}>
               <IconStarReport />
            </Icon>
         )}
         {createPortal(
            <AnimatePresence>
               {show && (
                  <>
                     <Overlay
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                     />
                     <StyledSideBar
                        ref={ref}
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ ease: "circOut", duration: 0.3 }}
                     >
                        <ContentWrapper>
                           <TopSideBar>
                              <AccountSection>
                                 <LogoAccount
                                    admin={admin}
                                    adminToken={adminToken}
                                    isLoading={isLoading}
                                 />
                                 <RowName>
                                    <p>روز بخیر👋</p>
                                    <h3>مهدی دیزاینر</h3>
                                 </RowName>
                              </AccountSection>
                              <AccountSection>
                              <h3>منوی آمار</h3>
                              <Icon onClick={() => close()}>
                                 <IconArrowRight/>
                              </Icon>
                              </AccountSection>
                           </TopSideBar>
                           <DashboardContext>
                              <ReportsSection
                                 type="sidebar"
                                 handleClose={close}
                              />
                           </DashboardContext>
                        </ContentWrapper>
                     </StyledSideBar>
                  </>
               )}
            </AnimatePresence>,
            document.body
         )}
      </>
   );
}

export default SideBar;
