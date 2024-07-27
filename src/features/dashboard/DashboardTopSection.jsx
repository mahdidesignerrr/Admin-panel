import styled, { css } from "styled-components";
import Icon from "../../ui/Icon";
import {
   IconGrowOrDown,
   IconMoney,
   IconMoneyWithTime,
} from "../../styles/Icons";
import NumberComponent from "../../utils/helpers";
import DashboardFilter from "./DashboardFilter";

const TopSection = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 18vh;
   /* background: #ffffff43; */
`;

const types = {
   primary: css`
      padding-bottom: 10px;
   `,
   secondary: css`
      font-size: 2rem;
   `,
    filter: css`
    gap: 0.5rem;
 `,
};
const DataSectionNumber = styled.div`
   display: flex;
   justify-content: center;
   gap: 1.5rem;
   align-items: center;
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
   padding-top: 20px;
`;

function DashboardTopSection({ stats }) {
   return (
      <TopSection>
         <LabelSection type="filter">
            <Label fontSize="1.7rem">
               آمار بر اساس:
            </Label>
         <DashboardFilter />
         </LabelSection>
         {stats.map(({ label, amount, type = "secondary", icon }) => (
            <DataSectionNumber key={label}>
               <LabelSection type={type}>
                  <Label fontSize={type === "primary" ? "2rem" : "1.7rem"}>
                     {label}
                  </Label>
                  <NumberComponent type={type} number={amount} />
               </LabelSection>
               <IconSection>
                  <Icon>{icon}</Icon>
               </IconSection>
            </DataSectionNumber>
         ))}
      </TopSection>
   );
}

export default DashboardTopSection;
