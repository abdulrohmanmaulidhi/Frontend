import React from "react";
import Button from "./Button";
import blackPin from "../assets/icon/blackpin.png";
import blackPlane from "../assets/icon/blackplane.png";
import clockIcon from "../assets/icon/clock.png";
import heartIcon from "../assets/icon/Heart.png";

interface TourDetailCardProps {
  image?: string;
  title: string;
  location: string;
  duration: string;
  period: string;
  airline: string;
  airport: string;
  price: string;
  isWishlisted?: boolean;
  onWishlistClick?: () => void;
  onBookingClick?: () => void;
  onContactClick?: () => void;
}

function Dest4Pic({ image }: { image?: string }) {
  return (
    <div
      className="basis-0 grow min-h-px min-w-px relative shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)] shrink-0 w-full"
      data-name="Dest 4 - Pic 1"
    >
      <div
        className="absolute inset-0 rounded-[10px] shadow-[0px_2px_4px_-2px_rgba(10,13,18,0.06),0px_4px_8px_-2px_rgba(10,13,18,0.1)]"
        data-name="image 2"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          {image ? (
            <img
              alt="tour"
              className="absolute inset-0 h-full left-0 max-w-none top-0 w-full object-cover"
              src={image}
            />
          ) : (
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-sm text-gray-400">
              No image
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Frame33({ image }: { image?: string }) {
  return (
    <div className="content-stretch flex flex-col h-[479px] items-start relative shrink-0 w-[603px] max-md:w-full max-md:h-[300px]">
      <Dest4Pic image={image} />
    </div>
  );
}

function Frame19({ title }: { title: string }) {
  return (
    <div className="content-stretch flex items-center px-0 py-[10px] relative shrink-0 w-full">
      <p className="basis-0 font-['Inter:Extra_Bold',sans-serif] font-extrabold grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#444444] text-[40px] max-md:text-[28px]">
        {title}
      </p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[44.118px] relative shrink-0 w-[30px]">
      <img src={blackPin} alt="pin" className="block w-full h-full object-contain" />
    </div>
  );
}

function Frame15({ location }: { location: string }) {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[20px] max-md:text-[16px] text-center text-nowrap whitespace-pre">
        {location}
      </p>
    </div>
  );
}

function Frame16({ location }: { location: string }) {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
      <Group />
      <Frame15 location={location} />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[38px] relative shrink-0 w-[40px]">
      <img src={blackPlane} alt="plane" className="block w-full h-full object-contain" />
    </div>
  );
}

function Frame17({ duration }: { duration: string }) {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[20px] max-md:text-[16px] text-center text-nowrap whitespace-pre">
        {duration}
      </p>
    </div>
  );
}

function Frame18({ duration }: { duration: string }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Group1 />
      <Frame17 duration={duration} />
    </div>
  );
}

function Frame20({ location, duration }: { location: string; duration: string }) {
  return (
    <div className="content-stretch flex gap-[180px] max-md:gap-[20px] items-center relative shrink-0 w-full max-md:flex-col max-md:items-start">
      <Frame16 location={location} />
      <Frame18 duration={duration} />
    </div>
  );
}

function Frame25({ title, location, duration }: { title: string; location: string; duration: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-full">
      <Frame19 title={title} />
      <Frame20 location={location} duration={duration} />
    </div>
  );
}

function Frame2() {
  return (
    <div className="h-[34.964px] relative shrink-0 w-[40px]">
      <img src={clockIcon} alt="clock" className="block w-full h-full object-contain" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-0 relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[20px] max-md:text-[16px] text-justify text-nowrap whitespace-pre">
        Periode
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <Frame2 />
      <Frame12 />
    </div>
  );
}

function Frame14({ period }: { period: string }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-0 relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[20px] max-md:text-[16px] text-justify text-nowrap whitespace-pre">
        {period}
      </p>
    </div>
  );
}

