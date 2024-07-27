import styled from "styled-components";

const DashboardBox = styled.div`
   /* Box */
   background-color: var(--backdrop-color);
   backdrop-filter: var(--filter-blur-md);
   border: var(--border-main-sm);
   border-radius: var(--border-radius-lg);
   padding: 3.2rem 1rem;
   display: flex;
   flex-direction: column;
   gap: 2.4rem;
   transition: all 0.3s ease-out;
   box-shadow: var(--shadow-sm);
   position: relative;
   overflow: hidden;

   &:hover {
      box-shadow: var(--shadow-lg) !important;
   }

   &::before {
      width: 95%;
      height: 30%;
      content: "";
      position: absolute;
      filter: blur(110px);
      background-color: var(--color-brand-600);
      z-index: -1;
      left: 10%;
      top: 50%;
      transform: translate(-50px, -50%);
   }
`;


export default DashboardBox;
