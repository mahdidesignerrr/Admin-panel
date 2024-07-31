import styled, { css } from "styled-components";
import { useDataDashboard } from "../../contexts/DashboardContext";
import DashboardBox from "../../ui/DashboardBox";
import Stats from "../../ui/Stat";
import { memo } from "react";
import Skeleton from "react-loading-skeleton";

const types = {
   sidebar: css`
      backdrop-filter: none;
      border: 0px;
      border-radius: 0px;
   `
}

const StyledStats = styled(DashboardBox)`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 100%;
   height: 100%;
   min-height: 85rem;
   gap: 1.5rem;
   ${(props) => types[props.type]}
   &::before {
      height: 100%;
      width: 100%;
      filter: blur(400px);
      opacity: 0.15;
   }
`;

const ReportsSection = memo(function ReportsSection({type="default", handleClose}) {
   const {isLoading, reportsData } = useDataDashboard();
   if (isLoading) return  <Skeleton width="100%" height="100%"borderRadius={50} />
   return (
      <StyledStats type={type}>
         {reportsData.map(({title, field, lastField,icon,color, lastChartField}, i) => (
         <Stats handleClose={handleClose} key={`${field}-${i}`} title={title} field={field} lastField={lastField} chartField={lastChartField} icon={icon} color={color}/>
         ))}
      </StyledStats>
   );
})

export default ReportsSection;