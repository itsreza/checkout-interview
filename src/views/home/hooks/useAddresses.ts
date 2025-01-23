import { useState, useEffect } from "react";
import { useGetAddresses } from "../queries";
import { AddressItemTypes } from "../types";

const useAddresses = () => {
  const [addressList, setAddressList] = useState<Array<AddressItemTypes>>([]);
  const { data: addresses, isLoading, refetch } = useGetAddresses();

  useEffect(() => {
    if (addresses) {
      setAddressList(addresses);
    }
  }, [addresses]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const removeAddress = (addressId: string) => {
    const removed = addressList.filter((address) => address.id !== addressId);
    setAddressList(removed);
  };

  const getSelectedAddressById = (addressId?: string) =>
    addressList.find((address) => address.id === addressId);

  return { addressList, isLoading, removeAddress, getSelectedAddressById };
};

export { useAddresses };
