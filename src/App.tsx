// src/App.tsx
import "./components/Footer.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Riwayat = lazy(() => import("./pages/Riwayat"));
const Artikel = lazy(() => import("./pages/Artikel"));
const Komunitas = lazy(() => import("./pages/Komunitas"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const DestinationPage = lazy(() => import("./pages/DestinationPage"));

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppWrapper() {
  const location = useLocation();

  const hideHeaderFooterPaths = ["/login", "/signup"];
  const hideHeaderFooter = hideHeaderFooterPaths.some((p) => location.pathname.startsWith(p));

  return (
    <>
      <ScrollToTop />
      {!hideHeaderFooter && <Header />}

      <Suspense fallback={<div style={{minHeight: '60vh'}}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/riwayat" element={<Riwayat />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/komunitas" element={<Komunitas />} />
          <Route path="/destinasi/:id" element={<DestinationPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
