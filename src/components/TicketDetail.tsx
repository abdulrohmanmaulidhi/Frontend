import React from "react";
import Button from "./Button";

interface TicketDetailProps {
  fullName: string;
  phoneNumber: string;
  email: string;
  tourId: string;
  tourPackage: string;
  expiryDate: string;
  paymentStatus: string;
  departureDate: string;
  returnDate: string;
  passengerCount: number;
  onDownloadClick?: () => void;
}

function Header() {
  return (
    <div className="bg-[#b49de4] h-[109px] relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[109px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter'] font-extrabold leading-[normal] not-italic relative shrink-0 text-[40px] max-md:text-[28px] text-center text-nowrap text-white whitespace-pre">
            Detail Tiket
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
        <p className="font-['Inter'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[30px] max-md:text-[20px] text-nowrap whitespace-pre">
          {label}
        </p>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
            <p className="basis-0 font-['Inter'] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[24px] max-md:text-[18px]">
              {value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRowCompact({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[13px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
        <p className="font-['Inter'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[30px] max-md:text-[20px] text-nowrap whitespace-pre">
          {label}
        </p>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
            <p className="basis-0 font-['Inter'] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[24px] max-md:text-[18px]">
              {value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeftColumn({ fullName, phoneNumber, email, tourId }: { fullName: string; phoneNumber: string; email: string; tourId: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-[359px] max-md:w-full">
      <InfoRow label="Nama Lengkap" value={fullName} />
      <InfoRow label="Nomor Telepon" value={phoneNumber} />
      <InfoRow label="Alamat Email" value={email} />
      <InfoRow label="Tour ID" value={tourId} />
    </div>
  );
}

function RightColumn({ tourPackage, expiryDate, paymentStatus }: { tourPackage: string; expiryDate: string; paymentStatus: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start justify-end relative shrink-0 w-[376px] max-md:w-full">
      <InfoRowCompact label="Paket Tour" value={tourPackage} />
      <InfoRowCompact label="Tanggal Habis Berlaku" value={expiryDate} />
      <InfoRowCompact label="Status Pembayaran" value={paymentStatus} />
    </div>
  );
}

function InfoSection({ fullName, phoneNumber, email, tourId, tourPackage, expiryDate, paymentStatus }: { 
  fullName: string; 
  phoneNumber: string; 
  email: string; 
  tourId: string; 
  tourPackage: string; 
  expiryDate: string; 
  paymentStatus: string;
}) {
  return (
    <div className="content-stretch flex gap-[56px] max-md:gap-[30px] items-start px-[42px] max-md:px-[20px] py-0 relative shrink-0 w-[833px] max-md:w-full max-md:flex-col">
      <LeftColumn fullName={fullName} phoneNumber={phoneNumber} email={email} tourId={tourId} />
      <RightColumn tourPackage={tourPackage} expiryDate={expiryDate} paymentStatus={paymentStatus} />
    </div>
  );
}

function DateBox({ label, date }: { label: string; date: string }) {
  return (
    <div className="content-stretch flex flex-col h-[77px] items-center justify-center pb-[10px] pt-0 px-0 relative shrink-0 w-[96px] max-md:w-auto">
      <div className="content-stretch flex items-center justify-center mb-[-10px] p-[10px] relative shrink-0">
        <p className="font-['Inter'] font-medium leading-[normal] not-italic relative shrink-0 text-[#444444] text-[30px] max-md:text-[20px] text-nowrap whitespace-pre">
          {label}
        </p>
      </div>
      <div className="mb-[-10px] relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
            <p className="font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[#444444] text-[24px] max-md:text-[18px] text-nowrap whitespace-pre">
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div className="content-stretch flex h-full items-center p-[10px] relative shrink-0 w-[20px] max-md:w-full max-md:h-[20px]">
      <div className="flex h-[116px] max-md:h-0 max-md:w-[116px] items-center justify-center relative shrink-0 w-0">
        <div className="flex-none rotate-[90deg] max-md:rotate-0">
          <div className="h-0 max-md:h-0 relative w-[116px] max-md:w-[116px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 116 1">
                <line stroke="#FFB4C4" x2="116" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PassengerCount({ count }: { count: number }) {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="relative shrink-0 size-[35px] max-md:size-[28px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
          <g>
            <path 
              clipRule="evenodd" 
              d="M17.5 8.75C15.4289 8.75 13.75 10.4289 13.75 12.5C13.75 14.5711 15.4289 16.25 17.5 16.25C19.5711 16.25 21.25 14.5711 21.25 12.5C21.25 10.4289 19.5711 8.75 17.5 8.75ZM11.25 12.5C11.25 9.04822 14.0482 6.25 17.5 6.25C20.9518 6.25 23.75 9.04822 23.75 12.5C23.75 15.9518 20.9518 18.75 17.5 18.75C14.0482 18.75 11.25 15.9518 11.25 12.5ZM8.75 27.5C8.75 23.2721 12.2721 19.75 16.5 19.75H18.5C22.7279 19.75 26.25 23.2721 26.25 27.5V28.75H8.75V27.5Z" 
              fill="#444444" 
              fillRule="evenodd" 
            />
          </g>
        </svg>
      </div>
      <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative shrink-0 w-[35px] max-md:w-auto">
        <p className="font-['Inter'] font-normal leading-[normal] not-italic relative shrink-0 text-[#444444] text-[30px] max-md:text-[24px] w-full">
          {count}
        </p>
      </div>
    </div>
  );
}

function TravelInfo({ departureDate, returnDate, passengerCount }: { departureDate: string; returnDate: string; passengerCount: number }) {
  return (
    <div className="bg-white content-stretch flex gap-[49px] max-md:gap-[20px] h-[116px] max-md:h-auto items-center justify-center pl-[70px] pr-[77px] max-md:px-[20px] py-0 max-md:py-[20px] relative rounded-[20px] shrink-0 w-[621px] max-md:w-full max-md:flex-col">
      <div aria-hidden="true" className="absolute border border-[#ffb4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <DateBox label="Berangkat" date={departureDate} />
      <Divider />
      <DateBox label="Pulang" date={returnDate} />
      <Divider />
      <PassengerCount count={passengerCount} />
    </div>
  );
}

function BottomSection({ departureDate, returnDate, passengerCount, onDownloadClick }: {
  departureDate: string;
  returnDate: string;
  passengerCount: number;
  onDownloadClick?: () => void;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[62px] max-md:gap-[30px] items-center justify-center pb-0 pt-[65px] max-md:pt-[30px] px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#ffb4c4] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <TravelInfo departureDate={departureDate} returnDate={returnDate} passengerCount={passengerCount} />
      <Button
        variant="pink-light"
        showArrows={false}
        onClick={onDownloadClick}
        className="!bg-[#ffb4c4] hover:!bg-[#ff9eb4] !h-[80px] max-md:!h-[60px] !w-[302px] max-md:!w-full !rounded-[10px] !p-[10px] !gap-[10px] !min-w-0"
      >
        <span className="font-['Inter'] font-semibold text-[30px] max-md:text-[20px]">
          Unduh Tiket
        </span>
      </Button>
    </div>
  );
}

export default function TicketDetail({
  fullName,
  phoneNumber,
  email,
  tourId,
  tourPackage,
  expiryDate,
  paymentStatus,
  departureDate,
  returnDate,
  passengerCount,
  onDownloadClick,
}: TicketDetailProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[26px] items-start relative rounded-[20px] size-full shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)]">
      <Header />
      <div className="relative shrink-0 w-full">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[62px] max-md:gap-[30px] items-center pb-[41px] max-md:pb-[20px] pl-[52px] pr-[64px] max-md:px-[20px] pt-0 relative w-full">
            <InfoSection
              fullName={fullName}
              phoneNumber={phoneNumber}
              email={email}
              tourId={tourId}
              tourPackage={tourPackage}
              expiryDate={expiryDate}
              paymentStatus={paymentStatus}
            />
            <BottomSection
              departureDate={departureDate}
              returnDate={returnDate}
              passengerCount={passengerCount}
              onDownloadClick={onDownloadClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
