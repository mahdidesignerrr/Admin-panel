import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../services/apiAuth";

export function useAdmin(token) {
  const { isLoading, data: admin } = useQuery({
    queryKey: ["admin", token],
    queryFn: () => getMe(token)
  });

  return { isLoading, admin };
}
