import styled from "styled-components";

export const Status = styled.div`
   display: flex;
   align-items: center;
   color: var(--color-green-500);
   gap: 0.6rem;
   font-size: 1.4rem;
   & div {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: var(--color-green-500);
   }
`;