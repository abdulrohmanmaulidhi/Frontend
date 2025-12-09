import React from "react";
import TicketDetail from "../components/TicketDetail";
import "./TicketDetailPage.css";

export default function TicketDetailPage() {
  const handleDownload = () => {
    console.log("Download ticket");
    // Logic untuk download tiket
  };

  return (
    <div className="ticket-detail-page-wrapper">
      <div className="ticket-detail-page-container">
        {/* Header Section */}
        <div className="ticket-detail-header-section">
          <div className="ticket-detail-title-wrapper">
            <h1 className="ticket-detail-page-title">Unduh Tiket</h1>
          </div>
          <div className="ticket-detail-subtitle-wrapper">
            <p className="ticket-detail-page-subtitle">
              Verifikasi ulang seluruh data pada e-tiket anda untuk memastikan tidak ada kendala saat check-in atau memasuki destinasi.
            </p>
          </div>
        </div>

        {/* Ticket Detail Card */}
        <div className="ticket-detail-card-wrapper">
          <TicketDetail
            fullName="Sonya Nur Fadillah"
            phoneNumber="+62-857-0895-9489"
            email="sonyanurf@gmail.com"
            tourId="HL13FRAQR05"
            tourPackage="Tahun Baruan Di Uzbekistan"
            expiryDate="00-00-0000"
            paymentStatus="Terkonfirmasi"
            departureDate="00 MTH 2025"
            returnDate="00 MTH 2025"
            passengerCount={1}
            onDownloadClick={handleDownload}
          />
        </div>
      </div>
    </div>
  );
}
