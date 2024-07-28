import styled from "styled-components";
import { useDataDashboard } from "../../contexts/DashboardContext";
import DashboardBox from "../../ui/DashboardBox";
import Stats from "../../ui/Stat";


const StyledStats = styled(DashboardBox)`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   width: 100%;
   height: 100%;
   gap: 1.5rem;
   padding: 2rem;
   &::before {
      display: none;
      /* height: 100%;
      backdrop-filter: blur(200px); */
   }
`;

function ReportsSection() {
   const { reportsData } = useDataDashboard();
   return (
      <StyledStats>
         {reportsData.map(({title, field, lastField,icon,color, lastChartField}, i) => (
         <Stats key={`${field}-${i}`} title={title} field={field} lastField={lastField} chartField={lastChartField} icon={icon} color={color}/>
         ))}
      </StyledStats>
   );
}

export default ReportsSection;