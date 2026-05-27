import Image from "next/image";

export default function BankDetails() {
  const bankDetails = [
    ["Beneficiary Name", "VELS Medical College and Hospital"],
    ["Bank Name", "AXIS Bank Ltd"],
    ["Branch Address", "Madipakkam, Chennai"],
    ["Account Number", "921010041493572"],
    ["Account Type", "Savings"],
    ["IFSC Code", "UTIB0000083"],
    ["MICR Code", "600211007"],
    ["SWIFT Code", "AXISINBB234"],
  ];

  return (
    <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-7">
        <h3 className="text-[24px] font-extrabold leading-tight text-black sm:text-[30px]">
          Bank Account Details
        </h3>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {bankDetails.map(([label, value]) => (
            <div
              key={label}
              className="rounded-[14px] border border-[#eef0fa] bg-[#fafbff] px-4 py-3"
            >
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#2b2f91]">
                {label}
              </p>
              <p className="mt-1 break-words text-[13px] font-bold leading-[1.5] text-[#444444] sm:text-[14px]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 text-center shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-7">
        <h3 className="text-[22px] font-extrabold text-black">
          Payment QR Code
        </h3>

        <div className="mx-auto mt-5 flex h-[230px] w-[230px] items-center justify-center rounded-[18px] border border-[#dfe2f4] bg-white p-4 shadow-[0_10px_30px_rgba(43,47,145,0.10)]">
          <Image
            src="/images/qr/payment-qr.png"
            alt="Payment QR Code"
            width={200}
            height={200}
            className="h-full w-full object-contain"
          />
        </div>

        <p className="mx-auto mt-4 max-w-[260px] text-[13px] font-semibold leading-[1.6] text-[#666666]">
          Scan this QR code to complete your payment securely.
        </p>
      </div>
    </div>
  );
}