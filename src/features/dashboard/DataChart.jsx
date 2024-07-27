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
import DashboardBox from "../../ui/DashboardBox";
import { useDataDashboard } from "../../contexts/DashboardContext";
import SpinnerMini from "../../ui/SpinnerMini";
import NumberComponent from "../../utils/helpers";

const StyledSalesChart = styled(DashboardBox)`
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
   },
   totalPayments: { stroke: "#0084ff", fill: "#6db8ff" },
   extrasSales: { stroke: "#22c55e", fill: "#22c55e" },
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
      background-color: var(--color-brand-900);
      box-shadow: var(--shadow-inset), var(--shadow-md);
   `,
   secondary: css`
      border: 1px dashed var(--color-grey-400);
      box-shadow: var(--shadow-sm);
   `,
};

const TooltipItem = styled.div`
   width: 100%;
   height: 100%;
   padding: 0.3rem 1rem;
   border-radius: var(--border-radius-lg);
   backdrop-filter: var(--filter-blur-lg);
   ${(props) => types[props.type]}
`;

TooltipItem.defaultProps = {
   type: "secondary",
};

const SalesChart = () => {
   const { isError, isLoading, data } = useDataDashboard();

   return (
      <StyledSalesChart>
         {!isError && isLoading ? (
            <SpinnerMini />
         ) : (
            isError ? "Something wrong - error fetch" :
            <ResponsiveContainer height={300} width="100%">
               <AreaChart data={data.currentMetrics.resultsDays}>
                  {/* <GradientDefs /> */}
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
                     dataKey="lastTotalPayment"
                     tick={{ fill: colors.text, fontSize: 12 }}
                     tickLine={false}
                     axisLine={false}
                     fontFamily="poppins"
                     fontWeight="500"
                     interval={1}
                     direction="ltr"
                     width={85}
                     tickFormatter={(value) => value.toLocaleString()}
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
                                    type="tooltip"
                                    number={payload[0].payload.lastTotalPayment}
                                 />
                              </TooltipItem>
                              <TooltipItem>
                                 <NumberComponent
                                    type="tooltip"
                                    number={payload[0].payload.totalPayment}
                                 />
                              </TooltipItem>
                           </TooltipContainer>
                        );
                     }}
                  />
                  <Area
                     dataKey="lastTotalPayment"
                     type="monotone"
                     stroke={colors.lastTotalPayments.stroke}
                     fill={`url(#cyan-gradient)`}
                     strokeWidth={2}
                     name="میزان دریافتی"
                  />
                  <defs>
                     <linearGradient
                        id="cyan-gradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                     >
                        <stop
                           offset="0%"
                           stopColor="rgb(49 0 255 / 90%)"
                           stopOpacity={0.9}
                        />
                        <stop
                           offset="100%"
                           stopColor={colors.lastTotalPayments.fill}
                           stopOpacity={0.05}
                        />
                     </linearGradient>
                     <linearGradient
                        id="second-gradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                     >
                        <stop
                           offset="7%"
                           stopColor="#00a2ff"
                           stopOpacity={0.4}
                        />
                        <stop
                           offset="100%"
                           stopColor={colors.totalPayments.fill}
                           stopOpacity={0.05}
                        />
                     </linearGradient>
                  </defs>
                  <Area
                     dataKey="totalPayment"
                     type="monotone"
                     stroke={colors.totalPayments.stroke}
                     fill="url(#second-gradient)"
                     strokeDasharray="10"
                     strokeOpacity={0.7}
                     strokeWidth={2}
                     name="میزان دریافتی"
                  />
               </AreaChart>
            </ResponsiveContainer>
         )}
      </StyledSalesChart>
   );
};

export default SalesChart;
