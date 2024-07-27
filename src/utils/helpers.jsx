import styled, { css } from "styled-components";

const types = {
   primary: css`
      font-size: 5.5rem;
      .last-three {
         font-size: 3.5rem;
      }
   `,
   secondary: css`
      font-size: 3.5rem;
      .last-three {
         font-size: 2.5rem;
      }
   `,
   tooltip: css`
      font-size: 1.6rem;
      .last-three {
         font-size: 1.3rem;
      }
   `
};

const StyledNumber = styled.h2`
   font-family: poppins;
   font-weight: 600;
   display: flex;
   direction: ltr;
   gap: 0.25rem;
   display: flex;
   align-items: baseline;
   ${(props) => types[props.type]}
   .first-part {
      color: var(--color-grey-900);
   }

   .middle-three {
      color: var(--color-grey-600);
   }

   .last-three {
      color: var(--color-grey-500);
   }
`;

StyledNumber.defaultProps = {
   type: "secondary",
};

const formatNumber = (number) => {
   const numStr = number.toString();
   const length = numStr.length;
   let firstPart = "";
   let middleThree = "";
   let lastThree = "";

   const n = length - 6;
   if(numStr.includes("%")){
    firstPart = numStr.slice(0, length);
   } else if (length > 9) {
      firstPart = numStr.slice(0, length - 9);
      middleThree = numStr.slice(length - 9, length - 6);
      lastThree = numStr.slice(length - 6);
   } else if (length > 6) {
      firstPart = numStr.slice(0, length - 6);
      middleThree = numStr.slice(n, length - 3);
      lastThree = numStr.slice(length - 3);
   } else if (length > 3) {
      firstPart = numStr.slice(0, length - 3);
      middleThree = numStr.slice(length - 3);
   } else {
      middleThree = numStr;
   }

   return (
      <>
         {firstPart && <span className="first-part">{`${numStr.includes("%") ? numStr : `${firstPart},`}`}</span>}
         {middleThree && <span className="middle-three">{middleThree}</span>}
         {lastThree && <span className="last-three">,{lastThree}</span>}
      </>
   );
};

const NumberComponent = ({ type, number }) => {
   return (
      <StyledNumber type={type}>{formatNumber(number)}</StyledNumber>
   );
};

export default NumberComponent;
