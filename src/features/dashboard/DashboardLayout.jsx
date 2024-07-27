import styled from "styled-components";
import { DashboardContext, useDataDashboard } from "../../contexts/DashboardContext";
import ReportsSection from "./ReportsSection";
import DataChart from "./dataChart";

const StyledDashboardLayout = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 100vh;
`;

const LeftSection = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 2rem;
   height: 100%;
   width: 65%;
`;

const ChartContainer = styled.div`
   height: 50%;
   width: 100%;
`;

const ActivityContainer = styled.div`
   /* background: yellow; */
   height: 50%;
   width: 100%;
`;

const ReportsContainer = styled.div`
   height: 100%;
   width: 35%;
`;

function DashboardLayout() {

   return (
      <DashboardContext>
         <StyledDashboardLayout>
            <ReportsContainer>
              <ReportsSection/>
            </ReportsContainer>
            <LeftSection>
               <ChartContainer>
                  <DataChart/>
               </ChartContainer>
               <ActivityContainer>ACTIVITY</ActivityContainer>
            </LeftSection>
         </StyledDashboardLayout>
      </DashboardContext>
   );
}

export default DashboardLayout;
