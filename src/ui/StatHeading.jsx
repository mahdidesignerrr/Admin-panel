import Skeleton from "react-loading-skeleton";
import Icon from "./Icon";
import styled, { css } from "styled-components";
import NumberComponent from "../utils/helpers";

const types = {
   primary: css`
      padding-bottom: 10px;
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

const DataSectionNumber = styled.div`
   display: flex;
   justify-content: center;
   gap: 1rem;
   align-items: center;
   flex-direction:${props => props.$isReverse ? "row-reverse" : "row"};
`;

const Label = styled.p`
   padding-right: 5px;
   font-size: ${(props) => props.fontSize || "1.7rem"};
   color: var(--color-grey-500);
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
  padding-top: ${props => props.$isReverse ? "0px" : "20px"};
`;

function StatHeading({
   label,
   type,
   icon,
   amount,
   index,
   isLoading,
   isReverse = false,
   fontSize = "1.7rem",
}) {
   return (
      <DataSectionNumber $isReverse={isReverse} key={`${label}-${index}`}>
         <LabelSection type={type}>
            <Label fontSize={type === "primary" ? "2rem" : fontSize}>
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
               />
            )}
         </LabelSection>
         <IconSection $isReverse={isReverse}>
            <Icon>
               {isLoading ? <Skeleton width={50} height={50} circle /> : icon}
            </Icon>
         </IconSection>
      </DataSectionNumber>
   );
}

export default StatHeading;
