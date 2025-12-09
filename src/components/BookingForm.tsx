import React, { useEffect, useState } from "react";
import Button from "./Button";
import calendarIcon from "../assets/icon/calendar.png";

interface BookingFormProps {
  onSubmit?: (data: BookingFormData) => void;
}

export interface BookingFormData {
  name: string;
  birthDate: string;
  email: string;
  phone: string;
  departureDate: string;
  bookingCount: number;
  passportNumber: string;
  passportExpiry: string;
  passportCountry: string;
  passportFile: File | null;
}

function Frame54() {
  return (
    <div className="bg-[#b49de4] h-[109px] relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[109px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[40px] max-md:text-[28px] text-center text-nowrap max-md:whitespace-normal text-white whitespace-pre">
            Pengisian Form Booking
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame({ label }: { label: string }) {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[30px] max-md:text-[20px] text-nowrap whitespace-pre">
        {label}
      </p>
    </div>
  );
}

function TextInput({ placeholder, value, onChange, ariaLabel }: { placeholder: string; value: string; onChange: (value: string) => void; ariaLabel?: string }) {
  return (
    <div className="bg-white h-[64px] relative rounded-[15px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[#ffb4c4] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[64px] items-center p-[20px] relative w-full">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            aria-label={ariaLabel || placeholder}
            className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow h-full leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#444444] placeholder:text-[#ababab] text-[20px] max-md:text-[16px] bg-transparent border-none outline-none"
          />
        </div>
      </div>
    </div>
  );
}

function FormField({ label, placeholder, value, onChange }: { label: string; placeholder: string; value: string; onChange: (value: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[495px] max-md:w-full">
      <Frame label={label} />
      <TextInput placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="calendar">
      <img src={calendarIcon} alt="calendar" className="block size-full object-contain pointer-events-none" />
    </div>
  );
}

function DateInput({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (value: string) => void }) {
  const [internal, setInternal] = useState("");

  const toISO = (d: Date) => {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  useEffect(() => {
    if (!value) {
      setInternal("");
      return;
    }
    const isoMatch = /^\d{4}-\d{2}-\d{2}$/.test(value);
    if (isoMatch) {
      setInternal(value);
      return;
    }
    const parsed = Date.parse(value);
    if (!isNaN(parsed)) {
      setInternal(toISO(new Date(parsed)));
      return;
    }
    setInternal("");
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternal(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className="bg-white h-[64px] relative rounded-[15px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[#ffb4c4] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[20px] pr-0 py-0 relative w-full h-full">
          <input
            type="date"
            value={internal}
            onChange={handleChange}
            placeholder={placeholder}
            aria-label={placeholder}
            className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#444444] placeholder:text-[#ababab] text-[20px] max-md:text-[16px] bg-transparent border-none outline-none flex-1 h-full pr-2"
          />
          <div className="content-stretch flex h-[64px] items-center pl-[23px] pr-[25px] py-[10px] relative shrink-0 pointer-events-none">
            <div aria-hidden="true" className="absolute border-[#ffb4c4] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

function DateField({ label, placeholder, value, onChange }: { label: string; placeholder: string; value: string; onChange: (value: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[495px] max-md:w-full">
      <Frame label={label} />
      <DateInput placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}

function MinusCircle() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="minus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="minus-circle">
          <path d="M10 15H20M27.5 15C27.5 21.9036 21.9036 27.5 15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15Z" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function PlusCircle() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="plus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="plus-circle">
          <path d="M15 10V20M10 15H20M27.5 15C27.5 21.9036 21.9036 27.5 15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15Z" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function CounterInput({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return (
    <div className="bg-white relative rounded-[15px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[#ffb4c4] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[8px] pr-[18px] py-0 relative w-full">
          <div className="content-stretch flex items-center mr-[-18px] p-[10px] relative shrink-0 w-[357px] flex-1">
            <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#ababab] text-[20px] max-md:text-[16px]">
              Kamar
            </p>
          </div>
          <div
            onClick={() => onChange(Math.max(1, value - 1))}
            className="content-stretch flex h-[64px] items-center mr-[-18px] pl-[23px] pr-[25px] py-[10px] relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
            aria-hidden
          >
            <MinusCircle />
          </div>
          <div className="content-stretch flex items-center justify-center mr-[-18px] p-[10px] relative shrink-0">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#444444] text-[20px] max-md:text-[16px] text-nowrap whitespace-pre">
              {value}
            </p>
          </div>
          <div
            onClick={() => onChange(value + 1)}
            className="content-stretch flex h-[64px] items-center mr-[-18px] pl-[23px] pr-[25px] py-[10px] relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity"
            aria-hidden
          >
            <PlusCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

function CounterField({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[495px] max-md:w-full">
      <Frame label={label} />
      <CounterInput value={value} onChange={onChange} />
    </div>
  );
}

function Upload() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="upload">
          <path d="M15 4V20M8 11L15 4L22 11M4 24H26" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FileUploadInput({ fileName, onUpload }: { fileName: string; onUpload: (file: File | null) => void }) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onUpload(file);
  };

  return (
    <div className="bg-white relative rounded-[15px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[#ffb4c4] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[8px] pr-0 py-0 relative w-full">
          <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center p-[10px] relative w-full">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#ababab] text-[20px] max-md:text-[16px] text-nowrap whitespace-pre truncate">
                  {fileName || "Upload paspor anda"}
                </p>
              </div>
            </div>
          </div>
          <label className="content-stretch flex h-[64px] items-center pl-[23px] pr-[25px] py-[10px] relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity">
            <div aria-hidden="true" className="absolute border-[#ffb4c4] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
            <Upload />
            <input
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileChange}
              className="hidden"
              aria-label="Upload paspor"
            />
          </label>
        </div>
      </div>
    </div>
  );
}

function FileUploadField({ label, fileName, onUpload }: { label: string; fileName: string; onUpload: (file: File | null) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[495px] max-md:w-full">
      <Frame label={label} />
      <FileUploadInput fileName={fileName} onUpload={onUpload} />
    </div>
  );
}

export default function BookingForm({ onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    birthDate: "",
    email: "",
    phone: "",
    departureDate: "",
    bookingCount: 1,
    passportNumber: "",
    passportExpiry: "",
    passportCountry: "",
    passportFile: null,
  });

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-white content-stretch flex flex-col gap-[25px] items-center relative rounded-[20px] size-full">
      <div aria-hidden="true" className="absolute border border-[#ffb4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Frame54 />

      <div className="relative shrink-0 w-full">
        <div className="size-full">
          <div className="content-stretch flex flex-col gap-[46px] items-start px-[67px] max-md:px-[20px] py-[20px] relative w-full">
            <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[108px] max-md:gap-[20px] items-center relative shrink-0 w-full max-md:flex-col">
                <FormField label="Nama*" placeholder="Masukkan nama anda" value={formData.name} onChange={(value) => setFormData({ ...formData, name: value })} />
                <DateField label="Tanggal Lahir*" placeholder="mm/dd/yyyy" value={formData.birthDate} onChange={(value) => setFormData({ ...formData, birthDate: value })} />
              </div>

              <div className="content-stretch flex gap-[108px] max-md:gap-[20px] items-center relative shrink-0 w-full max-md:flex-col">
                <FormField label="Email*" placeholder="Masukkan email anda" value={formData.email} onChange={(value) => setFormData({ ...formData, email: value })} />
                <FormField label="Nomor Telepon*" placeholder="Masukkan nomor telepon anda" value={formData.phone} onChange={(value) => setFormData({ ...formData, phone: value })} />
              </div>

              <div className="content-stretch flex gap-[108px] max-md:gap-[20px] items-center relative shrink-0 w-full max-md:flex-col">
                <DateField label="Tanggal Keberangkatan*" placeholder="mm/dd/yyyy" value={formData.departureDate} onChange={(value) => setFormData({ ...formData, departureDate: value })} />
                <CounterField label="Jumlah Booking*" value={formData.bookingCount} onChange={(value) => setFormData({ ...formData, bookingCount: value })} />
              </div>
            </div>

            <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
              <div className="relative shrink-0 w-full">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
                    <p className="basis-0 font-['Inter:Medium',sans-serif] font-medium grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#444444] text-[20px] max-md:text-[16px]">
                      {`Informasi Identitas `}
                      <br aria-hidden="true" />
                      Pastikan masa berlaku paspor setidaknya 6 bulan dari tanggal keberangkatan
                    </p>
                  </div>
                </div>
              </div>

              <div className="content-stretch flex flex-col gap-[46px] items-center relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                  <div className="content-stretch flex gap-[108px] max-md:gap-[20px] items-center relative shrink-0 w-full max-md:flex-col">
                    <FormField label="No Paspor*" placeholder="Masukkan nomor paspor" value={formData.passportNumber} onChange={(value) => setFormData({ ...formData, passportNumber: value })} />
                    <DateField label="Tanggal Kadaluarsa*" placeholder="mm/dd/yyyy" value={formData.passportExpiry} onChange={(value) => setFormData({ ...formData, passportExpiry: value })} />
                  </div>

                  <div className="content-stretch flex gap-[108px] max-md:gap-[20px] items-center relative shrink-0 w-full max-md:flex-col">
                    <FormField label="Negara Paspor*" placeholder="Masukkan negara paspor" value={formData.passportCountry} onChange={(value) => setFormData({ ...formData, passportCountry: value })} />
                    <FileUploadField label="Upload Paspor*" fileName={formData.passportFile?.name || ""} onUpload={(file) => setFormData({ ...formData, passportFile: file })} />
                  </div>
                </div>

                <div onClick={handleSubmit}>
                  <Button variant="pink-light" showArrows={false} className="!h-[80px] !w-[275px] !rounded-[20px] !text-[24px] max-md:!text-[18px]">
                    Booking Sekarang
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
