import React from "react";
import uploadIcon from "../assets/icon/arrow.png";
import StarRating from "./StarRating";

interface UploadAndRateInputProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  onUploadClick?: () => void;
  uploadedImage?: string | null;
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[30px] text-nowrap whitespace-pre">
            Unggah dan Nilai pengalaman anda!
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame5({ uploadedImage }: { uploadedImage?: string | null }) {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 p-[10px] top-0 w-[449px]">
      <div className="bg-white h-[192px] relative rounded-[10px] shrink-0 w-full overflow-hidden">
        <div aria-hidden="true" className="absolute border-2 border-[#ffb4c4] border-solid inset-0 pointer-events-none rounded-[10px]" />
        {uploadedImage && (
          <img
            src={uploadedImage}
            alt="Uploaded preview"
            className="absolute inset-0 w-full h-full object-cover rounded-[10px]"
          />
        )}
      </div>
    </div>
  );
}

function Upload() {
  return (
    <div className="relative shrink-0 size-[39px] flex items-center justify-center" data-name="upload">
      <img src={uploadIcon} alt="upload" className="block size-full object-contain" />
    </div>
  );
}

function Frame7({ onUploadClick }: { onUploadClick?: () => void }) {
  return (
    <div
      onClick={onUploadClick}
      className="bg-[#ffb4c4] content-stretch flex h-[79px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0 w-[81px] cursor-pointer hover:bg-[#ff9eb4] transition-colors"
    >
      <Upload />
    </div>
  );
}

function Frame4({ onUploadClick }: { onUploadClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col items-start p-[10px] relative shrink-0 w-[101px]">
      <Frame7 onUploadClick={onUploadClick} />
    </div>
  );
}

function Frame11({ onUploadClick, uploadedImage }: { onUploadClick?: () => void; uploadedImage?: string | null }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[212px] items-center justify-center left-0 px-[174px] py-[57px] top-0 w-[449px]">
      <Frame5 uploadedImage={uploadedImage} />
      <Frame4 onUploadClick={onUploadClick} />
    </div>
  );
}

function Frame6({ onUploadClick, uploadedImage }: { onUploadClick?: () => void; uploadedImage?: string | null }) {
  return (
    <div className="h-[212px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[212px] items-start px-[174px] py-[57px] relative w-full">
          <Frame11 onUploadClick={onUploadClick} uploadedImage={uploadedImage} />
        </div>
      </div>
    </div>
  );
}

function Stars({ rating, onRatingChange }: { rating: number; onRatingChange: (rating: number) => void }) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full" data-name="Stars">
      <StarRating rating={rating} interactive={true} onRatingChange={onRatingChange} size={36} className="gap-1" />
    </div>
  );
}

function Frame9({
  rating,
  onRatingChange,
  onUploadClick,
  uploadedImage,
}: {
  rating: number;
  onRatingChange: (rating: number) => void;
  onUploadClick?: () => void;
  uploadedImage?: string | null;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[25px] items-center relative shrink-0 w-[449px]">
      <Frame6 onUploadClick={onUploadClick} uploadedImage={uploadedImage} />
      <Stars rating={rating} onRatingChange={onRatingChange} />
    </div>
  );
}

export default function UploadAndRateInput({
  rating,
  onRatingChange,
  onUploadClick,
  uploadedImage = null,
}: UploadAndRateInputProps) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[22px] h-[480px] items-center px-0 py-[32px] relative rounded-[10px] shrink-0 w-[671px]">
      <div aria-hidden="true" className="absolute border border-[#ffb4c4] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)]" />
      <Frame8 />
      <Frame9 rating={rating} onRatingChange={onRatingChange} onUploadClick={onUploadClick} uploadedImage={uploadedImage} />
    </div>
  );
}
