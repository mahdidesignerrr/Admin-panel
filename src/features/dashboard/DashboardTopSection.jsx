import styled, { css } from "styled-components";
import Icon from "../../ui/Icon";
import NumberComponent, { percentage } from "../../utils/helpers";
import DashboardFilter from "./DashboardFilter";
import { useSearchParams } from "react-router-dom";
import { useDataDashboard } from "../../contexts/DashboardContext";
import SpinnerMini from "../../ui/SpinnerMini";
import { IconGrowOrDown } from "../../styles/Icons";

const TopSection = styled.div`
   width: 100%;
   display: flex;
   direction: ltr;
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
      direction: rtl;
      align-items: start;
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

function DashboardTopSection() {
   const [searchParams, setSearchParams] = useSearchParams();
   const lastField = searchParams.get("report") || "lastTotalPaymentsDays";
   const { isError, isLoading, data, reportsData } = useDataDashboard();
   const { icon, title, field } = reportsData.find(
      (data) => data.lastField === lastField
   );

   const percentChange = percentage(
      data?.currentMetrics[field],
      data?.currentMetrics[lastField]
   );
   const stats = [
      { label: "میزان تغییر", amount: percentChange, icon: <IconGrowOrDown /> },
      {
         label: `${title} در هفته گذشته`,
         amount: data?.currentMetrics[field],
         icon,
      },
      {
         label: title,
         amount: data?.currentMetrics[lastField],
         icon,
         type: "primary",
      },
   ];

   if (isLoading) return <SpinnerMini />;
   if (isError) return "we have error";

   return (
      <TopSection>
         <LabelSection type="filter">
            <Label fontSize="1.7rem">آمار بر اساس:</Label>
            <DashboardFilter />
         </LabelSection>
         {stats.map(({ label, amount, type = "secondary", icon }, i) => (
            <DataSectionNumber key={`${label}-${i}`}>
               <LabelSection type={type}>
                  <Label fontSize={type === "primary" ? "2rem" : "1.7rem"}>
                     {label}
                  </Label>
                  <NumberComponent key={`${label}-${amount}-${i}`} type={type} number={amount} />
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
