import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getDashboard } from "../../services/apiInfos";
import {useAdminToken} from "../../hooks/getAdminToken";

export function useDashboard() {
  const [searchParams] = useSearchParams();
  const { adminToken } = useAdminToken();
  const navigate = useNavigate()
  const numDays = !searchParams.get("last")
    ? 7
    : Number(searchParams.get("last"));

  const { isError, isLoading, data } = useQuery({
    queryKey: ["admin", `last-${numDays}`],
    queryFn: () => getDashboard(adminToken,numDays)
  });
  if(isError) navigate("/notInternet")

  return { isError, isLoading, data };
}
