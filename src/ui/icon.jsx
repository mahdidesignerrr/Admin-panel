import styled from "styled-components"

const Icon = styled.div`
  backdrop-filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  height: 50px;
  border: var(--border-main-sm);
  box-shadow: var(--shadow-inset);
  border-radius: var(--border-radius-lg);
  width: 50px;
  color: var(--color-grey-100);
  @media screen and (max-width: 768px) {
      width: 45px;
      height: 45px;
      & svg {
        width: 22px;
        height: 22px;
      }
   }
`
export default Icon