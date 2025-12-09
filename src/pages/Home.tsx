import React from "react";
import "./Home.css";
import Header from "../components/Header";
import Button from "../components/Button";
import StatCard from "../components/StatCard";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img src="/src/assets/hero-bg.png" alt="Hero Background" className="hero-bg-image" />
        <div className="hero-overlay" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Mulailah Perjalanan Halalmu Sekarang</h1>
        <p className="hero-desc">
          Temukan destinasi, akomodasi, dan pengalaman perjalanan yang aman serta sesuai syariah. 
          Jelajahi dunia dengan rasa tenang, penuh keyakinan, dan tetap menjaga nilai-nilai sebagai muslimah.
        </p>
        <div className="hero-btn-wrapper">
          <Button className="btn purple-light" variant="purple-light" showArrows={false}>
            Cari Sekarang
          </Button>
        </div>
      </div>
    </section>
  );
}

function SearchBar() {
  return (
    <div className="search-bar-wrapper">
      <div className="search-bar">
        <div className="search-field">
          <span className="search-label">Dari</span>
          <button className="search-dropdown" aria-label="Pilih asal">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="search-divider" />

        <div className="search-field">
          <span className="search-label">Ke</span>
          <button className="search-dropdown" aria-label="Pilih tujuan">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="search-divider" />

        <div className="search-field">
          <span className="search-label">Pergi</span>
          <button className="search-dropdown" aria-label="Pilih tanggal pergi">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <button className="search-btn" aria-label="Cari Destinasi">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2"/>
            <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span>Cari Destinasi</span>
        </button>
      </div>
    </div>
  );
}

function DestinationsSection() {
  const cards = [
    {
      id: 1,
      date: "Paket Desember 2025",
      title: "Korea Halal Tour",
      img: "/src/assets/dest1.png",
    },
    {
      id: 2,
      date: "Paket November 2025",
      title: "Uzbekistan Halal Tour",
      img: "/src/assets/dest2.png",
    },
    {
      id: 3,
      date: "Paket Oktober 2025",
      title: "Japan Halal Tour",
      img: "/src/assets/dest3.png",
    },
  ];

  return (
    <section className="destinations-section new-destinations-section">
      <div className="destinations-inner">
        <div className="destinations-head">
          <div className="dest-left">
            <p className="section-subtitle">Perjalanan terbaik kami</p>
            <h2 className="section-title">Wisata Halal Pilihan Muslimah</h2>
          </div>
          <div className="dest-right">
            <p className="section-desc">
              Nikmati setiap destinasi yang terjamin keamanannya, dan jelajahi keindahan alam yang menenangkan
            </p>
          </div>
        </div>

        <div className="dest-grid new-dest-grid" role="list">
          {cards.map((c) => (
            <article className="dest-card new-dest-card" key={c.id} role="listitem" aria-label={c.title}>
              <div className="dest-card-media">
                <img src={c.img} alt={c.title} />
              </div>
              <div className="dest-card-body">
                <p className="dest-card-date">{c.date}</p>
                <h3 className="dest-card-title">{c.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-bg">
        <img src="/src/assets/2.png" alt="CTA Background" />
        <div className="cta-overlay" />
      </div>
      <div className="cta-content">
        <p className="cta-label">Paket Tour</p>
        <h2 className="cta-title">
          Temukan pilihan destinasi halal dengan akomodasi aman, makanan halal terjamin, 
          dan fasilitas ibadah yang mudah dijangkau.
        </h2>
        <Button variant="purple-light" showArrows={false}>
          Temukan Destinasi
        </Button>
      </div>
    </section>
  );
}

// Article Card
function ArticleCard({ date, title, excerpt }: { date: string; title: string; excerpt: string }) {
  return (
    <article className="article-card">
      <div className="article-image">
        <img src="" alt={title} />
      </div>
      <div className="article-content">
        <p className="article-date">{date}</p>
        <h3 className="article-title">{title}</h3>
        <p className="article-excerpt">{excerpt}</p>
      </div>
    </article>
  );
}

// Articles Section
function ArticlesSection() {
  return (
    <section className="articles-section">
      <p className="section-subtitle">Aritkel Panduan Travelling</p>
      <h2 className="section-title">Tips dan Artikel Perjalanan</h2>
      <div className="articles-grid">
        <ArticleCard 
          date="01 Des 2025"
          title="5 Tips Packing Syar'i: Apa yang Wajib Ada di Koper Muslimah?"
          excerpt="Packing yang efisien dan sesuai kebutuhan adalah kunci. Persiapan bukan hanya pakaian..."
        />
        <ArticleCard 
          date="25 Nov 2025"
          title="Eksplorasi Kota Tua Jakarta: Destinasi Halal-Friendly dan Penuh Sejarah"
          excerpt="Wisata sejarah tak harus menguras energi. Kota Tua menawarkan spot yang ramah Muslimah..."
        />
      </div>
      <div className="articles-btn-wrapper">
        <Button variant="purple-light" showArrows={false}>
          Lihat Selengkapnya
        </Button>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-content">
        <div className="stats-text">
          <h2 className="stats-title">Ketenangan dan Kenyamanan Perjalanan Anda, Prioritas Kami</h2>
          <p className="stats-desc">
            Setiap paket perjalanan kami dirancang dengan cermat, menjamin kenyamanan dan kesesuaian syariat.
            Ribuan Muslimah telah membuktikan layanan kami yang berfokus pada pengalaman beribadah yang tenang.
          </p>

          <div className="stats-cards">
            <StatCard value="500+" label="Destinasi Halal" />
            <StatCard value="100K+" label="Muslimah yang Terlayani" />
            <StatCard value="4.9" label="Rata-rata Rating Kepuasan" />
          </div>
        </div>

        <div className="stats-image" aria-hidden="true">
          {/* gambar optional: hapus atau biarkan kosong jika belum ada */}
        </div>
      </div>
    </section>
  );
}

// Testimonial Section
function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <p className="testimonial-label">Testimoni</p>
      <div className="testimonial-quote">
        <p>
          <span className="text-black">Ini bukan sekadar liburan, ini adalah perjalanan yang berbeda. Setiap detail dirancang khusus </span>
          <span className="text-gray">untuk kenyamanan kita, membawa pengalaman yang mendalam dan unik.</span>{" "}
          <span className="text-light-gray">Mari segera wujudkan petualangan impian!</span>
        </p>
      </div>
      <div className="testimonial-photos">
        <div className="testimonial-photo testimonial-photo-side">
          <img src="" alt="Testimonial 1" />
        </div>
        <div className="testimonial-photo testimonial-photo-main">
          <img src="" alt="Testimonial Main" />
        </div>
        <div className="testimonial-photo testimonial-photo-side">
          <img src="" alt="Testimonial 2" />
        </div>
      </div>
      <div className="testimonial-author">
        <h3 className="testimonial-name">Virly Maryam</h3>
        <p className="testimonial-role">Si Petualang Syar'i</p>
      </div>
    </section>
  );
}

// Main HomePage Component
export default function HomePage() {
  return (
    <div className="homepage">
      <Header />
      
      <main className="homepage-main">
        <HeroSection />
        
        <div className="search-bg-wrapper">
          <SearchBar />
        </div>

        <DestinationsSection />
        
        <CTASection />
        
        <ArticlesSection />
        
        <StatsSection />
        
        <TestimonialSection />
      </main>
    </div>
  );
}