# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Muslimah Travel — Frontend

Ringkasan
- **Stack:** React + TypeScript + Vite
- **Folder sumber utama:** `src/`
- **Build / dev tool:** Vite

Panduan singkat ini berfokus pada:
- Menjalankan aplikasi secara lokal
- Integrasi frontend ↔ backend (konfigurasi env, contoh request, CORS, auth)
- Ringkasan struktur kode dan file API penting

Prerequisites
- Node.js (disarankan v18+)
- npm (atau pnpm / yarn)
- Git

Menjalankan proyek (development)
```powershell
cd .\frontend
npm install
npm run dev
```

Build produksi
```powershell
npm run build
npm run preview
```

Environment variables (Vite)
- Buat file `.env` di folder proyek (sudah di-.gitignore).
- Gunakan prefix `VITE_` untuk variabel yang ingin diakses di runtime.

Contoh `.env` untuk integrasi backend:
```
VITE_API_URL=http://localhost:4000
VITE_API_PREFIX=/api/v1
```

Catatan: file `src/api/axios.ts` sudah membaca `import.meta.env.VITE_API_URL` dan `src/api/routes.ts` membaca `VITE_API_PREFIX`.

Integrasi Frontend ↔ Backend
1. Base URL
   - Set `VITE_API_URL` ke alamat backend Anda (mis. `http://localhost:4000`).
   - Jika backend menaruh endpoint di prefix (mis. `/api/v1`), set `VITE_API_PREFIX`.

2. CORS
   - Pastikan backend mengizinkan origin frontend (mis. `http://localhost:5173` ketika Vite dev).
   - Karena frontend mengirim token Bearer di header Authorization (disimpan di `localStorage`), tidak perlu credentials cookie, namun jika backend memakai cookie-based session, konfigurasikan `Access-Control-Allow-Credentials` dan `withCredentials` pada axios.

3. Auth
   - Endpoint login pada backend harus mengembalikan objek dengan `data.token` (lihat `src/api/auth.ts`) dan informasi user di `data`.
   - Setelah login, token disimpan di `localStorage` dengan key `token`. Axios interceptor menambahkan header `Authorization: Bearer <token>` otomatis.

Contoh skenario API dan kontrak (contoh minimal)
- Login
  - Request: POST `${VITE_API_URL}${VITE_API_PREFIX}/user/login`
    - Body: { email: string, password: string }
  - Response: { data: { id, fullname, email, role, avatar_url?, token, refreshToken? } }

- Get list destinasi
  - Request: GET `${VITE_API_URL}${VITE_API_PREFIX}/destinations`
  - Response (contoh): { data: [ { id, title, image_url, excerpt, price, slug } ] }

- Get single destination
  - Request: GET `${VITE_API_URL}${VITE_API_PREFIX}/destinations/:id`
  - Response: { data: { id, title, description, images: [], packages: [] } }

- Create order / booking (authed)
  - Request: POST `${VITE_API_URL}${VITE_API_PREFIX}/orders`
    - Body: { packageId, customer: { name, phone, email }, passengers: [...] }
  - Response: { data: { orderId, status, paymentUrl? } }

Catatan: struktur `data` di atas hanya contoh — sesuaikan dengan backend Anda. Jika backend mengembalikan format berbeda, sesuaikan `src/api/*` atau ubah backend agar konsisten.

Contoh penggunaan API di frontend
```ts
// src/api/auth.ts (sudah ada)
import { login } from './api/auth';

await login('user@example.com', 'password');
// token disimpan otomatis; axios akan menambahkan header Authorization

// mengambil destinasi
import api from './api/axios';
const res = await api.get('/destinations');
console.log(res.data);
```

Debugging integrasi
- Pastikan `VITE_API_URL` benar dan backend berjalan.
- Buka DevTools Network untuk melihat request / response dan header Authorization.
- Jika muncul error CORS: periksa header `Access-Control-Allow-Origin` di backend dan origin yang diizinkan.

Struktur repository (ringkasan)
- `src/` — kode sumber React
  - `src/api/` — helper axios, route constants, dan API helper (`auth.ts`, `axios.ts`, `routes.ts`)
  - `src/components/` — komponen UI (kartu, header, footer, dsb.)
  - `src/pages/` — halaman (Home, DestinationPage, Wishlist, dsb.)
  - `src/assets/` — gambar dan ikon

File API penting
- `src/api/axios.ts` — instance axios yang membaca `VITE_API_URL` + interceptors untuk Authorization
- `src/api/routes.ts` — helper untuk path API dengan `VITE_API_PREFIX`
- `src/api/auth.ts` — fungsi login/register/getProfile yang menyimpan token dan user di `localStorage`

Tips pengembangan
- Hindari menyimpan token sensitif di localStorage di aplikasi produksi jika keamanan menjadi perhatian besar; pertimbangkan httpOnly cookie atau refresh-token flow.
- Pertahankan kontrak API yang konsisten supaya helper di `src/api` tidak perlu banyak custom parsing.

Testing & Linting
- `npm run lint` — jalankan ESLint.
- Tambahkan test jika diperlukan (mis. Jest + React Testing Library) untuk komponen dan helper API.

Deployment singkat
- Build: `npm run build`
- Deploy folder `dist/` ke static hosting (Netlify, Vercel, GitHub Pages) atau serve melalui CDN.
- Pastikan environment production (VITE_API_URL) mengarah ke backend produksi.

Contributing
- Buat branch feature: `git checkout -b feat/your-feature`
- Commit perubahan dengan pesan deskriptif.
- Buka PR ke `main` dan minta review.

Jika Anda mau, saya bisa:
- Menambahkan contoh Postman collection atau OpenAPI spec (minimal) untuk memudahkan backend/frontend alignment.
- Menyesuaikan README dengan contoh respon nyata dari backend Anda jika Anda memberikan beberapa contoh JSON response.

---
_README ini dibuat/diupdate otomatis pada 2025-12-12._
