"use client";
import Button from "@/components/UI/button/button";
import { Divider } from "@/components/UI/divider/divider";
import CarInformation from "@/components/widgets/car-information/card-information";
import SuccessMessage from "@/components/widgets/success-message/success-message";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function SuccessInsurancePage({}: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Divider title="مشخصات بیمه نامه" />
        <SuccessMessage />
        <CarInformation />
      </div>
      <div className="flex justify-end pb-3 px-[10px]">
        <Link href="/">
          <Button color="secondary">
            <span>بازگشت</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
