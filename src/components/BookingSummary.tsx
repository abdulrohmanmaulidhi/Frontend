import React from "react";
import lokasiIcon from "../assets/icon/map-pin.png";
import clockIcon from "../assets/icon/clock.png";
import planeIcon from "../assets/icon/plane.png";

interface BookingSummaryProps {
  fullName: string;
  birthDate: string;
  nationality: string;
  phoneNumber: string;
  email: string;
  passportNumber: string;
  issuingCountry: string;
  expiryDate: string;
  tourName: string;
  tourId: string;
  departureDate: string;
  departureCity: string;
  duration: string;
  airline: string;
  roomType: string;
}

function Header() {
  return (
    <div className="bg-[#b49de4] h-[109px] relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[109px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[40px] text-center text-nowrap text-white whitespace-pre">
            Ringkasan Reservasi Anda
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Bold',sans-serif] font-bold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#444444] text-[30px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

function FieldGroup({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[359px]">
      <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[30px] text-nowrap whitespace-pre">
          {label}
        </p>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
            <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[24px]">
              {value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function WideFieldGroup({ label, value }: { label: string; value: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[370px]">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
            <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#444444] text-[30px]">
              {label}
            </p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
            <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[24px]">
              {value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LokasiIcon() {
  return (
    <div className="h-[50px] relative shrink-0 w-[34px]" data-name="Lokasi 1">
      <img src={lokasiIcon} alt="lokasi" className="block size-full object-contain" />
    </div>
  );
}

function ClockIcon() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Clock 1">
      <div className="h-[42px] relative shrink-0 w-[46.5px]" data-name="Vector">
        <img src={clockIcon} alt="clock" className="block size-full object-contain" />
      </div>
    </div>
  );
}

function PlaneIcon() {
  return (
    <div className="content-stretch flex flex-col h-[34.737px] items-start px-0 py-[4.421px] relative shrink-0 w-full" data-name="Plane 1">
      <div className="h-[30.316px] relative shrink-0 w-[48px]" data-name="Vector">
        <img src={planeIcon} alt="plane" className="block size-full object-contain" />
      </div>
    </div>
  );
}

function IconField({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <div className="content-stretch flex items-center p-[10px] relative shrink-0">
            {icon}
          </div>
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[24px]">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function IconFieldWithContainer({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[68.222px]">
            {icon}
          </div>
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[24px]">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function IconFieldPlane({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[68px]">
            {icon}
          </div>
          <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[24px]">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BookingSummary({
  fullName,
  birthDate,
  nationality,
  phoneNumber,
  email,
  passportNumber,
  issuingCountry,
  expiryDate,
  tourName,
  tourId,
  departureDate,
  departureCity,
  duration,
  airline,
  roomType,
}: BookingSummaryProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[25px] items-center relative rounded-[20px] size-full" data-name="Ringkasan Reservasi Component">
      <div aria-hidden="true" className="absolute border-2 border-[#ffb4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Header />
      <div className="h-auto relative shrink-0 w-full">
        <div className="size-full">
          <div className="content-stretch flex flex-col h-full items-start px-[67px] py-[20px] relative w-full">
            <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1098px]">
                <SectionTitle title="Identitas Pemesanan (Peserta Dewasa, Single)" />
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <FieldGroup label="Nama Lengkap" value={fullName} />
                <FieldGroup label="Tanggal Lahir" value={birthDate} />
                <FieldGroup label="Kewarganegaraan" value={nationality} />
              </div>
              <div className="content-stretch flex items-center pb-[22px] pt-0 px-0 relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#ffb4c4] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
                <FieldGroup label="Nomor Telepon" value={phoneNumber} />
                <FieldGroup label="Alamat Email" value={email} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1098px]">
                <SectionTitle title="Nomor Identitas" />
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <FieldGroup label="Nomor Paspor" value={passportNumber} />
                <FieldGroup label="Negara Penerbit" value={issuingCountry} />
              </div>
              <div className="content-stretch flex items-center pb-[22px] pt-0 px-0 relative shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#ffb4c4] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
                <FieldGroup label="Tanggal Habis Berlaku" value={expiryDate} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1098px]">
                <SectionTitle title="Detail Pesanan" />
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col items-start relative shrink-0 w-[359px]">
                  <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[30px] text-nowrap whitespace-pre">
                      {tourName}
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <FieldGroup label="Tour ID" value={tourId} />
                <WideFieldGroup label="Tanggal Keberangkatan" value={departureDate} />
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0 w-[359px]">
                  <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
                    <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[30px] text-nowrap whitespace-pre">
                      Depart
                    </p>
                  </div>
                  <IconField icon={<LokasiIcon />} value={departureCity} />
                  <IconFieldWithContainer icon={<ClockIcon />} value={duration} />
                  <IconFieldPlane icon={<PlaneIcon />} value={airline} />
                </div>
                <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-[370px]">
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
                        <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#444444] text-[30px]">
                          Kamar
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="relative shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
                        <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#a0a0a0] text-[24px]">
                          {roomType}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
