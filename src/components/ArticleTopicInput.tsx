import React from "react";
import searchIcon from "../assets/icon/search.png";

interface ArticleTopicInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function Search() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="search">
      <img
        src={searchIcon}
        alt="search"
        className="block size-full object-contain"
      />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center p-[10px] relative shrink-0">
      <Search />
    </div>
  );
}

export default function ArticleTopicInput({
  value,
  onChange,
  placeholder = "Cari topik artikel",
}: ArticleTopicInputProps) {
  return (
    <div className="bg-white relative rounded-[20px] size-full" data-name="Article Topic Input">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[10px] relative size-full">
          <Frame />

          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="font-semibold text-[24px] text-[#444444] bg-transparent outline-none border-none w-full placeholder:text-[#444444]"
          />
        </div>
      </div>
    </div>
  );
}
