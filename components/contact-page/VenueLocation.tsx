import Image from "next/image";
import Link from "next/link";

export default function VenueLocation() {
  const locationLink =
    "https://maps.app.goo.gl/Bmh1TLEwCFC3Sdpq6";

  const registrationLink = "https://forms.gle/xBKVaHc9b7UWS33C7";

  return (
    <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
      {/* Venue + Map QR */}
      <div className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-7">
        <h3 className="text-[24px] font-extrabold leading-tight text-black sm:text-[30px]">
          Conference Venue
        </h3>

        <p className="mt-3 max-w-[680px] text-[14px] font-semibold leading-[1.7] text-[#5f5f5f] sm:text-[15px]">
          VELS Medical College & Hospital, 12/123, Velan Nagar, Periyapalayam
          Road, Manjankaranai, Tiruvallur – 601102, Tamil Nadu, India.
        </p>

        {/* Map QR */}
        <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <div className="flex h-[180px] w-[180px] items-center justify-center rounded-[18px] border border-[#dfe2f4] bg-white p-4 shadow-[0_10px_30px_rgba(43,47,145,0.10)]">
            <Image
              src="/images/qr/location-qr.png"
              alt="Google Maps Location QR Code"
              width={150}
              height={150}
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <h4 className="text-[18px] font-extrabold text-[#2b2f91]">
              Scan for Location
            </h4>

            <p className="mt-2 max-w-[330px] text-[13px] font-medium leading-[1.6] text-[#666666]">
              Scan this QR code to open the conference venue location directly
              in Google Maps.
            </p>

            <Link
              href={locationLink}
              target="_blank"
              className="mt-4 inline-flex rounded-[8px] bg-[#2b2f91] px-5 py-3 text-[13px] font-extrabold text-white transition-all duration-300 hover:bg-[#1f2376]"
            >
              Open Location
            </Link>
          </div>
        </div>
      </div>

      {/* Registration QR */}
      <div className="rounded-[24px] border border-[#e2e5f5] bg-white/95 p-5 text-center shadow-[0_16px_42px_rgba(43,47,145,0.10)] backdrop-blur-sm sm:p-7">
        <h3 className="text-[24px] font-extrabold text-black sm:text-[30px]">
          Registration QR
        </h3>

        <p className="mx-auto mt-3 max-w-[420px] text-[14px] font-medium leading-[1.7] text-[#666666]">
          Scan this QR code to open the MED-AI Summit 2026 registration form.
        </p>

        <div className="mx-auto mt-5 flex h-[230px] w-[230px] items-center justify-center rounded-[18px] border border-[#dfe2f4] bg-white p-4 shadow-[0_10px_30px_rgba(43,47,145,0.10)]">
          <Image
            src="/images/qr/registration-qr.png"
            alt="Registration QR Code"
            width={200}
            height={200}
            className="h-full w-full object-contain"
          />
        </div>

        <Link
          href={registrationLink}
          target="_blank"
          className="mt-5 inline-flex rounded-[8px] bg-[#2b2f91] px-5 py-3 text-[13px] font-extrabold text-white transition-all duration-300 hover:bg-[#1f2376]"
        >
          Open Registration Form
        </Link>
      </div>
    </div>
  );
}