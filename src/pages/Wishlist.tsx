// src/pages/Wishlist.tsx
import React, { useState } from "react";
import "./Wishlist.css";
import wishlistIcon from "../assets/icon/wishlist.png";

interface WishlistItem {
  id: string;
  image: string;
  location: string;
  title: string;
  price: string;
}

export default function Wishlist() {
  const [activeTab, setActiveTab] = useState<"wishlist" | "recent">("wishlist");
  const [selectedFilter] = useState("All");
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: "1",
      image: "",
      location: "Korea Selatan",
      title: "Korean Halal Tour",
      price: "Rp14.0000.000",
    },
    {
      id: "2",
      image: "",
      location: "Jepang",
      title: "Japan Halal Tour",
      price: "Rp17.000.000",
    },
    {
      id: "3",
      image: "",
      location: "Uzbekistan",
      title: "Uzbekistan Halal Tour",
      price: "Rp18.000.000",
    },
  ]);

  const recentItems: WishlistItem[] = [];

  const handleDelete = (id: string) => {
    setWishlistItems((prev) => prev.filter((it) => it.id !== id));
  };

  const currentItems = activeTab === "wishlist" ? wishlistItems : recentItems;

  return (
    <div className="wishlist-page-wrapper">
      <div className="wishlist-page-container">
        {/* Header Section */}
        <div className="wishlist-page-header">
          <div className="wishlist-page-title-wrapper">
            <h1 className="wishlist-page-title">Wishlist</h1>
          </div>

          <div className="wishlist-filter-wrapper">
            <button className="wishlist-filter-button">
              <span className="wishlist-filter-text">{selectedFilter}</span>
              <div className="wishlist-chevron-icon" aria-hidden>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="wishlist-tabs-container">
          <div className="wishlist-tabs-wrapper">
            <button
              className={`wishlist-tab-button ${activeTab === "wishlist" ? "active" : ""}`}
              onClick={() => setActiveTab("wishlist")}
            >
              <span className="wishlist-tab-text">Wishlist Destinasi</span>
            </button>
            <button
              className={`wishlist-tab-button ${activeTab === "recent" ? "active" : ""}`}
              onClick={() => setActiveTab("recent")}
            >
              <span className="wishlist-tab-text">Destinasi terakhir dilihat</span>
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="wishlist-content-area">
          {currentItems.length === 0 ? (
            <div className="wishlist-empty-state">
              <p className="wishlist-empty-text">Belum ada destinasi</p>
            </div>
          ) : (
            <div className="wishlist-cards-grid">
              {currentItems.map((item) => (
                <div key={item.id} className="wishlist-card-container">
                  {/* Card Image */}
                  <div className="wishlist-card-image-wrapper">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="wishlist-card-image" />
                    ) : (
                      <div className="wishlist-card-image-placeholder" />
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="wishlist-card-body">
                    {/* Location Row */}
                    <div className="wishlist-card-location-row">
                      <div className="wishlist-location-icon-wrapper">
                        <div className="wishlist-location-icon">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="10" r="3" stroke="#444444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>
                      <div className="wishlist-location-text-wrapper">
                        <p className="wishlist-location-text">{item.location}</p>
                      </div>
                    </div>

                    {/* Title */}
                    <div className="wishlist-card-title-wrapper">
                      <p className="wishlist-card-title-text">{item.title}</p>
                    </div>

                    {/* Footer Row with Price and Delete */}
                    <div className="wishlist-card-footer-row">
                      <div className="wishlist-card-price-wrapper">
                        <p className="wishlist-card-price-text">{item.price}</p>
                      </div>

                      <div className="wishlist-delete-button-wrapper">
                        <button
                          className="wishlist-delete-button"
                          onClick={() => handleDelete(item.id)}
                          aria-label="Hapus dari wishlist"
                        >
                          <div className="wishlist-delete-icon">
                            <img src={wishlistIcon} alt="Wishlist Icon" className="wishlist-delete-icon-img" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
