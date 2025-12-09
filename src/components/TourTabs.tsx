import React from "react";

interface TourTabsProps {
  activeTab: "itenary" | "booking" | "testimoni";
  onTabChange: (tab: "itenary" | "booking" | "testimoni") => void;
}

function Frame({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`${isActive ? "bg-[#b49de4]" : ""} content-stretch flex h-[74px] items-end justify-center px-[10px] py-[23px] relative rounded-[20px] shrink-0 w-[235px] max-md:w-full cursor-pointer transition-all hover:opacity-95`}
    >
      <p className={`basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow h-full leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[24px] max-md:text-[18px] text-center ${isActive ? "text-white" : "text-black"}`}>
        Itenary
      </p>
    </div>
  );
}

function Frame1({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`${isActive ? "bg-[#b49de4]" : ""} content-stretch flex h-[74px] items-end justify-center px-[10px] py-[23px] relative rounded-[20px] shrink-0 w-[235px] max-md:w-full cursor-pointer transition-all hover:opacity-95`}
    >
      <p className={`basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow h-full leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[24px] max-md:text-[18px] text-black text-center ${isActive ? "text-white" : "text-black"}`}>
        Booking
      </p>
    </div>
  );
}

function Frame2({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`${isActive ? "bg-[#b49de4]" : ""} content-stretch flex h-[74px] items-end justify-center px-[10px] py-[23px] relative rounded-[20px] shrink-0 w-[235px] max-md:w-full cursor-pointer transition-all hover:opacity-95`}
    >
      <p className={`basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow h-full leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[24px] max-md:text-[18px] text-black text-center ${isActive ? "text-white" : "text-black"}`}>
        Testimoni
      </p>
    </div>
  );
}

export default function TourTabs({ activeTab, onTabChange }: TourTabsProps) {
  return (
    <div className="bg-white relative rounded-[20px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)] size-full">
      <div className="flex flex-row items-center size-full max-md:flex-col">
        <div className="content-stretch flex gap-[40px] max-md:gap-[20px] items-center px-[17px] py-0 max-md:py-[17px] relative size-full max-md:flex-col">
          <Frame 
            isActive={activeTab === "itenary"}
            onClick={() => onTabChange("itenary")}
          />
          <Frame1 
            isActive={activeTab === "booking"}
            onClick={() => onTabChange("booking")}
          />
          <Frame2 
            isActive={activeTab === "testimoni"}
            onClick={() => onTabChange("testimoni")}
          />
        </div>
      </div>
    </div>
  );
}
