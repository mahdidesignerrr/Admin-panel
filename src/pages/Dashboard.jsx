import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardTopSection from "../features/dashboard/DashboardTopSection";
import { IconGrowOrDown, IconMoney, IconMoneyWithTime } from "../styles/Icons";

const stats = [
  {label:"میزان تغییر",amount: "100%", icon: <IconGrowOrDown />},
  {label:"سود کلی در هفته گذشته",amount: 7520010, icon: <IconMoneyWithTime />},
  {label:"سود کلی",amount: 9520010, icon: <IconMoney />, type:"primary"}
]

function Dashboard() {
   return (
      <>
        <DashboardTopSection stats={stats}/>
         <DashboardLayout />
      </>
   );
}

export default Dashboard;
