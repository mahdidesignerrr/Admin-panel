import styled from "styled-components";

const DashboardBox = styled.div`
   /* Box */
   /* background-color: var(--color-back); */
   /* backdrop-filter: var(--filter-blur-md); */
   border: var(--border-main-sm);
   border-radius: var(--border-radius-lg);
   padding: 3.2rem;
   display: flex;
   flex-direction: column;
   gap: 2.4rem;
   transition: all 0.3s ease-out;
   box-shadow: var(--shadow-sm);
   &:hover {
      box-shadow: var(--shadow-lg) !important;
   }

   /* &::before */
`;

export default DashboardBox;
