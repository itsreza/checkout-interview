import { axiosInstance } from "@/utils/fetcher/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

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
    queryKey: ["ADDRESSES"],
    queryFn: fetchAddresses,
    enabled: false,
  });
};

const useSubmitOrder = (onSuccess: () => void, onError: () => void) => {
  return useMutation({
    mutationFn: submitOrder,
    onSuccess,
    onError,
  });
};

export { useGetAddresses, useSubmitOrder };
