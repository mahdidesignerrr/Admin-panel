import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;
const icon = (
      <svg
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path
            d="M16.42 7.94996C18.86 10.39 18.86 14.3499 16.42 16.7899C13.98 19.2299 10.02 19.2299 7.58 16.7899C5.14 14.3499 5.14 10.39 7.58 7.94996C8.95 6.57996 10.81 5.97998 12.6 6.14998"
            stroke="var(--color-grey-900)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M8.24999 21.6399C6.24999 20.8399 4.49999 19.3899 3.33999 17.3799C2.19999 15.4099 1.81999 13.2199 2.08999 11.1299"
            stroke="var(--color-grey-900)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M5.8501 4.47986C7.5501 3.14986 9.68009 2.35986 12.0001 2.35986C14.2701 2.35986 16.3601 3.12985 18.0401 4.40985"
            stroke="var(--color-grey-900)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
         <path
            d="M15.75 21.6399C17.75 20.8399 19.5 19.3899 20.66 17.3799C21.8 15.4099 22.18 13.2199 21.91 11.1299"
            stroke="var(--color-grey-900)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
         />
      </svg>
);

const StyledSpinnerMini = styled.div`
   width: 100%;
   height: 100%;
   animation: ${rotate} 1.5s infinite ease-in;
`;

function SpinnerMini() {
  return (
    <StyledSpinnerMini>
      {icon}
    </StyledSpinnerMini>
  )
}

export default SpinnerMini