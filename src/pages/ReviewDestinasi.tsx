import React, { useState } from "react";
import Button from "../components/Button";
import UploadAndRateInput from "../components/UploadAndRateInput";
import WriteReviewInput from "../components/WriteReviewInput";
import StarRating from "../components/StarRating";
import "./ReviewDestinasi.css";

export default function ReviewDestinasi() {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleUpload = () => {
    console.log("Upload image");
    // Logic untuk upload gambar
  };

  const handleCancel = () => {
    console.log("Cancel review");
    setRating(0);
    setReviewText("");
    setUploadedImage(null);
  };

  const handleSubmit = () => {
    console.log("Submit review", { rating, reviewText, uploadedImage });
    // Logic untuk submit review
  };

  return (
    <div className="review-destinasi-page-wrapper">
      <div className="review-destinasi-page-container">
        {/* Header Section */}
        <div className="review-destinasi-header-section">
          <div className="review-destinasi-title-wrapper">
            <h1 className="review-destinasi-page-title">Ulasan Destinasi</h1>
          </div>
          <div className="review-destinasi-subtitle-wrapper">
            <p className="review-destinasi-page-subtitle">
              Bagikan ulasan beserta momen berkesan mengenai perjalanan yang Anda ikuti
            </p>
          </div>
        </div>

        {/* Section 1: Detail Perjalanan */}
        <div className="review-section-divider">
          <h2 className="review-section-title">Berikut adalah detail perjalanan yang Anda ikuti</h2>
        </div>

        {/* Tour Package Card */}
        <div className="review-tour-package-card">
          {/* Tour Image */}
          <div className="review-tour-image-wrapper">
            <div className="review-tour-image-placeholder" />
          </div>

          {/* Tour Info */}
          <div className="review-tour-info">
            <div className="review-tour-package-wrapper">
              <p className="review-tour-package-title">Paket Desember 2025</p>
            </div>
            <div className="review-tour-details">
              <div className="review-tour-name-wrapper">
                <p className="review-tour-name">Korea Halal Tour 2025</p>
              </div>
              <div className="review-tour-rating">
                <div className="review-star-icon">
                  <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                    <path
                      d="M19 2.375L23.7175 12.045L34.3125 13.5875L26.6562 21.0537L28.435 31.625L19 26.5862L9.565 31.625L11.3438 21.0537L3.6875 13.5875L14.2825 12.045L19 2.375Z"
                      fill="#FBBF24"
                    />
                  </svg>
                </div>
                <div className="review-rating-text-wrapper">
                  <p className="review-rating-text">4.8</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Unggah Momen */}
        <div className="review-section-divider">
          <h2 className="review-section-title">Unggah momen terbaik Anda dan beri nilai destinasi ini</h2>
        </div>

        {/* Upload and Review Section */}
        <div className="review-input-section">
          <div className="review-upload-wrapper">
            <UploadAndRateInput
              rating={rating}
              onRatingChange={setRating}
              onUploadClick={handleUpload}
              uploadedImage={uploadedImage}
            />
          </div>

          <div className="review-text-wrapper">
            <div className="review-text-input-container">
              <div className="review-text-input-header">
                <p className="review-text-input-title">Tambahkan ulasan anda</p>
              </div>
              <div className="review-text-input-area">
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Masukkan ulasan anda"
                  className="review-textarea"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="review-action-buttons">
          <Button
            variant="pink-light"
            showArrows={false}
            onClick={handleCancel}
            className="review-cancel-button"
          >
            Batalkan Ulasan
          </Button>
          <Button
            variant="teal-light"
            showArrows={false}
            onClick={handleSubmit}
            className="review-submit-button"
          >
            Tambahkan Ulasan
          </Button>
        </div>
      </div>
    </div>
  );
}
