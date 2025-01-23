import { useRouter } from "next/navigation";
import { useSubmitOrder } from "../queries";
import { successOrderRoute } from "../constants";

const useOrderSubmission = (onRetry: () => void) => {
  const { push } = useRouter();
  const { mutate: submitOrder, isPending: isLoadingSubmitOrder } =
    useSubmitOrder(() => {
      push(successOrderRoute);
    }, onRetry);

  return { submitOrder, isLoadingSubmitOrder };
};

export { useOrderSubmission };
