import React from "react";
import mapPin from "../assets/icon/map-pin.png";
import calendarIcon from "../assets/icon/calendar.png";
import foodIcon from "../assets/icon/food.png";
import mosqueIcon from "../assets/icon/mosque.png";
import transportIcon from "../assets/icon/transport.png";

interface ItineraryDay {
  day: number;
  destinations: string[];
  meals: string[];
  mosques: string[];
  transportation: string[];
}

interface TourItineraryProps {
  tourTitle: string;
  startDate: string;
  endDate: string;
  days: ItineraryDay[];
}

function TourHeader({ tourTitle, startDate, endDate }: { tourTitle: string; startDate: string; endDate: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
        <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[40px] text-nowrap whitespace-pre">
          {tourTitle}
        </p>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
            <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#ffb4c4] text-[30px] text-nowrap whitespace-pre">
              {startDate} - {endDate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TodayIcon() {
  return (
    <img
      src={calendarIcon}
      alt="hari"
      className="size-[45px] object-contain"
    />
  );
}

function DestinationIcon() {
  return (
    <img
      src={mapPin}
      alt="destinasi"
      className="h-[47.514px] w-[34.026px] object-contain"
    />
  );
}

function FoodIcon() {
  return (
    <img
      src={foodIcon}
      alt="makanan"
      className="h-[52.893px] w-[48.237px] object-contain"
    />
  );
}

function MosqueIcon() {
  return (
    <img
      src={mosqueIcon}
      alt="masjid"
      className="h-[43.519px] w-[52.223px] object-contain"
    />
  );
}

function TransportIcon() {
  return (
    <img
      src={transportIcon}
      alt="transportasi"
      className="h-[45.721px] w-[49.872px] object-contain"
    />
  );
}

function ColumnHeader({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="bg-[#b49de4] content-stretch flex flex-col gap-[13px] h-[145px] items-center justify-center relative rounded-[10px] shrink-0 w-full">
      {icon}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] py-0 relative w-full">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[30px] text-center text-nowrap text-white whitespace-pre">
              {label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DayCell({ dayNumber }: { dayNumber: number }) {
  return (
    <div className="bg-[#b49de4] h-[145px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[145px] items-center justify-center p-[10px] relative w-full">
          <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[30px] text-center text-white">
            Hari {dayNumber}
          </p>
        </div>
      </div>
    </div>
  );
}

function ContentCell({ items }: { items: string[] }) {
  if (items.length === 0) return null;

  if (items.length === 1) {
    return (
      <div className="bg-white h-[145px] relative rounded-[10px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-2 border-[#ffb4c4] border-solid inset-0 pointer-events-none rounded-[10px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex h-[145px] items-center justify-center p-[10px] relative w-full">
            <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-black text-center">
              {items[0]}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white h-[145px] relative rounded-[10px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[#ffb4c4] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex h-[145px] items-center justify-center p-[10px] relative w-full">
          <ul className="basis-0 block font-['Inter:Regular',sans-serif] font-normal grow leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[20px] text-black list-disc">
            {(items || []).map((item, index) => (
              <li key={index} className={index < items.length - 1 ? 'mb-0 ms-[30px]' : 'ms-[30px]'}>
                <span className="leading-[normal]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function DayColumn({ days }: { days: ItineraryDay[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[285px]">
      <ColumnHeader icon={<TodayIcon />} label="Hari" />
      {(days || []).map((day) => (
        <DayCell key={day.day} dayNumber={day.day} />
      ))}
    </div>
  );
}

function DestinationColumn({ days }: { days: ItineraryDay[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[285px]">
      <ColumnHeader icon={<DestinationIcon />} label="Destinasi" />
      {(days || []).map((day) => (
        <ContentCell key={day.day} items={day.destinations} />
      ))}
    </div>
  );
}

function MealColumn({ days }: { days: ItineraryDay[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[285px]">
      <ColumnHeader icon={<FoodIcon />} label="Makan" />
      {(days || []).map((day) => (
        <ContentCell key={day.day} items={day.meals} />
      ))}
    </div>
  );
}

function MosqueColumn({ days }: { days: ItineraryDay[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[285px]">
      <ColumnHeader icon={<MosqueIcon />} label="Masjid" />
      {(days || []).map((day) => (
        <ContentCell key={day.day} items={day.mosques} />
      ))}
    </div>
  );
}

function TransportColumn({ days }: { days: ItineraryDay[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[285px]">
      <ColumnHeader icon={<TransportIcon />} label="Transportasi" />
      {(days || []).map((day) => (
        <ContentCell key={day.day} items={day.transportation} />
      ))}
    </div>
  );
}

export default function TourItinerary({ tourTitle, startDate, endDate, days }: TourItineraryProps) {
  return (
    <div className="bg-white relative rounded-[20px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)] size-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[38px] items-center pb-0 pt-[20px] px-[25px] relative size-full">
          <TourHeader tourTitle={tourTitle} startDate={startDate} endDate={endDate} />
          
          <div className="content-stretch flex gap-[43px] items-center relative shrink-0 w-full">
            <DayColumn days={days} />
            <DestinationColumn days={days} />
            <MealColumn days={days} />
            <MosqueColumn days={days} />
            <TransportColumn days={days} />
          </div>
        </div>
      </div>
    </div>
  );
}