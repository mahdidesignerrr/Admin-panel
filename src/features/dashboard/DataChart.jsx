import {
   ResponsiveContainer,
   AreaChart,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Area,
} from "recharts";

import styled, { css } from "styled-components";
import { useDataDashboard } from "../../contexts/DashboardContext";
import SpinnerMini from "../../ui/SpinnerMini";
import NumberComponent from "../../utils/helpers";
import { useSearchParams } from "react-router-dom";

const StyledSalesChart = styled.div`
   grid-column: 1 / -1;
   width: 100%;
   height: 100%;
   position: relative;
   /* Hack to change grid line colors */
   & .recharts-cartesian-grid-horizontal line,
   & .recharts-cartesian-grid-vertical line {
      stroke: var(--color-grey-300);
   }
`;

const colors = {
   lastTotalPayments: {
      stroke: "#2450ff",
      fill: "#0004dd",
      mainFill: "rgb(49 0 255 / 90%)",
   },
   totalPayments: { stroke: "#0084ff", fill: "#6db8ff", mainFill: "#00a2ff" },
   text: "#e5e7eb",
   background: "#18212f",
};

const TooltipContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100px;
   gap: 1rem;
   transform: translate(-60%, -10%);
`;

const types = {
   primary: css`
      background-color: var(--color-brand-800);
      box-shadow: var(--shadow-inset), var(--shadow-sm);
   `,
   secondary: css`
      border: 1px dashed var(--color-grey-400);
      box-shadow: var(--shadow-sm);
      backdrop-filter: blur(50px);
   `,
};

const TooltipItem = styled.div`
   width: 100%;
   height: 100%;
   padding: 0.3rem 1rem;
   border-radius: var(--border-radius-lg);
   ${(props) => types[props.type]}
`;

const SalesChart = () => {
   const { isError, isLoading, data, reportsData } = useDataDashboard();
   const [searchParams, setSearchParams] = useSearchParams();
   const lastField = searchParams.get("report") || "lastTotalPaymentsDays";

   const { color, title, lastChartField, chartField } = reportsData.find(
      (data) => data.lastField === lastField
   );
   return (
      <StyledSalesChart>
         {!isError && isLoading ? (
            <SpinnerMini />
         ) : isError ? (
            "Something wrong - error fetch"
         ) : (
            <ResponsiveContainer height={300} width="100%">
               <AreaChart
                  key={lastChartField}
                  data={data.currentMetrics.resultsDays}
               >
                  <CartesianGrid
                     horizontal={false}
                     opacity={0.5}
                     strokeDasharray="5"
                  />
                  <XAxis
                     dataKey="lastDate"
                     tick={{ fill: colors.text, fontSize: 12 }}
                     tickLine={false}
                     axisLine={false}
                     direction="rtl"
                     tickFormatter={(value) => value}
                  />
                  <YAxis
                     dataKey={lastChartField}
                     tick={{ fill: colors.text, fontSize: 12 }}
                     tickLine={false}
                     axisLine={false}
                     fontFamily="poppins"
                     fontWeight="500"
                     interval={1}
                     direction="ltr"
                     width={85}
                     tickFormatter={(value) =>
                        typeof value === "string"
                           ? value
                           : value.toLocaleString()
                     }
                  />
                  <Tooltip
                     contentStyle={{
                        backgroundColor: colors.background,
                        borderRadius: "5px",
                     }}
                     labelStyle={{ color: colors.text }}
                     itemStyle={{ color: colors.text }}
                     content={({ active, payload }) => {
                        if (!active || !payload || payload.length === 0) {
                           return null;
                        }

                        return (
                           <TooltipContainer>
                              <TooltipItem type="primary">
                                 <NumberComponent
                                    isAnimate={false}
                                    type="tooltip"
                                    number={payload[0].payload[lastChartField]}
                                 />
                              </TooltipItem>
                              <TooltipItem type="secondary">
                                 <NumberComponent
                                    isAnimate={false}
                                    type="tooltip"
                                    number={payload[0].payload[chartField]}
                                 />
                              </TooltipItem>
                           </TooltipContainer>
                        );
                     }}
                  />
                  <Area
                     dataKey={lastChartField}
                     type="monotone"
                     stroke={color}
                     fill={`url(#cyan-gradient-${lastField})`}
                     strokeWidth={2}
                     name={title}
                  />
                  <defs>
                     <linearGradient
                        id={`cyan-gradient-${lastField}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                     >
                        <stop offset="5%" stopColor={color} stopOpacity={0.9} />
                        <stop
                           offset="100%"
                           stopColor={color}
                           stopOpacity={0.01}
                        />
                     </linearGradient>
                     <linearGradient
                        id={`second-gradient-${lastField}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                     >
                        <stop
                           offset="100%"
                           stopColor={color}
                           stopOpacity={0.2}
                        />
                        <stop
                           offset="100%"
                           stopColor={color}
                           stopOpacity={0.1}
                        />
                     </linearGradient>
                  </defs>
                  <Area
                     dataKey={chartField}
                     type="monotone"
                     stroke={color}
                     fill={`url(#second-gradient-${lastField})`}
                     strokeDasharray="10"
                     strokeOpacity={0.7}
                     strokeWidth={2}
                     name={title}
                  />
               </AreaChart>
            </ResponsiveContainer>
         )}
      </StyledSalesChart>
   );
};

export default SalesChart;
