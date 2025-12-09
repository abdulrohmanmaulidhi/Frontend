import React, { useState } from "react";
import Button from "../components/Button";
import "./Riwayat.css";

interface BookingItem {
  id: string;
  image: string;
  title: string;
  location: string;
  duration: string;
  airline: string;
  airport: string;
  date: string;
  status?: "Selesai" | "Berjalan" | "Dibatalkan";
}

// Custom Tabs Component untuk Riwayat Booking
function RiwayatTabs({ activeTab, onTabChange }: { activeTab: "booking" | "history"; onTabChange: (tab: "booking" | "history") => void }) {
  return (
    <div className="riwayat-tabs-wrapper">
      <div className="riwayat-tabs-container">
        <div 
          onClick={() => onTabChange("booking")}
          className={`riwayat-tab-item ${activeTab === "booking" ? "active" : ""}`}
        >
          <p className="riwayat-tab-text">Booking Saya</p>
        </div>
        <div 
          onClick={() => onTabChange("history")}
          className={`riwayat-tab-item ${activeTab === "history" ? "active" : ""}`}
        >
          <p className="riwayat-tab-text">Daftar Riwayat Booking</p>
        </div>
      </div>
    </div>
  );
}

export default function Riwayat() {
  const [activeTab, setActiveTab] = useState<"booking" | "history">("booking");
  const [selectedMonth] = useState("November");

  // Data untuk tab "Booking Saya" - dengan status
  const bookingItems: BookingItem[] = [
    {
      id: "1",
      image: "",
      title: "Malaysia Halal Tour",
      location: "Malaysia",
      duration: "10 Hari 8 Malam",
      airline: "Lion Air",
      airport: "Soekarno-Hatta International Airport (SGK)",
      date: "8 Desember 2025",
      status: "Selesai",
    },
    {
      id: "2",
      image: "",
      title: "Uzbekistan Halal Tour",
      location: "Uzbekistan",
      duration: "7 Hari 5 Malam",
      airline: "Sriwijaya Air",
      airport: "Soekarno-Hatta International Airport (SGK)",
      date: "8 November 2025",
      status: "Selesai",
    },
    {
      id: "3",
      image: "",
      title: "Korea Halal Tour",
      location: "Korea Selatan",
      duration: "8 Hari 6 Malam",
      airline: "Garuda Indonesia",
      airport: "Soekarno-Hatta International Airport (SGK)",
      date: "3 November 2025",
      status: "Selesai",
    },
  ];

  // Data untuk tab "Daftar Riwayat Booking" - tanpa status
  const historyItems: BookingItem[] = [
    {
      id: "4",
      image: "",
      title: "Japan Halal Tour",
      location: "Jepang",
      duration: "10 Hari 8 Malam",
      airline: "Garuda Air",
      airport: "Soekarno-Hatta International Airport (SGK)",
      date: "25 Desember 2025",
    },
    {
      id: "5",
      image: "",
      title: "Singapura Halal Tour",
      location: "Singapura",
      duration: "7 Hari 5 Malam",
      airline: "Garuda Indonesia",
      airport: "Soekarno-Hatta International Airport (SGK)",
      date: "04 Desember 2025",
    },
    {
      id: "6",
      image: "",
      title: "Korea Halal Tour",
      location: "Korea Selatan",
      duration: "8 Hari 6 Malam",
      airline: "Garuda Indonesia",
      airport: "Soekarno-Hatta International Airport (SGK)",
      date: "01 Desember 2025",
    },
  ];

  const handleDetailClick = (id: string) => {
    console.log("View detail for booking:", id);
  };

  const handleReviewClick = (id: string) => {
    console.log("Add review for booking:", id);
  };

  const currentItems = activeTab === "booking" ? bookingItems : historyItems;
  const currentMonth = activeTab === "booking" ? "November" : "Desember";

  return (
    <div className="riwayat-page-wrapper">
      <div className="riwayat-page-container">
        {/* Header Section */}
        <div className="riwayat-header-section">
          <div className="riwayat-title-wrapper">
            <h1 className="riwayat-page-title">Riwayat Booking</h1>
          </div>
          <div className="riwayat-subtitle-wrapper">
            <p className="riwayat-page-subtitle">
              {activeTab === "booking" 
                ? "Lihat daftar pemesanan, lihat detail e-tiket perjalanan Anda di sini"
                : "Lihat riwayat pembelian Anda dan tambahkan review untuk setiap perjalanan yang sudah selesai"}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <RiwayatTabs activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content Section */}
        <div className="riwayat-content-section">
          <div className="riwayat-section-header">
            <h2 className="riwayat-section-title">
              {activeTab === "booking" ? "E-Tiket & Voucher Aktif" : "Riwayat Booking"}
            </h2>
          </div>

          {/* Booking Terbaru Header with Dropdown */}
          <div className="riwayat-booking-header">
            <div className="riwayat-booking-title-wrapper">
              <p className="riwayat-booking-title">
                {activeTab === "booking" ? "Booking Terbaru" : "Riwayat Terbaru"}
              </p>
            </div>
            <div className="riwayat-month-dropdown-wrapper">
              <button className="riwayat-month-dropdown">
                <span className="riwayat-month-text">{currentMonth}</span>
                <div className="riwayat-dropdown-icon">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Booking Cards */}
          <div className="riwayat-cards-container">
            {currentItems.map((item) => (
              <div key={item.id} className="riwayat-booking-card">
                {/* Card Image */}
                <div className="riwayat-card-image-wrapper">
                  {item.image ? (
                    <img src={item.image} alt={item.title} className="riwayat-card-image" />
                  ) : (
                    <div className="riwayat-card-image-placeholder" />
                  )}
                </div>

                {/* Card Content */}
                <div className="riwayat-card-content">
                  {/* Title Row with Status (only for "Booking Saya" tab) */}
                  <div className="riwayat-card-title-row">
                    <h3 className="riwayat-card-title">{item.title}</h3>
                    {activeTab === "booking" && item.status && (
                      <div className="riwayat-status-badge">
                        <div className="riwayat-status-icon">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <circle cx="15" cy="15" r="14" fill="#90EE90" stroke="#90EE90" strokeWidth="2" />
                            <path d="M8 15L13 20L22 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="riwayat-status-text">{item.status}</span>
                      </div>
                    )}
                  </div>

                  {/* Info Rows */}
                  <div className="riwayat-card-info-grid">
                    {/* Row 1: Location + Duration */}
                    <div className="riwayat-info-row">
                      <div className="riwayat-info-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <circle cx="12" cy="10" r="3" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="riwayat-info-content">
                        <p className="riwayat-info-text">{item.location}</p>
                      </div>
                      
                      <div className="riwayat-info-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 6v6l4 2" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="riwayat-info-content">
                        <p className="riwayat-info-text">{item.duration}</p>
                      </div>
                    </div>

                    {/* Row 2: Date + Airline */}
                    <div className="riwayat-info-row">
                      <div className="riwayat-info-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <rect x="3" y="4" width="18" height="18" rx="2" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M16 2v4M8 2v4M3 10h18" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="riwayat-info-content">
                        <p className="riwayat-info-text">{item.date}</p>
                      </div>
                      
                      <div className="riwayat-info-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M7.5 4.21l4.5 2.6 4.5-2.6M12 17V6.81" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="riwayat-info-content">
                        <p className="riwayat-info-text">{item.airline}</p>
                      </div>
                    </div>

                    {/* Row 3: Airport (full width) */}
                    <div className="riwayat-info-row">
                      <div className="riwayat-info-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M9 22V12h6v10" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="riwayat-info-content riwayat-info-content-wide">
                        <p className="riwayat-info-text">{item.airport}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button - Different for each tab */}
                  <div className="riwayat-card-button-wrapper">
                    {activeTab === "booking" ? (
                      <Button
                        variant="pink-light"
                        showArrows={false}
                        onClick={() => handleDetailClick(item.id)}
                        className="riwayat-detail-button"
                      >
                        Lihat Detail Tiket
                      </Button>
                    ) : (
                      <Button
                        variant="teal-light"
                        showArrows={false}
                        onClick={() => handleReviewClick(item.id)}
                        className="riwayat-review-button"
                      >
                        Tambahkan Ulasan
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}