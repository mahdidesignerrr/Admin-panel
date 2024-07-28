import styled from "styled-components";
import Icon from "./Icon";
import NumberComponent, { percentage } from "../utils/helpers";
import StateChart from "../features/dashboard/StateChart";
import { useDataDashboard } from "../contexts/DashboardContext";
import { useSearchParams } from "react-router-dom";

const StyledStat = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
   border-radius: var(--border-radius-lg);
   backdrop-filter: blur(15px);
   padding: 0 1.5rem;
   background-color: var(--backdrop-color);
   box-shadow: inset 0px 2px 5px 0px
         ${(props) => props.color || "rgb(79 00 255 / 100%)"},
      var(--shadow-md);
   transition: all 0.25s ease-in-out;
   position: relative;
   overflow: hidden;
   &:hover {
      box-shadow: inset 0px -2px 6px 0px ${(props) => props.color || "rgb(79 00 255 / 100%)"},
         var(--shadow-sm) !important;
      transform: scale(0.98); /* استفاده از transform به جای scale */
   }
   &::before {
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      filter: blur(50px);
      background: linear-gradient(
         30deg,
         #000 60%,
         ${(props) => props.color || "rgb(79 00 255 / 100%)"} 40%
      );
      z-index: -1;
      right: 0%;
      top: 40%;
      transform: translate(0px, -40%);
   }
`;

const LabelSection = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1rem;
   & h2 {
      font-size: 2.5rem;
      word-break: break-all;
   }
`;

const RightSection = styled.div`
   display: flex;
   justify-content: center;
   align-items: start;
   flex-direction: column;
   gap: 0.5rem;
   height: 100%;
   width: 100%;
   cursor: pointer;
`;

const PercentBox = styled.div`
   font-family: poppins;
   font-weight: 600;
   direction: ltr;
   width: 35%;
   background-color: ${(props) => (props.$isGrow ? "#00ff33" : "#ff5151")}; /* استفاده از $isGrow */
   display: flex;
   font-size: 1.5rem;
   justify-content: center;
   align-items: center;
   color: var(--color-grey-100);
   border-radius: var(--border-radius-lg);
   box-shadow: var(--shadow-sm);
`;

function Stats({ color, title, field, lastField, icon, chartField }) {
   const { data } = useDataDashboard();
   const [searchParams, setSearchParams] = useSearchParams();

   const amount = data?.currentMetrics?.[field];
   const lastAmount = data?.currentMetrics?.[lastField];

   const currentFilter = searchParams.get("report") || data?.currentMetrics?.["lastTotalPaymentsDays"];

   function handleClick() {
      searchParams.set("report", lastField);
      setSearchParams(searchParams);
   }

   const percentChange = percentage(amount, lastAmount);
   const isGrow = !percentChange.includes("-");
   
   return (
      <StyledStat value={lastField} color={color} onClick={handleClick}>
         <RightSection>
            <LabelSection>
               <Icon>
                  {icon}
               </Icon>
               <h2>{title}</h2>
            </LabelSection>
            <NumberComponent key={lastField} type="filter" number={lastAmount} />
            <PercentBox $isGrow={isGrow}>{percentChange}</PercentBox> {/* استفاده از $isGrow */}
         </RightSection>
         <StateChart field={chartField} color={color} />
      </StyledStat>
   );
}

export default Stats;
