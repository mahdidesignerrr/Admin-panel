import styled from "styled-components";
import { useDataDashboard } from "../../contexts/DashboardContext";
import { ResponsiveContainer, AreaChart, Area } from "recharts";
import SpinnerMini from "../../ui/SpinnerMini";

const StyledReportChart = styled.div`
   grid-column: 1 / -1;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 80%;
   height: 100%;
   position: relative;
`;

function StateChart({ field, color }) {
   const { isError, isLoading, data } = useDataDashboard();

   return (
      <StyledReportChart>
         <ResponsiveContainer height="80%" width="100%">
            <AreaChart data={data.currentMetrics.resultsDays}>
               <defs>
                  <linearGradient
                     id={`stat-gradient-${field}`}
                     x1="0"
                     y1="0"
                     x2="0"
                     y2="1"
                  >
                     <stop offset="0%" stopColor={color} stopOpacity={0.5} />
                     <stop offset="100%" stopColor={color} stopOpacity={0.01} />
                  </linearGradient>
               </defs>
               <Area
                  dataKey={field}
                  type="monotone"
                  stroke={color}
                  fill={`url(#stat-gradient-${field})`}
                  strokeWidth={1.5}
               />
            </AreaChart>
         </ResponsiveContainer>
      </StyledReportChart>
   );
}

export default StateChart;
