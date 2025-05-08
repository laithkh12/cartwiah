import apiClient from "../utils/api-client";
import { useQuery } from "@tanstack/react-query";

const useData = (endpoint, customConfig = {}, queryKey, staleTime = 300_00) => {
  const fetchFunction = () =>
    apiClient.get(endpoint, customConfig).then((res) => res.data);
  return useQuery({
    queryKey,
    queryFn: fetchFunction,
    staleTime: staleTime,
  });
};

export default useData;
