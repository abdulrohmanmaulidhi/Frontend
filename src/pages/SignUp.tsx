// src/pages/SignUp.tsx
import './SignUp.css';
import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register as registerApi } from '../api/auth'; // axios helper
import Input from '../components/Input';
import Button from '../components/Button';
import { ToastContainer, ToastItem } from '../components/Toast';
import { EmailIcon, ProfileIcon, TelephoneIcon } from '../assets/icon';
import { LogoImage } from '../assets/images';

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const navigate = useNavigate();

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

    if (!agree) {
      addToast(
        'Silakan setujui kebijakan privasi terlebih dahulu',
        'error',
        'Kebijakan Privasi'
      );
      return;
    }

    if (password !== confirm) {
      addToast(
        'Password dan konfirmasi tidak sama',
        'error',
        'Konfirmasi Password'
      );
      return;
    }

    try {
      setLoading(true);

      // kirim ke backend with all required fields
      await registerApi(fullName, email, password, agree, phone);

      addToast(
        'Akun Anda telah berhasil dibuat',
        'success',
        'Registrasi Berhasil'
      );
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Redirect after 2 seconds to let user see success message
    } catch (err: any) {
      addToast(
        err.message || 'Registrasi gagal, silakan coba lagi',
        'error',
        'Registrasi Gagal'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-root">
      <div className="auth-card">
        <div className="auth-hero">
          <div className="auth-hero-inner-register">
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
            <h1 className="auth-title">Sign Up</h1>

            <form onSubmit={handleSubmit} className="auth-form">
              <Input
                label="Nama Lengkap"
                type="text"
                placeholder="Masukkan nama lengkap..."
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                icon={ProfileIcon}
              />

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
                label="Nomor Telepon"
                type="tel"
                placeholder="Masukkan nomor telepon..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                icon={TelephoneIcon}
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

              <Input
                label="Konfirmasi Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Masukkan kembali password..."
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                showPasswordToggle
                onPasswordToggle={togglePasswordVisibility}
                isPasswordVisible={showPassword}
              />

              <div className="auth-row auth-row-small">
                <label className="auth-remember">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    required
                  />
                  <span>
                    Saya setuju dengan semua kebijakan privasi yang ada
                  </span>
                </label>
              </div>

              <Button type="submit" disabled={loading} variant="pink-light">
                {loading ? 'Memproses...' : 'Sign Up'}
              </Button>

              <div className="auth-row auth-row-center auth-bottom-text">
                <span>Sudah punya akun? </span>
                <Link to="/login" className="auth-link">
                  Sign In
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
