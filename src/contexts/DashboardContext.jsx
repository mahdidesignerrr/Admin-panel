import { createContext, useContext } from "react";
import { useDashboard } from "../features/dashboard/useDashboard";
import {
   IconMoney,
   IconReceipt,
   IconStarWithSpeed,
   IconThreeUsers,
   IconReceiptFront,
} from "../styles/Icons";

const DashContext = createContext();

const reportsData = [
   {
      title: "سود",
      icon: <IconMoney />,
      field: "totalProfitsDays",
      lastField: "lastTotalProfitsDays",
      lastChartField: "lastTotalProfit",
      chartField: "totalProfit",
      color: "#6200ff",
   },
   {
      title: "فروش",
      icon: <IconReceipt />,
      field: "totalPaymentsDays",
      lastField: "lastTotalPaymentsDays",
      lastChartField: "lastTotalPayment",
      chartField: "totalPayment",
      color: "#04ff00",
   },
   {
      title: "سفارشات",
      icon: <IconReceiptFront />,
      field: "totalOrdersDays",
      lastField: "lastTotalOrdersDays",
      lastChartField: "lastTotalOrders",
      chartField: "totalOrders",
      color: "#00e5ff",
   },
   {
      title: "کاربران",
      icon: <IconThreeUsers />,
      field: "totalUsersDays",
      lastField: "lastTotalUsersDays",
      lastChartField: "lastTotalUsers",
      chartField: "totalUsers",
      color: "rgb(90 100 255 / 100%)",
   },
   {
      title: "رضایت کاربران",
      icon: <IconStarWithSpeed />,
      field: "totalAverageScoreDays",
      lastField: "lastTotalAverageScoreDays",
      lastChartField: "lastAverageScore",
      chartField: "averageScore",
      color: "#eeff00",
   },
];
export function DashboardContext({ children }) {
   const { isError, isLoading, data } = useDashboard();
   return (
      <DashContext.Provider value={{ isError, isLoading, data, reportsData }}>
         {children}
      </DashContext.Provider>
   );
}

export function useDataDashboard() {
   const context = useContext(DashContext);
   if (context === undefined)
      throw new Error("DashboardContext was used outside of DashboardProvider");
   return context;
}
