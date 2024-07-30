import styled, { css } from "styled-components";
import { percentage } from "../../utils/helpers";
import DashboardFilter from "./DashboardFilter";
import { useSearchParams } from "react-router-dom";
import { useDataDashboard } from "../../contexts/DashboardContext";
import SpinnerMini from "../../ui/SpinnerMini";
import { IconGrowOrDown } from "../../styles/Icons";
import Skeleton from "react-loading-skeleton";
import StatHeading from "../../ui/StatHeading";
import { memo, useMemo } from "react";

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

const DashboardTopSection = memo(function DashboardTopSection() {
   const [searchParams, setSearchParams] = useSearchParams();
   const lastField = searchParams.get("report") || "lastTotalPaymentsDays";
   const numTime = searchParams.get("last") || "7";
   const time = numTime == 7 ? "هفته" : numTime == 3 ? "3 روز" : "ماه";
   const { isLoading, data, reportsData } = useDataDashboard();
   const { icon, title, field } = reportsData.find(
      (data) => data.lastField === lastField
   );

   const percentChange = percentage(
      data?.currentMetrics[field],
      data?.currentMetrics[lastField]
   );
   const stats = [
      {
         label: "میزان تغییر",
         amount: percentChange,
         icon: <IconGrowOrDown />,
      },
      {
         label: `${title} در ${time} گذشته`,
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

   return (
      <TopSection>
         <LabelSection type="filter">
            <Label fontSize="1.7rem">
               {isLoading ? <Skeleton width={90} height={20} /> : "زمان آمار"}
            </Label>
            {isLoading ? (
               <Skeleton width={220} borderRadius={50} height={50} />
            ) : (
               <DashboardFilter />
            )}
         </LabelSection>
         {stats.map(({ label, amount, type = "secondary", icon }, i) => (
            <StatHeading
               key={label}
               isLoading={isLoading}
               label={label}
               type={type}
               amount={amount}
               icon={icon}
            />
         ))}
      </TopSection>
   );
})


export default DashboardTopSection;
