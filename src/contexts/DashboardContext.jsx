import { createContext, useContext, useMemo } from "react";
import { useDashboard } from "../features/dashboard/useDashboard";
import {
   IconMoney,
   IconReceipt,
   IconStarWithSpeed,
   IconThreeUsers,
   IconReceiptFront,
   IconWalletMoney,
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
      color: "#2f00ff",
   },
   {
      title: "فروش",
      icon: <IconWalletMoney />,
      field: "totalPaymentsDays",
      lastField: "lastTotalPaymentsDays",
      lastChartField: "lastTotalPayment",
      chartField: "totalPayment",
      color: "#6200ff",
   },
   {
      title: "سفارشات",
      icon: <IconReceipt />,
      field: "totalOrdersDays",
      lastField: "lastTotalOrdersDays",
      lastChartField: "lastTotalOrders",
      chartField: "totalOrders",
      color: "#ff0080",
   },
   {
      title: "کاربران",
      icon: <IconThreeUsers />,
      field: "totalUsersDays",
      lastField: "lastTotalUsersDays",
      lastChartField: "lastTotalUsers",
      chartField: "totalUsers",
      color: "#e100ff",
   },
   {
      title: "رضایت کاربران",
      icon: <IconStarWithSpeed />,
      field: "totalAverageScoreDays",
      lastField: "lastTotalAverageScoreDays",
      lastChartField: "lastAverageScore",
      chartField: "averageScore",
      color: "#0fff13",
   },
];

export function DashboardContext({ children }) {
   const { isError, isLoading, data } = useDashboard();

   const value = useMemo(() => {
      return {
         isError,
         isLoading,
         data,
         reportsData,
      };
   }, [isLoading, data,isError]);

   return <DashContext.Provider value={value}>{children}</DashContext.Provider>;
}

export function useDataDashboard() {
   const context = useContext(DashContext);
   if (context === undefined)
      throw new Error("DashboardContext was used outside of DashboardProvider");
   return context;
}
