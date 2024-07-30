import { DashboardContext } from "../contexts/DashboardContext";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardTopSection from "../features/dashboard/DashboardTopSection";

function Dashboard() {
   return (
      <>
         <DashboardContext>
            <DashboardTopSection/>
         </DashboardContext>
            <DashboardLayout />
      </>
   );
}

export default Dashboard;
