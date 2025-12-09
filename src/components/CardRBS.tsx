import React from "react";
import Button from "./Button";
import clockIcon from "../assets/icon/clock.png";
import mapPinIcon from "../assets/icon/map-pin.png";
import blackPlaneIcon from "../assets/icon/blackplane.png";
import airportIcon from "../assets/icon/airport.png";
import calendarIcon from "../assets/icon/calendar.png";

export default function CardRbs() {
  return (
    <div className="bg-white rounded-[10px] border-2 border-[#ffb4c4] p-6 md:p-8 max-w-[1000px] w-full">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="flex-shrink-0 w-full lg:w-[380px]">
          <div className="relative rounded-[10px] overflow-hidden shadow-lg aspect-[4/3] lg:aspect-auto lg:h-full">
            <img
              alt="Japan Tour Destination"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2">
            <h2 className="text-[28px] lg:text-[32px] font-extrabold text-[#444444]">
              Japan Halal Tour
            </h2>
            <div className="bg-white flex items-center gap-2 px-4 py-2 rounded-full border border-[#34e43c] shrink-0">
              <svg className="relative shrink-0" viewBox="0 0 24 24" width="18" height="18" fill="none">
                <path d="M9 12.5L11 14.5L16 9.5" stroke="#34E43C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                <rect x="2" y="2" width="20" height="20" rx="6" stroke="#34E43C" strokeWidth="2.5" />
              </svg>
              <span className="font-medium text-[16px] text-black whitespace-nowrap">Selesai</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 pb-3">
            <div className="flex items-center gap-2">
              <img src={mapPinIcon} alt="lokasi" className="w-5 h-5 object-contain" />
              <span className="font-semibold text-[16px] text-[#444444]">Jepang</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={clockIcon} alt="durasi" className="w-5 h-5 object-contain" />
              <span className="font-semibold text-[16px] text-[#444444]">10 Hari 8 Malam</span>
            </div>
          </div>

          <div className="border-t border-[#a0a0a0]" />

          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-[#a0a0a0] gap-2 sm:gap-0">
              <div className="flex items-center gap-2 sm:min-w-[160px]">
                <img src={calendarIcon} alt="periode" className="w-5 h-5 object-contain" />
                <span className="font-semibold text-[16px] text-[#444444]">Periode</span>
              </div>
              <span className="font-semibold text-[16px] text-[#444444] sm:ml-auto">2 November 2025</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center py-3 border-b border-[#a0a0a0] gap-2 sm:gap-0">
              <div className="flex items-center gap-2 sm:min-w-[160px]">
                <img src={blackPlaneIcon} alt="maskapai" className="w-5 h-5 object-contain" />
                <span className="font-semibold text-[16px] text-[#444444]">Maskapai</span>
              </div>
              <span className="font-semibold text-[16px] text-[#444444] sm:ml-auto">Sriwijaya Air</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center py-3 gap-2 sm:gap-0">
              <div className="flex items-center gap-2 sm:min-w-[160px]">
                <img src={airportIcon} alt="bandara" className="w-5 h-5 object-contain" />
                <span className="font-semibold text-[16px] text-[#444444]">Bandara</span>
              </div>
              <span className="font-semibold text-[16px] text-[#444444] sm:ml-auto break-words">
                Soekarno-Hatta International Airport (GCK)
              </span>
            </div>
          </div>

          <div className="mt-4">
            <Button
              variant="teal-medium"
              showArrows={false}
              className="w-full !h-[56px] !rounded-[10px] !text-[18px] !bg-teal-400 hover:!bg-teal-500"
            >
              Tambahkan Ulasan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
