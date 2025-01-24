import { Divider } from "@/components/UI";
import { Button } from "@/components/UI";
import { CarInformation, SuccessMessage } from "@/components/widgets";
import Link from "next/link";

export default function SuccessInsurancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Divider title="مشخصات بیمه نامه" />
        <SuccessMessage />
        <CarInformation />
      </div>
      <Link className="flex justify-end pb-3 px-[10px]" href="/">
        <Button color="secondary">
          <span>بازگشت</span>
        </Button>
      </Link>
    </div>
  );
}
