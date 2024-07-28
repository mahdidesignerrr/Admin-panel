import styled, { css } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

// Define animation settings
const slideIn = {
   initial: { scale: 0.9, opacity: 0.1 },
   animate: { scale: 1, opacity: 1 },
   exit: { scale: 0.9, opacity: 0.1 },
};

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
   tertiary: css`
      font-size: 2.5rem;
      .last-three {
         font-size: 1.8rem;
      }
   `,
   tooltip: css`
      font-size: 1.6rem;
      .last-three {
         font-size: 1.3rem;
      }
   `,
};

const StyledNumber = styled.h2`
   font-family: poppins;
   font-weight: 600;
   display: flex;
   direction: ltr;
   gap: 0.25rem;
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

// Function to format numbers with optional animation
const formatNumber = (number, isAnimate) => {
   const numStr = number.toString();
   const length = numStr.length;
   let firstPart = "";
   let middleThree = "";
   let lastThree = "";

   if (numStr.includes("%") || numStr.includes(".")) {
      firstPart = numStr;
   } else if (length > 9) {
      firstPart = numStr.slice(0, length - 9);
      middleThree = numStr.slice(length - 9, length - 6);
      lastThree = numStr.slice(length - 6);
   } else if (length > 6) {
      firstPart = numStr.slice(0, length - 6);
      middleThree = numStr.slice(length - 6, length - 3);
      lastThree = numStr.slice(length - 3);
   } else if (length > 3) {
      firstPart = numStr.slice(0, length - 3);
      middleThree = numStr.slice(length - 3);
   } else {
      middleThree = numStr;
   }

   return (
      <AnimatePresence>
         {firstPart && (
            <motion.span
               className="first-part"
               key={`first-part-${firstPart}`}
               initial={isAnimate ? { opacity: 0, y: 30 } : {}}
               animate={isAnimate ? { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4 } } : {}}
               exit={isAnimate ? { opacity: 0.7, y: 30, transition: { duration: 0.3, ease: "easeIn" } } : {}}
            >
               {numStr.includes("%") || numStr.includes(".") ? numStr : `${firstPart},`}
            </motion.span>
         )}
         {middleThree && (
            <motion.span
               className="middle-three"
               key={`middle-three-${middleThree}`}
               initial={isAnimate ? { opacity: 0, y: 20 } : {}}
               animate={isAnimate ? { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4, delay: 0.15 } } : {}}
               exit={isAnimate ? { opacity: 0.7, y: 20, transition: { duration: 0.3, ease: "easeIn", delay: 0.15 } } : {}}
            >
               {middleThree}
            </motion.span>
         )}
         {lastThree && (
            <motion.span
               className="last-three"
               key={`last-three-${lastThree}`}
               initial={isAnimate ? { opacity: 0, y: 10 } : {}}
               animate={isAnimate ? { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.4, delay: 0.3 } } : {}}
               exit={isAnimate ? { opacity: 0.95, y: 10, transition: { duration: 0.3, ease: "easeIn", delay: 0.3 } } : {}}
            >
               ,{lastThree}
            </motion.span>
         )}
      </AnimatePresence>
   );
};

const NumberComponent = ({ type, number, isAnimate = true }) => {
   return <StyledNumber type={type}>{formatNumber(number, isAnimate)}</StyledNumber>;
};

export default NumberComponent;

export function percentage(one, two) {
   if (!one) {
      return two === 0 ? "0%" : "100...%";
   }
   const increasePercentage = ((two - one) / one) * 100;
   if (isNaN(increasePercentage)) return "0%";
   if (increasePercentage === Infinity) return "100...%";
   if (increasePercentage === -Infinity) return "-100...%";
   return `${Math.round(increasePercentage)}%`;
}
