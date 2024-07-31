import Skeleton from "react-loading-skeleton";
import Icon from "./Icon";
import styled, { css } from "styled-components";
import NumberComponent from "../utils/helpers";

const types = {
   primary: css`
      padding-bottom: 10px;
      @media screen and (max-width: 480px) {
      align-items: center;
   }
   `,
   secondary: css`
      font-size: 2rem;
   `,
   thirty: css`
      font-size: 1.6rem;
      align-items: start;
   `,
   filter: css`
      gap: 0.5rem;
      align-items: start;
   `,
};

const labelTypes = {
   primary: css`
      font-size: 2rem;

      @media screen and (max-width: 1100px) {
         font-size: 1.7rem;
      }
      @media screen and (max-width: 480px) {
      font-size: 2rem;
   }
   `,
   secondary: css`
      font-size: 1.7rem;

      @media screen and (max-width: 1100px) {
         font-size: 1.5rem;
      }
   `,
};

const DataSectionNumber = styled.div`
   display: flex;
   justify-content: center;
   gap: 1rem;
   align-items: center;
   flex-direction: ${(props) => (props.$isReverse ? "row-reverse" : "row")};
   @media screen and (max-width: 990px) {
      display: ${({$responsive}) => ($responsive === "first" ? "none" : "flex")};
   }
   @media screen and (max-width: 768px) {
      display: ${({$responsive}) => ($responsive === "second" || $responsive === "first"  ? "none" : "flex")};
   }
`;

const Label = styled.p`
   padding-right: 5px;
   color: var(--color-grey-500);
   ${(props) => labelTypes[props.type]}
`;

const LabelSection = styled.div`
   display: flex;
   justify-content: center;
   align-items: end;
   flex-direction: column;
   ${(props) => types[props.type]}
`;

LabelSection.defaultProps = {
   type: "secondary",
};

const IconSection = styled.div`
   padding-top: ${(props) => (props.$isReverse ? "0px" : "20px")};
   display: ${({$forDashboard}) => $forDashboard ? "none" : "block" };
`;

function StatHeading({
   label,
   type = "secondary",
   icon,
   amount,
   index,
   isLoading,
   isReverse = false,
   $forDashboard= false,
   $responsive = "notThing",
}) {
   return (
      <DataSectionNumber
         $responsive={$responsive}
         $isReverse={isReverse}
         key={`${label}-${index}`}
      >
         <LabelSection type={type}>
            <Label type={type}>
               {isLoading ? <Skeleton width={90} height={20} /> : label}
            </Label>
            {isLoading ? (
               <Skeleton
                  borderRadius={20}
                  width={type === "primary" ? 250 : 100}
                  height={type === "primary" ? 40 : 30}
               />
            ) : (
               <NumberComponent
                  key={`${label}-${amount}-${index}`}
                  type={type}
                  number={amount}
                  isAnimate={false}
               />
            )}
         </LabelSection>
         <IconSection $forDashboard={$forDashboard} $isReverse={isReverse}>
            <Icon>
               {isLoading ? <Skeleton width={50} height={50} circle /> : icon}
            </Icon>
         </IconSection>
      </DataSectionNumber>
   );
}

export default StatHeading;
