import './Login.css';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { login as loginApi } from '../api/auth';
import Input from '../components/Input';
import Button from '../components/Button';
import { ToastContainer, ToastItem } from '../components/Toast';
import { EmailIcon } from '../assets/icon';
import { LogoImage } from '../assets/images';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const addToast = (
    message: string,
    variant: 'success' | 'error' | 'warning' | 'info' | 'pink' = 'info',
    title?: string
  ) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    setToasts((prev) => [...prev, { id, message, variant, title }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      await loginApi(email, password);

      if (remember) {
        localStorage.setItem('remember_email', email);
      } else {
        localStorage.removeItem('remember_email');
      }

      localStorage.setItem('isLoggedIn', '1');
      const redirectTarget =
        email === 'admin@saleema.test' ? '/admin' : location.state?.from;
      const bookingIntent = location.state?.booking;
      navigate(redirectTarget ?? '/home', {
        state: bookingIntent ? { booking: true } : undefined,
      });
    } catch (err: any) {
      addToast(
        err.message || 'Login gagal, silakan coba lagi',
        'error',
        'Login Gagal'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-root">
      <div className="auth-card">
        <div className="auth-hero">
          <div className="auth-hero-inner">
            <div className="auth-hero-brand">
              <div className="auth-hero-logo">
                <Link to="/">
                  <img
                    src={LogoImage}
                    alt="Saleema Tour"
                    style={{ cursor: 'pointer' }}
                  />
                </Link>
              </div>
              <div className="auth-hero-textbrand">
                <span className="auth-hero-title">Saleema</span>
                <span className="auth-hero-sub">Tour</span>
              </div>
            </div>

            <div className="auth-hero-copy">
              <p>
                Temukan destinasi terbaik, panduan lengkap, hingga komunitas
                muslimah yang siap mendukung perjalananmu!
              </p>
              <span className="auth-hero-line" />
            </div>
          </div>
        </div>

        <div className="auth-form-wrap">
          <div className="auth-form-card">
            <h1 className="auth-title">Sign In</h1>

            <form onSubmit={handleSubmit} className="auth-form">
              <Input
                label="Email"
                type="email"
                placeholder="Masukkan email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                icon={EmailIcon}
              />

              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Masukkan password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                showPasswordToggle
                onPasswordToggle={togglePasswordVisibility}
                isPasswordVisible={showPassword}
              />

              <div className="auth-row auth-row-small">
                <label className="auth-remember">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  />
                  <span>Ingat saya</span>
                </label>
                <button
                  type="button"
                  className="auth-link-button auth-forgot"
                  onClick={() => navigate('/forgot-password')}
                >
                  Lupa Password?
                </button>
              </div>

              <Button type="submit" disabled={loading} variant="pink-light">
                {loading ? 'Memproses...' : 'Sign In'}
              </Button>

              <div className="auth-row auth-row-center auth-bottom-text">
                <span>Belum punya akun? </span>
                <Link to="/signup" className="auth-link">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
}