function Frame29({ period }: { period: string }) {
  return (
    <div className="content-stretch flex gap-[227px] max-md:gap-[20px] items-center pb-[17px] pt-[15px] px-0 relative shrink-0 w-full max-md:flex-col max-md:items-start">
      <div aria-hidden="true" className="absolute border-[#a0a0a0] border-[2px_0px] border-solid inset-0 pointer-events-none" />
      <Frame13 />
      <Frame14 period={period} />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[28.947px] relative shrink-0 w-[40px]">
      <div className="block w-full h-full" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex h-[55px] items-center justify-center px-[10px] py-0 relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[20px] max-md:text-[16px] text-justify text-nowrap whitespace-pre">
        Maskapai
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex h-[55px] items-center relative shrink-0">
      <Frame1 />
      <Frame10 />
    </div>
  );
}

function Frame22({ airline }: { airline: string }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-0 relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[20px] max-md:text-[16px] text-justify text-nowrap whitespace-pre">
        {airline}
      </p>
    </div>
  );
}

function Frame28({ airline }: { airline: string }) {
  return (
    <div className="content-stretch flex gap-[211px] max-md:gap-[20px] items-center px-0 py-[5px] relative shrink-0 w-full max-md:flex-col max-md:items-start">
      <div aria-hidden="true" className="absolute border-[#a0a0a0] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <Frame11 />
      <Frame22 airline={airline} />
    </div>
  );
}

function FrameIcon() {
  return <div className="h-[41.818px] relative shrink-0 w-[40px]" />;
}

function Frame8Label() {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-0 relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[20px] max-md:text-[16px] text-justify w-[162px] max-md:w-auto">
        Bandara
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[3px] items-center justify-center relative shrink-0 w-[225px] max-md:w-auto">
      <FrameIcon />
      <Frame8Label />
    </div>
  );
}

function Frame23({ airport }: { airport: string }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[10px] py-0 relative shrink-0 w-[440px] max-md:w-auto">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[20px] max-md:text-[16px] text-justify text-nowrap whitespace-pre max-md:whitespace-normal">
        {airport}
      </p>
    </div>
  );
}

function Frame27({ airport }: { airport: string }) {
  return (
    <div className="content-stretch flex gap-[138px] max-md:gap-[20px] items-center px-0 py-[15px] relative shrink-0 w-full max-md:flex-col max-md:items-start">
      <div aria-hidden="true" className="absolute border-[#a0a0a0] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <Frame9 />
      <Frame23 airport={airport} />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[10px] relative shrink-0">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[40px] max-md:text-[28px] text-nowrap whitespace-pre">
        Harga
      </p>
    </div>
  );
}

function Frame7({ price }: { price: string }) {
  return (
    <div className="content-stretch flex items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[#444444] text-[40px] max-md:text-[28px] text-nowrap whitespace-pre">
        {price}
      </p>
    </div>
  );
}

function Frame26({ price }: { price: string }) {
  return (
    <div className="content-stretch flex gap-[245px] max-md:gap-[20px] items-center pb-0 pt-[10px] px-0 relative shrink-0 w-full max-md:flex-col max-md:items-start">
      <Frame21 />
      <Frame7 price={price} />
    </div>
  );
}

function Frame30({ period, airline, airport, price }: { period: string; airline: string; airport: string; price: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame29 period={period} />
      <Frame28 airline={airline} />
      <Frame27 airport={airport} />
      <Frame26 price={price} />
    </div>
  );
}

function Wishlist({ isWishlisted }: { isWishlisted?: boolean }) {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="wishlist">
      <img
        src={heartIcon}
        alt="wishlist"
        className="w-[20px] h-[20px] object-contain"
        style={{ opacity: isWishlisted ? 1 : 0.7 }}
      />
    </div>
  );
}

function Frame3({ isWishlisted }: { isWishlisted?: boolean }) {
  return (
    <div className="content-stretch flex items-center px-0 py-[8.973px] relative shrink-0">
      <Wishlist isWishlisted={isWishlisted} />
    </div>
  );
}

function ButtonRed({ isWishlisted, onClick }: { isWishlisted?: boolean; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`${isWishlisted ? "bg-red-500" : "bg-red-400"} content-stretch flex gap-[8.973px] h-[71.784px] items-center justify-center p-[8.973px] relative rounded-[17.946px] shrink-0 w-[330.205px] max-md:w-full cursor-pointer transition-all duration-300 hover:opacity-90`}
      data-name="Button Red"
    >
      <Frame3 isWishlisted={isWishlisted} />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[21.535px] max-md:text-[16px] text-nowrap text-white whitespace-pre">
        Tambahkan Ke Wishlist
      </p>
    </div>
  );
}

