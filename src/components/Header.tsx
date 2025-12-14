import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import avatarDefault from '../assets/icon/profile-outline.svg';
import { getProfile, type User } from '../api/auth';
import DropdownProfile from './DropdownProfile';
import './Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const avatarRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const fetchUser = useCallback(async () => {
    try {
      setLoadingUser(true);
      const userData = await getProfile();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      // Jika gagal fetch, mungkin user belum login
      setUser(null);
    } finally {
      setLoadingUser(false);
    }
  }, []);

  useEffect(() => {
    // Cek apakah user sudah login berdasarkan adanya token
    const token = localStorage.getItem('token');
    if (token) {
      fetchUser();
    } else {
      setUser(null);
      setLoadingUser(false);
    }
  }, [fetchUser]);

  const forceSolid =
    location.pathname === '/wishlist' ||
    location.pathname.startsWith('/artikel/') ||
    location.pathname === '/riwayat' ||
    location.pathname === '/unduh' ||
    location.pathname === '/review';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAvatarClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Mencegah event bubble
    if (user) {
      setDropdownOpen((prev) => !prev);
    } else {
      navigate('/login');
    }
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <header
      className={`st-header ${scrolled || forceSolid ? 'st-header--solid' : 'st-header--transparent'}`}
    >
      <div className="st-header-inner">
        <div className="st-header-left">
          <Link
            to="/"
            className="st-logo-circle"
            onClick={() => setMenuOpen(false)}
          >
            <img src="/logo.svg" alt="Saleema Tour" />
          </Link>

          <div className="st-divider" />

          <div className="st-brand">
            <Link to="/" className="st-brand-link">
              <span className="st-brand-title">Saleema</span>
              <span className="st-brand-sub">Tour</span>
            </Link>
          </div>
        </div>

        <nav className={`st-nav ${menuOpen ? 'st-nav--open' : ''}`}>
          <NavLink to="/home" className="st-nav-link">
            Home
          </NavLink>
          <NavLink to="/cari-destinasi" className="st-nav-link">
            Destinasi
          </NavLink>
          <NavLink to="/wishlist" className="st-nav-link">
            Wishlist
          </NavLink>
          <NavLink to="/riwayat" className="st-nav-link">
            Riwayat
          </NavLink>
          <NavLink to="/artikel" className="st-nav-link">
            Artikel
          </NavLink>
          <NavLink to="/komunitas" className="st-nav-link">
            Komunitas
          </NavLink>
        </nav>

        {menuOpen && (
          <div
            className="st-drawer-overlay"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <div className="st-header-right">
          <div className="st-avatar-container">
            <div>
              <button className="st-avatar" onClick={handleAvatarClick}>
                {loadingUser ? (
                  <div />
                ) : user?.avatar_url ? (
                  <img src={user.avatar_url} alt="User Avatar" />
                ) : (
                  <img src={avatarDefault} alt="Avatar Default" />
                )}
              </button>
            </div>

            <DropdownProfile
              user={user}
              isOpen={dropdownOpen}
              onClose={closeDropdown}
              anchorRef={avatarRef}
            />
          </div>

          <button
            className="st-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
