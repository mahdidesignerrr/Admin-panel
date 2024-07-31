import styled from "styled-components";
import DashboardBox from "../../ui/DashboardBox";
import { useDataDashboard } from "../../contexts/DashboardContext";
import Skeleton from "react-loading-skeleton";
import OrderBoxComponent from "./OrderBox";


const StyledActivitySection = styled(DashboardBox)`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
   height: 100%;
   width: 100%;
`;

const StyledContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 1.5rem;
   justify-content: center;
   width: 100%;
   @media screen and (max-width: 768px) {
         flex-wrap: nowrap;
         flex-direction: column;
      }
`;

function ActivitySection() {
   const { isLoading, data } = useDataDashboard();

   if (isLoading) return <Skeleton width="100%" borderRadius={50} height={1000}/>;

   const orders = data.newOrders
   return (
      <StyledActivitySection>
         <StyledContainer>
            {orders.map((order) => (
               <OrderBoxComponent key={order.trackingCode} {...order} />
            ))}
         </StyledContainer>
      </StyledActivitySection>
   );
}

export default ActivitySection;