function Frame6({ onBookingClick, onContactClick }: { onBookingClick?: () => void; onContactClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[20px] max-md:gap-[20px] items-center relative shrink-0 w-auto max-md:w-full max-md:flex-col">
      <Button variant="pink-light" onClick={onBookingClick} showArrows={false} className="!min-w-[200px] !px-6 !py-3 !rounded-[18px] max-md:w-full">
        Booking
      </Button>
      <Button variant="pink-light" onClick={onContactClick} showArrows={false} className="!min-w-[200px] !px-6 !py-3 !rounded-[18px] max-md:w-full">
        Hubungi CS
      </Button>
    </div>
  );
}

function Frame24({ isWishlisted, onWishlistClick, onBookingClick, onContactClick }: { isWishlisted?: boolean; onWishlistClick?: () => void; onBookingClick?: () => void; onContactClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[20px] max-md:gap-[20px] items-center relative shrink-0 w-full max-md:flex-col">
      <div
        onClick={onWishlistClick}
        className={`${isWishlisted ? "bg-red-500" : "bg-red-400"} flex gap-2 items-center justify-center px-6 py-3 rounded-[18px] shrink-0 w-auto min-w-[250px] max-md:w-full cursor-pointer transition-all duration-300 hover:opacity-90`}
      >
        <Wishlist isWishlisted={isWishlisted} />
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic text-white text-[18px] max-md:text-[16px]">
          Tambahkan Ke Wishlist
        </p>
      </div>
      <Frame6 onBookingClick={onBookingClick} onContactClick={onContactClick} />
    </div>
  );
}

function Frame31({ period, airline, airport, price, isWishlisted, onWishlistClick, onBookingClick, onContactClick }: { period: string; airline: string; airport: string; price: string; isWishlisted?: boolean; onWishlistClick?: () => void; onBookingClick?: () => void; onContactClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full">
      <Frame30 period={period} airline={airline} airport={airport} price={price} />
      <Frame24 isWishlisted={isWishlisted} onWishlistClick={onWishlistClick} onBookingClick={onBookingClick} onContactClick={onContactClick} />
    </div>
  );
}

function Frame32({ title, location, duration, period, airline, airport, price, isWishlisted, onWishlistClick, onBookingClick, onContactClick }: { title: string; location: string; duration: string; period: string; airline: string; airport: string; price: string; isWishlisted?: boolean; onWishlistClick?: () => void; onBookingClick?: () => void; onContactClick?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-[829.903px] max-md:w-full">
      <Frame25 title={title} location={location} duration={duration} />
      <Frame31 period={period} airline={airline} airport={airport} price={price} isWishlisted={isWishlisted} onWishlistClick={onWishlistClick} onBookingClick={onBookingClick} onContactClick={onContactClick} />
    </div>
  );
}

export default function TourDetailCard({ image, title, location, duration, period, airline, airport, price, isWishlisted, onWishlistClick, onBookingClick, onContactClick }: TourDetailCardProps) {
  return (
    <div className="bg-white relative rounded-[10px] shadow-[0px_12px_16px_-4px_rgba(10,13,18,0.08),0px_4px_6px_-2px_rgba(10,13,18,0.03)] size-full">
      <div className="flex flex-row items-center size-full max-md:flex-col">
        <div className="content-stretch flex gap-[64px] max-md:gap-[30px] items-center px-[49px] max-md:px-[20px] py-0 max-md:py-[30px] relative size-full max-md:flex-col">
          <Frame33 image={image} />
          <Frame32
            title={title}
            location={location}
            duration={duration}
            period={period}
            airline={airline}
            airport={airport}
            price={price}
            isWishlisted={isWishlisted}
            onWishlistClick={onWishlistClick}
            onBookingClick={onBookingClick}
            onContactClick={onContactClick}
          />
        </div>
      </div>
    </div>
  );
}
