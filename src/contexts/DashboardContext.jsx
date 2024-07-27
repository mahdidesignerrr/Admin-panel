import { createContext, useContext } from "react";
import { useDashboard } from "../features/dashboard/useDashboard";

const DashContext = createContext()

export function DashboardContext({children}) {

  const {isError,isLoading, data} = useDashboard()

  return (
    <DashContext.Provider value={{isError,isLoading, data}}>
      {children}
    </DashContext.Provider>
  )
}

export function useDataDashboard() {
  const context = useContext(DashContext);
  if (context === undefined)
    throw new Error("DashboardContext was used outside of DashboardProvider");
  return context;
}
