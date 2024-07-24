import { useQuery } from "@tanstack/react-query";
import { getStoreInfo } from "../services/apiAuth";

export default function useStoreInfo() {
  const { isLoading, data } = useQuery({
    queryKey: ["storeInfo"],
    queryFn: getStoreInfo,
  });

  return { isLoading, data }
}
