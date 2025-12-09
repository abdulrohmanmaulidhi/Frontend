import React from "react";

interface WriteReviewInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">
        Write your review
      </p>
    </div>
  );
}

function Frame({ value, onChange, placeholder }: { value: string; onChange: (value: string) => void; placeholder: string }) {
  return (
    <div className="bg-white h-[354px] relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#ffb4c4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex h-[354px] items-start p-[20px] relative w-full">
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic text-[#ababab] text-[16px] bg-transparent outline-none border-none w-full h-full resize-none placeholder:text-[#ababab]"
          />
        </div>
      </div>
    </div>
  );
}

export default function WriteReviewInput({ 
  value, 
  onChange, 
  placeholder = "Enter your review" 
}: WriteReviewInputProps) {
  return (
    <div className="bg-white relative rounded-[20px] size-full">
      <div aria-hidden="true" className="absolute border border-[#ffb4c4] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start px-[30px] py-[15px] relative size-full">
          <Frame1 />
          <Frame value={value} onChange={onChange} placeholder={placeholder} />
        </div>
      </div>
    </div>
  );
}
