import styled from "styled-components";
import ReportsSection from "./ReportsSection";
import DataChart from "./DataChart";
import {
   DashboardContext,
   useDataDashboard,
} from "../../contexts/DashboardContext";
import Skeleton from "react-loading-skeleton";
import ActivitySection from "./ActivitySection";
import NotInternet from "../../pages/NotInternet";

const StyledDashboardLayout = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 120vh;
   gap: 1.5rem;
`;

const RightSection = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   gap: 1.5rem;
   height: 100%;
   width: 65%;
`;

const ChartContainer = styled.div`
   height: 40%;
   width: 100%;
`;

const ActivityContainer = styled.div`
   /* background: yellow; */
   height: 80%;
   width: 100%;
`;

const ReportsContainer = styled.div`
   height: 100%;
   width: 35%;
`;

// const TopContainer = styled.div`
//    display: flex;
//    justify-content: space-between;
//    align-items: center;
// `;
// const showMore = styled.div`

// `;

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
            <ReportsContainer>
               <ReportsSection />
            </ReportsContainer>
         </DashboardContext>
      </StyledDashboardLayout>
   );
}

export default DashboardLayout;
