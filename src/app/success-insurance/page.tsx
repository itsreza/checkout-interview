"use client";
import Button from "@/components/UI/button/button";
import { Divider } from "@/components/UI/divider/divider";
import { CarInformation, SuccessMessage } from "@/components/widgets";
import Link from "next/link";
import React from "react";

export default function SuccessInsurancePage() {
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
