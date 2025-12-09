import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DestinationPage.css";

type Dest = {
  id: number;
  title: string;
  location: string;
  price?: number;
  image: string;
  period?: string[];
  duration?: string;
  airline?: string;
  airport?: string;
};

const DESTS: Dest[] = [
  {
    id: 1,
    title: "Korea Halal Tour",
    location: "Korea Selatan",
    price: 14000000,
    image: "/Dest1.png",
    period: ["10 Desember 2025", "20 Desember 2025", "30 Desember 2025"],
    duration: "6 Hari 4 Malam",
    airline: "Garuda Indonesia",
    airport: "Soekarno-Hatta International Airport (GCK)",
  },
  {
    id: 2,
    title: "Japan Halal Tour",
    location: "Jepang",
    price: 17000000,
    image: "/Dest2.png",
    period: ["05 November 2025", "15 November 2025"],
    duration: "7 Hari 5 Malam",
    airline: "ANA",
    airport: "Narita (NRT)",
  },
  {
    id: 3,
    title: "Uzbekistan Halal Tour",
    location: "Uzbekistan",
    price: 18000000,
    image: "/Dest3.png",
    period: ["01 Oktober 2025", "12 Oktober 2025"],
    duration: "8 Hari 6 Malam",
    airline: "Uzbekistan Airways",
    airport: "Tashkent (TAS)",
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Anisya Putri",
    rating: 4.8,
    text: "Banyak hal-hal baru yang tidak kami temukan pada perjalanan kami sebelumnya dengan travel lain. Sukses selalu untuk Saleema Tour!",
    image: "/muslimah2.png",
  },
  {
    id: 2,
    name: "Aisya Bella Dwi Ramadhani",
    rating: 4.8,
    text: "Sangat berkesan dengan layanan prima dan profesional Saleema Tour dari awal pengurusan dokumen hingga tour berakhir. Sangat recommended.",
    image: "/muslimah1.png",
  },
  {
    id: 3,
    name: "Cyntia Nurul Fajrianti",
    rating: 4.8,
    text: "Pelayanan yang sangat memuaskan. Pengalaman tour yang tak terlupakan saat tour ke Korea bersama Saleema Tour.",
    image: "/muslimah 3.png",
  },
];

const STORAGE_WISHLIST = "wishlist-liked-ids";
const STORAGE_BOOKINGS = "bookings";

const formatPrice = (v?: number) =>
  v ? v.toLocaleString("id-ID", { style: "currency", currency: "IDR" }) : "";

