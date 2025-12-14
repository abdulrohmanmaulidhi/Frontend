import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './ForgotPassword.css';
import Input from '../components/Input';
import Button from '../components/Button';
import { requestPasswordReset, resetPassword } from '../api/users';
import { ToastContainer, ToastItem } from '../components/Toast';
import {
  ForgotPasswordEmailPng,
  ForgotPasswordPng,
  LogoImage,
} from '../assets/images';
import { EmailIcon } from '../assets/icon';

type Step = 'email' | 'reset';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState<Step>(() => {
    // Check if there's a token in the URL to determine the current step
    return searchParams.get('token') ? 'reset' : 'email';
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [loading, setLoading] = useState(false);

  // Use the token from URL if available
  const tokenFromUrl = searchParams.get('token') || '';

  const validateEmail = (val: string) => /^\S+@\S+\.\S+$/.test(val);

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

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      addToast('Format email tidak valid', 'error', 'Email Tidak Valid');
      return;
    }

    setLoading(true);

    try {
      const result = await requestPasswordReset(email);
      if (result) {
        addToast(
          'Instruksi pengaturan ulang kata sandi telah dikirim ke email Anda',
          'success',
          'Instruksi Dikirim'
        );
      } else {
        addToast(
          'Terjadi kesalahan saat mengirim email instruksi',
          'error',
          'Gagal Mengirim'
        );
      }
    } catch (err: any) {
      addToast(
        err.message || 'Terjadi kesalahan saat mengirim email instruksi',
        'error',
        'Gagal Mengirim'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim().length < 8) {
      addToast(
        'Password minimal harus 8 karakter',
        'error',
        'Panjang Password'
      );
      return;
    }
    if (password !== confirm) {
      addToast(
        'Password konfirmasi tidak cocok',
        'error',
        'Konfirmasi Tidak Cocok'
      );
      return;
    }

    setLoading(true);

    try {
      // Use the actual token from URL parameters
      const result = await resetPassword(tokenFromUrl, password);
      if (result) {
        addToast(
          'Password Anda telah berhasil diperbarui',
          'success',
          'Password Diperbarui'
        );
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Redirect after 2 seconds to let user see success message
      } else {
        addToast(
          'Terjadi kesalahan saat mengatur ulang password',
          'error',
          'Gagal Memperbarui'
        );
      }
    } catch (err: any) {
      addToast(
        err.message || 'Terjadi kesalahan saat mengatur ulang password',
        'error',
        'Gagal Memperbarui'
      );
    } finally {
      setLoading(false);
    }
  };

  // Get background image based on current step
  const heroImage =
    step === 'email' ? ForgotPasswordPng : ForgotPasswordEmailPng;
  const heroTitle = step === 'email' ? 'Masukkan Email' : 'Buat Password Baru';
  const heroCopy =
    step === 'email'
      ? 'Temukan destinasi terbaik yang telah dikurasi, bekali diri dengan panduan perjalanan terlengkap.'
      : 'Akses kurasi destinasi halal, dan perluas jejaring Anda dengan komunitas Muslimah yang inspiratif.';

  return (
    <div className="fp-root">
      <div className="fp-shell">
        <div
          className="fp-hero"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="fp-hero-overlay" />
          <div className="fp-hero-brand">
            <div className="fp-logo-circle">
              <Link to="/">
                <img
                  src={LogoImage}
                  alt="Saleema Tour"
                  style={{ cursor: 'pointer' }}
                />
              </Link>
            </div>
            <div className="fp-brand-text">
              <span className="fp-brand-title">Saleema</span>
              <span className="fp-brand-sub">Tour</span>
            </div>
          </div>
          <div className="fp-hero-copy">
            <p>{heroCopy}</p>
            <span className="fp-hero-line" />
          </div>
        </div>

        <div className="fp-form-pane">
          <div className="fp-form-card">
            <h1 className="fp-title">{heroTitle}</h1>

            <form
              onSubmit={
                step === 'email' ? handleEmailSubmit : handleResetSubmit
              }
              className="fp-form"
            >
              {step === 'email' && (
                <Input
                  label="Email"
                  type="email"
                  placeholder="Masukkan email.."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  icon={EmailIcon}
                />
              )}

              {step === 'reset' && (
                <>
                  <Input
                    label="Password"
                    type={showPwd ? 'text' : 'password'}
                    placeholder="Masukkan password baru..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    showPasswordToggle
                    onPasswordToggle={() => setShowPwd(!showPwd)}
                    isPasswordVisible={showPwd}
                  />

                  <Input
                    label="Konfirmasi Password"
                    type={showConfirmPwd ? 'text' : 'password'}
                    placeholder="Masukkan ulang password baru.."
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    required
                    showPasswordToggle
                    onPasswordToggle={() => setShowConfirmPwd(!showConfirmPwd)}
                    isPasswordVisible={showConfirmPwd}
                  />
                </>
              )}

              <Button
                type="submit"
                variant="pink-light"
                disabled={loading}
                style={{ fontSize: '0.9rem' }}
              >
                {loading
                  ? step === 'email'
                    ? 'Mengirim...'
                    : 'Mengatur Ulang...'
                  : step === 'email'
                    ? 'Kirim Link Reset'
                    : 'Atur Ulang Password'}
              </Button>
            </form>

            {step === 'email' && (
              <div className="fp-bottom">
                <span>Belum punya akun? </span>
                <Link to="/signup" className="fp-link">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
}
