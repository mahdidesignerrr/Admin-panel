import styled from "styled-components";
import ReportsSection from "./ReportsSection";
import DataChart from "./DataChart";
import { DashboardContext } from "../../contexts/DashboardContext";
import ActivitySection from "./ActivitySection";

const StyledDashboardLayout = styled.div`
   display: flex;
   justify-content: start;
   align-items: center;
   height: 135vh;
   gap: 1.5rem;
   @media screen and (max-width: 770px) {
      height: auto;
   }
`;

const RightSection = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 1.5rem;
   height: 100%;
   width: 65%;
   @media screen and (max-width: 1100px) {
      width: 100%;
   }
`;

const ChartContainer = styled.div`
   height: 40%;
   width: 100%;
   @media screen and (max-width: 770px) {
      height: 25rem;
   }
`;

const ActivityContainer = styled.div`
   /* background: yellow; */
   height: 80%;
   width: 100%;
   @media screen and (max-width: 770px) {
      height: auto;
   }
`;

const ReportsContainer = styled.div`
   height: 100%;
   width: 35%;
`;

function DashboardLayout() {
   return (
      <StyledDashboardLayout>
         <DashboardContext>
            <RightSection>
               <ChartContainer>
                  <DataChart />
               </ChartContainer>
               <ActivityContainer>
                  <ActivitySection />
               </ActivityContainer>
            </RightSection>
            {window.innerWidth > 1100 && (
               <ReportsContainer>
                  <ReportsSection />
               </ReportsContainer>
            )}
         </DashboardContext>
      </StyledDashboardLayout>
   );
}

export default DashboardLayout;
