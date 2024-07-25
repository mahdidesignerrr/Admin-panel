import styled from "styled-components";

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
   height: 100%;
   width: 70%;
`;

const ChartContainer = styled.div`
   background: blue;
   height: 50%;
   width: 100%;
`;

const ActivityContainer = styled.div`
   background: yellow;
   height: 50%;
   width: 100%;
`;

const ReportsContainer = styled.div`
   background: purple;
   height: 100%;
   width: 30%;
`;

function DashboardLayout() {
   return (
      <StyledDashboardLayout>
         <LeftSection>
            <ChartContainer>CHART</ChartContainer>
            <ActivityContainer>ACTIVITY</ActivityContainer>
         </LeftSection>
         <ReportsContainer>REPORTS</ReportsContainer>
      </StyledDashboardLayout>
   );
}

export default DashboardLayout;
