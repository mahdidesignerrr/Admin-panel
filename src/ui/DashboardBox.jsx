import styled from "styled-components";

const DashboardBox = styled.div`
   /* Box */
   background-color: var(--backdrop-color);
   backdrop-filter: var(--filter-blur-md);
   border: 2px solid #42139a;
   border-radius: var(--border-radius-lg);
   padding: 1.6rem;
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
      filter: blur(100px);
      background-color:rgb(80 00 255 / 100%);
      z-index: -1;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
   }
`;


export default DashboardBox;
