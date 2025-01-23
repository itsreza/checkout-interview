import Home from "@/views/home/home";

export default function Application() {
  return <Home />;
}

// Double Action
{
  /* <div className="flex gap-[10px]">
            <Button fullWidth color="secondary">
              <span>تایید</span>
            </Button>
            <Button fullWidth variant="outlined" color="secondary">
              <span>بازگشت</span>
            </Button>
          </div> */
}

// Address Component
{
  /* <BottomSheetNew
        title="آدرس‌های من"
        onClose={() => setIsOpen(false)}
        isOpen={isOpen}
        actions={
          <Button fullWidth color="secondary">
            <span>انتخاب</span>
          </Button>
        }
      >
        <RadioGroup
          name="exampleGroup"
          options={mockAddress?.map((address) => ({
            id: address?.id,
            value: address?.id,
            title: address?.name,
            description: address?.details,
          }))}
          selectedValue={selectedValue}
          onChange={handleRadioChange}
        />
      </BottomSheetNew> */
}
