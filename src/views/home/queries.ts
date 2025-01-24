import { axiosInstance } from "@/utils/fetcher/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GET_ADDRESS_QUERY_KEY, SUBMIT_ORDER_MUTATION_KEY } from "./constants";

const fetchAddresses = async () => {
  const response = await axiosInstance.get("/my-addresses/", {
    withCredentials: true,
  });
  return response.data;
};

const submitOrder = async (orderDetail: object) => {
  const response = await axiosInstance.post("/order/completion/", orderDetail);
  return response.data;
};

const useGetAddresses = () => {
  return useQuery({
    queryKey: [GET_ADDRESS_QUERY_KEY],
    queryFn: fetchAddresses,
    enabled: false,
  });
};

const useSubmitOrder = (onSuccess: () => void, onError: () => void) => {
  return useMutation({
    mutationKey: [SUBMIT_ORDER_MUTATION_KEY],
    mutationFn: submitOrder,
    onSuccess,
    onError,
  });
};

export { useGetAddresses, useSubmitOrder };
