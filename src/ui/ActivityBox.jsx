import styled from "styled-components";

export const ActivityBox = styled.div`
   display: flex;
   flex-direction: column;
   height: auto;
   gap: 0.4rem;
   border: var(--border-main-sm);
   background-color: var(--backdrop-color);
   border-radius: var(--border-radius-lg);
   width: calc(50% - 0.75rem); /* Adjusted for spacing between items */
   padding: 1.5rem;
   transition: all 0.3s ease-in-out;
   cursor: pointer;
   box-shadow: var(--shadow-inset), var(--shadow-lg);
   &:hover {
      box-shadow: var(--shadow-inset-bot), var(--shadow-sm) !important;
   }
   @media screen and (max-width: 770px) {
      width: 100%
   }
`;