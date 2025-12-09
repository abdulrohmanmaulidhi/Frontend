import React from "react";

interface RegionTabsProps {
  activeTab: "asia" | "eropa" | "australia" | "afrika";
  onTabChange: (tab: "asia" | "eropa" | "australia" | "afrika") => void;
}

function Frame({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex h-[74px] items-end justify-center px-[10px] py-[23px] relative rounded-[20px] shrink-0 w-[235px] max-md:w-full cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90 ${isActive ? "bg-[#b49de4]" : "bg-transparent"}`}
    >
      <p className={`basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow h-full leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[24px] max-md:text-[18px] text-center transition-colors duration-300 ease-in-out ${isActive ? "text-white" : "text-[#444444]"}`}>
        Asia
      </p>
    </div>
  );
}

function Frame1({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex h-[74px] items-end justify-center px-[10px] py-[23px] relative rounded-[20px] shrink-0 w-[235px] max-md:w-full cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90 ${isActive ? "bg-[#b49de4]" : "bg-transparent"}`}
    >
      <p className={`basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow h-full leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[24px] max-md:text-[18px] text-center transition-colors duration-300 ease-in-out ${isActive ? "text-white" : "text-[#444444]"}`}>
        Eropa
      </p>
    </div>
  );
}

function Frame2({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex h-[74px] items-end justify-center px-[10px] py-[23px] relative rounded-[20px] shrink-0 w-[235px] max-md:w-full cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90 ${isActive ? "bg-[#b49de4]" : "bg-transparent"}`}
    >
      <p className={`basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow h-full leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[24px] max-md:text-[18px] text-center transition-colors duration-300 ease-in-out ${isActive ? "text-white" : "text-[#444444]"}`}>
        Australia
      </p>
    </div>
  );
}

function Frame3({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`content-stretch flex h-[74px] items-end justify-center px-[10px] py-[23px] relative rounded-[20px] shrink-0 w-[235px] max-md:w-full cursor-pointer transition-all duration-300 ease-in-out hover:opacity-90 ${isActive ? "bg-[#b49de4]" : "bg-transparent"}`}
    >
      <p className={`basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow h-full leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[24px] max-md:text-[18px] text-center transition-colors duration-300 ease-in-out ${isActive ? "text-white" : "text-[#444444]"}`}>
        Afrika
      </p>
    </div>
  );
}

export default function RegionTabs({ activeTab, onTabChange }: RegionTabsProps) {
  return (
    <div className="bg-white relative rounded-[20px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)] size-full">
      <div className="flex flex-row items-center size-full max-md:flex-col">
        <div className="content-stretch flex gap-[40px] max-md:gap-[20px] items-center px-[17px] py-0 max-md:py-[17px] relative size-full max-md:flex-col">
          <Frame 
            isActive={activeTab === "asia"}
            onClick={() => onTabChange("asia")}
          />
          <Frame1 
            isActive={activeTab === "eropa"}
            onClick={() => onTabChange("eropa")}
          />
          <Frame2 
            isActive={activeTab === "australia"}
            onClick={() => onTabChange("australia")}
          />
          <Frame3 
            isActive={activeTab === "afrika"}
            onClick={() => onTabChange("afrika")}
          />
        </div>
      </div>
    </div>
  );
}