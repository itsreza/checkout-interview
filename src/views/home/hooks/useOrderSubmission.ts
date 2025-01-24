import { useRouter } from "next/navigation";
import { useSubmitOrder } from "../queries";
import { successOrderRoute } from "../constants";

const useOrderSubmission = () => {
  const { push } = useRouter();

  const { mutate: submitOrder, isPending: isLoadingSubmitOrder } =
    useSubmitOrder(
      () => push(successOrderRoute),
      () => push(`?retry=open`, { scroll: false })
    );

  return { submitOrder, isLoadingSubmitOrder };
};

export { useOrderSubmission };
