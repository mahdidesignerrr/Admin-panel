import styled, { css } from "styled-components";
import Icon from "./Icon";
import NumberComponent, { percentage } from "../utils/helpers";
import StateChart from "../features/dashboard/StateChart";
import { useDataDashboard } from "../contexts/DashboardContext";
import { useSearchParams } from "react-router-dom";
import { memo } from "react";

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

   ${(props) =>
      !props.$isActive
         ? css`
              &:hover {
                 box-shadow: inset 0px -2px 6px 0px ${(props) => props.color || "rgb(79 00 255 / 100%)"},
                    var(--shadow-sm) !important;
                 transform: scale(0.98);
              }
           `
         : ""}

   ${(props) =>
      props.$isActive
         ? css`
              cursor: pointer;
              box-shadow: inset 0px -2px 6px 0px ${(props) => props.color || "rgb(79 00 255 / 100%)"},
                 var(--shadow-sm) !important;
              transform: scale(0.95);
           `
         : ""}

   &::before {
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      filter: blur(50px);
      background: linear-gradient(
         45deg,
         #080808 55%,
         ${(props) => props.color || "rgb(79 00 255 / 100%)"} 45%
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
   & div {
      box-shadow: var(--shadow-md) !important;
   }
   ${(props) =>
      props.$isActive
         ? css`
              & div {
                 box-shadow: var(--shadow-sm) !important;
              }
           `
         : ""}
   & h2 {
      font-size: 2.5rem;
      word-break: break-all;
   }
   @media screen and (max-width: 480px) {
      & h2 {
      font-size: 2rem;
      word-break: break-all;
   }
   }
`;

const RightSection = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   flex-direction: column;
   gap: 0.8rem;
   height: 100%;
   width: 100%;
   cursor: ${(props) => (props.$isActive ? "auto" : "pointer")};
`;

const PercentBox = styled.div`
   font-family: "oppins";
   font-weight: 600;
   direction: ltr;
   width: 35%;
   background-color: ${(props) =>
      props.$isGrow ? "#00ff33" : "#ff5151"}; /* استفاده از $isGrow */
   color: ${(props) =>
      props.$isGrow ? "var(--color-grey-0)" : "var(--color-grey-900)"};
   display: flex;
   font-size: 1.5rem;
   justify-content: center;
   align-items: center;
   border-radius: var(--border-radius-lg);
   box-shadow: var(--shadow-sm);
`;

const Stats = memo(function Stats({
   color,
   title,
   field,
   lastField,
   icon,
   chartField,
   handleClose
}) {
   const { isLoading, data } = useDataDashboard();
   const [searchParams, setSearchParams] = useSearchParams();

   const amount = data?.currentMetrics?.[field];
   const lastAmount = data?.currentMetrics?.[lastField];

   const currentFilter =
      searchParams.get("report") ||
      data?.currentMetrics?.["lastTotalPaymentsDays"];

   const isActive = currentFilter === lastField;
   function handleClick() {
      if (isActive) return null;
      searchParams.set("report", lastField);
      setSearchParams(searchParams);
      handleClose?.()
   }

   const percentChange = percentage(amount, lastAmount);
   const isGrow = !percentChange.includes("-");

   return (
      <StyledStat
         $isActive={isActive}
         value={lastField}
         color={color}
         onClick={handleClick}
      >
         <RightSection $isActive={isActive}>
            <LabelSection $isActive={isActive}>
               <Icon>{icon}</Icon>
               <h2>{title}</h2>
            </LabelSection>
            <NumberComponent
               key={lastField}
               type="filter"
               number={lastAmount}
            />
            <PercentBox $isGrow={isGrow}>{percentChange}</PercentBox>
         </RightSection>
         <StateChart field={chartField} color={color} />
      </StyledStat>
   );
});

export default Stats;
