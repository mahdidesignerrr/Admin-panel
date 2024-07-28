import styled from "styled-components";
import ReportsSection from "./ReportsSection";
import DataChart from "./dataChart";
import DashboardBox from "../../ui/DashboardBox";

const StyledDashboardLayout = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 120vh;
   gap: 1.5rem;
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

const ChartContainer = styled(DashboardBox)`
   height: 50%;
   width: 100%;
`;

const ActivityContainer = styled.div`
   /* background: yellow; */
   height: 70%;
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
         <LeftSection>
            <ChartContainer>
               <DataChart />
            </ChartContainer>
            <ActivityContainer></ActivityContainer>
         </LeftSection>
         <ReportsContainer>
            <ReportsSection />
         </ReportsContainer>
      </StyledDashboardLayout>
   );
}

export default DashboardLayout;
