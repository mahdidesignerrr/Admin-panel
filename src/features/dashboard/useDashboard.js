import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getDashboard } from "../../services/apiInfos";
import useAdminToken from "../../hooks/getAdminToken";

export function useDashboard() {
  const [searchParams] = useSearchParams();
  const { adminToken } = useAdminToken();

  const numDays = !searchParams.get("last")
    ? 1
    : Number(searchParams.get("last"));

  const { isError, isLoading, data } = useQuery({
    queryKey: ["admin", `last-${numDays}`],
    queryFn: () => getDashboard(adminToken,numDays)
  });

  return { isError, isLoading, data };
}