export default function DestinationPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dest = DESTS.find((d) => String(d.id) === String(id)) ?? DESTS[0];

  const [activeTab, setActiveTab] = useState<"itenary" | "booking" | "testimoni">(
    "itenary"
  );
  const [liked, setLiked] = useState(false);

  const [form, setForm] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    pax: 1,
    departDate: "",
    passportNo: "",
    passportExpiry: "",
    passportCountry: "",
    passportFileName: "",
  } as {
    name: string;
    dob: string;
    email: string;
    phone: string;
    pax: number;
    departDate: string;
    passportNo: string;
    passportExpiry: string;
    passportCountry: string;
    passportFileName: string;
  });

  const [passportFile, setPassportFile] = useState<File | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = dest.title + " — Saleema Tour";
  }, [dest.title]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_WISHLIST);
    if (saved) {
      try {
        const arr = JSON.parse(saved) as number[];
        setLiked(arr.includes(dest.id));
      } catch {
        setLiked(false);
      }
    } else {
      setLiked(false);
    }

    if (dest.period && dest.period.length && !form.departDate) {
      const p = dest.period[0];
      const months: Record<string, string> = {
        Januari: "01",
        Februari: "02",
        Maret: "03",
        April: "04",
        Mei: "05",
        Juni: "06",
        Juli: "07",
        Agustus: "08",
        September: "09",
        Oktober: "10",
        November: "11",
        Desember: "12",
      };
      const parts = p.split(" ");
      if (parts.length === 3 && months[parts[1]]) {
        const iso = `${parts[2]}-${months[parts[1]]}-${parts[0].padStart(2, "0")}`;
        setForm((s) => ({ ...s, departDate: iso }));
      }
    }
  }, [dest.id]);

  const toggleWishlist = () => {
    const saved = localStorage.getItem(STORAGE_WISHLIST);
    let arr: number[] = saved ? JSON.parse(saved) : [];
    if (arr.includes(dest.id)) {
      arr = arr.filter((x) => x !== dest.id);
      setLiked(false);
    } else {
      arr = [dest.id, ...arr];
      setLiked(true);
    }
    localStorage.setItem(STORAGE_WISHLIST, JSON.stringify(arr));
  };

  const change = (k: string, v: any) => {
    setForm((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Nama wajib diisi";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email))
      e.email = "Email tidak valid";
    if (!form.phone.trim()) e.phone = "Nomor telepon wajib diisi";
    if (!form.departDate.trim()) e.departDate = "Tanggal keberangkatan wajib diisi";
    if (!form.passportNo.trim()) e.passportNo = "No paspor wajib diisi";
    if (!form.passportExpiry.trim())
      e.passportExpiry = "Tanggal kadaluarsa paspor wajib diisi";
    if (!form.passportCountry.trim())
      e.passportCountry = "Negara paspor wajib diisi";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submitBooking = (e?: any) => {
    e?.preventDefault();
    if (!validate()) return;

    const saved = localStorage.getItem(STORAGE_BOOKINGS);
    const arr = saved ? JSON.parse(saved) : [];
    arr.unshift({
      id: Date.now(),
      destId: dest.id,
      destTitle: dest.title,
      createdAt: new Date().toISOString(),
      data: form,
      passportFileName: form.passportFileName || (passportFile ? passportFile.name : null),
    });
    localStorage.setItem(STORAGE_BOOKINGS, JSON.stringify(arr));
    setSubmitted(true);
    setTimeout(() => {
      navigate("/wishlist");
    }, 900);
  };

  const handleBookingClick = () => {
    setActiveTab("booking");
    setTimeout(() => {
      const el = document.querySelector(".dp-booking");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
    }, 150);
  };

  const onPassportFileChange = (file?: File | null) => {
    if (!file) {
      setPassportFile(null);
      change("passportFileName", "");
      return;
    }
    setPassportFile(file);
    change("passportFileName", file.name);
  };

  return (
    <div className="dp-root">
      <div className="dp-hero" style={{ backgroundImage: `url(${dest.image})` }}>
        <div className="dp-hero-inner">
          <div className="dp-hero-card" aria-hidden="true">
            <img src={dest.image} alt={dest.title} />
          </div>

          <div className="dp-hero-detail" role="region" aria-labelledby="dp-title">
            <h1 id="dp-title">{dest.title}</h1>

            <div className="dp-meta-top">
              <div className="meta-block">
                <div className="meta-icon">📍</div>
                <div className="meta-text">{dest.location}</div>
              </div>

              <div className="meta-block">
                <div className="meta-icon">⏱</div>
                <div className="meta-text">{dest.duration}</div>
              </div>
            </div>

            <div className="dp-mid-grid">
              <div className="mid-left">
                <div className="dp-period">
                  <strong>Periode</strong>
                  <ul>
                    {dest.period?.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mid-right">
                <div className="info-row">
                  <div className="info-item">
                    <div className="info-icon">✈️</div>
                    <div className="info-text">
                      <div className="muted">Maskapai</div>
                      <div className="bold">{dest.airline}</div>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">🏢</div>
                    <div className="info-text">
                      <div className="muted">Bandara</div>
                      <div className="bold">{dest.airport}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dp-price-row">
              <div className="dp-price">{formatPrice(dest.price)}</div>
              <div className="per-pax">/ pax</div>
            </div>

            <div className="dp-actions">
              <button className="dp-btn dp-btn-primary" onClick={handleBookingClick}>
                Booking
              </button>
              <button
                className="dp-btn dp-btn-outline"
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  })
                }
              >
                Hubungi CS
              </button>
            </div>

            <div className="dp-wishlist-cta">
              <button
                className={`dp-btn dp-btn-wishlist ${liked ? "active" : ""}`}
                onClick={toggleWishlist}
              >
                {liked ? "Tersimpan di Wishlist" : "Tambahkan Ke Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="dp-tabs" role="tablist" aria-label="Konten destinasi">
        <button
          className={`dp-tab ${activeTab === "itenary" ? "dp-tab--active" : ""}`}
          onClick={() => setActiveTab("itenary")}
          role="tab"
          aria-selected={activeTab === "itenary"}
        >
          Itenary
        </button>
        <button
          className={`dp-tab ${activeTab === "booking" ? "dp-tab--active" : ""}`}
          onClick={() => setActiveTab("booking")}
          role="tab"
          aria-selected={activeTab === "booking"}
        >
          Booking
        </button>
        <button
          className={`dp-tab ${activeTab === "testimoni" ? "dp-tab--active" : ""}`}
          onClick={() => setActiveTab("testimoni")}
          role="tab"
          aria-selected={activeTab === "testimoni"}
        >
          Testimoni
        </button>
      </div>

      <div className="dp-content">
        {activeTab === "itenary" && (
          <div className="dp-itenary" role="tabpanel">
            <p>Itinerary belum tersedia untuk destinasi ini.</p>
          </div>
        )}

        {activeTab === "booking" && (
          <div className="dp-booking" role="tabpanel">
            {!submitted ? (
              <form
                className="dp-booking-form"
                onSubmit={submitBooking}
                encType="multipart/form-data"
              >
                <div className="booking-card">
                  <div className="booking-header">Pengisian Form Booking</div>

                  <div className="booking-grid">
                    <div className="field">
                      <label>Nama*</label>
                      <input
                        placeholder="Masukkan nama anda"
                        value={form.name}
                        onChange={(e) => change("name", e.target.value)}
                      />
                      {errors.name && <div className="dp-err">{errors.name}</div>}
                    </div>

                    <div className="field">
                      <label>Tanggal Lahir*</label>
                      <input
                        type="date"
                        value={form.dob as any}
                        onChange={(e) => change("dob", e.target.value)}
                      />
                    </div>

                    <div className="field">
                      <label>Email*</label>
                      <input
                        placeholder="Masukkan email anda"
                        value={form.email}
                        onChange={(e) => change("email", e.target.value)}
                      />
                      {errors.email && <div className="dp-err">{errors.email}</div>}
                    </div>

                    <div className="field">
                      <label>Nomor Telepon*</label>
                      <input
                        placeholder="Masukkan nomor telepon"
                        value={form.phone}
                        onChange={(e) => change("phone", e.target.value)}
                      />
                      {errors.phone && <div className="dp-err">{errors.phone}</div>}
                    </div>

                    <div className="field">
                      <label>Tanggal Keberangkatan*</label>
                      <input
                        type="date"
                        value={form.departDate as any}
                        onChange={(e) => change("departDate", e.target.value)}
                      />
                      {errors.departDate && (
                        <div className="dp-err">{errors.departDate}</div>
                      )}
                    </div>

                    <div className="field">
                      <label>Jumlah Booking*</label>
                      <div className="dp-pax" aria-label="Jumlah peserta">
                        <button
                          type="button"
                          onClick={() => change("pax", Math.max(1, form.pax - 1))}
                        >
                          -
                        </button>
                        <span>{form.pax}</span>
                        <button
                          type="button"
                          onClick={() => change("pax", form.pax + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="field">
                      <label>No Paspor*</label>
                      <input
                        placeholder="Masukkan nomor paspor"
                        value={form.passportNo}
                        onChange={(e) => change("passportNo", e.target.value)}
                      />
                      {errors.passportNo && (
                        <div className="dp-err">{errors.passportNo}</div>
                      )}
                    </div>

                    <div className="field">
                      <label>Tanggal Kadaluarsa*</label>
                      <input
                        type="date"
                        value={form.passportExpiry as any}
                        onChange={(e) => change("passportExpiry", e.target.value)}
                      />
                      {errors.passportExpiry && (
                        <div className="dp-err">{errors.passportExpiry}</div>
                      )}
                    </div>

                    <div className="field">
                      <label>Negara Paspor*</label>
                      <input
                        placeholder="Masukkan negara paspor"
                        value={form.passportCountry}
                        onChange={(e) => change("passportCountry", e.target.value)}
                      />
                      {errors.passportCountry && (
                        <div className="dp-err">{errors.passportCountry}</div>
                      )}
                    </div>

                    <div className="field">
                      <label>Upload Paspor</label>
                      <label className="file-input" aria-label="Upload paspor">
                        <input
                          type="file"
                          accept="image/*,application/pdf"
                          onChange={(e) => {
                            const f = e.target.files?.[0];
                            onPassportFileChange(f || null);
                          }}
                        />
                        <span className="file-placeholder">
                          {form.passportFileName || "Upload paspor anda"}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="booking-note">
                    <small>
                      Informasi Identitas
                      <br />
                      Pastikan masa berlaku paspor setidaknya 6 bulan dari tanggal
                      keberangkatan
                    </small>
                  </div>

                  <div className="booking-submit">
                    <button type="submit" className="dp-btn dp-btn-primary">
                      Booking
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="dp-booking-success" role="status">
                <h3>Booking berhasil</h3>
                <p>Data booking tersimpan. Kami akan menghubungi Anda.</p>
                <button className="dp-btn" onClick={() => navigate("/wishlist")}>
                  Lihat Wishlist
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === "testimoni" && (
          <div className="dp-testimoni" role="tabpanel">
            <div className="dp-test-grid">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="dp-test-card--large">
                  <div className="test-big-img">
                    <img src={t.image} alt={t.name} />
                  </div>

                  <div className="test-info-wrap">
                    <img
                      className="test-avatar--large"
                      src={t.image}
                      alt={t.name}
                    />
                    <div className="test-meta">
                      <div className="test-name--large">{t.name}</div>
                      <div className="test-rating--large">★ {t.rating}</div>
                    </div>
                  </div>

                  <div className="test-desc--large">{t.text}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
