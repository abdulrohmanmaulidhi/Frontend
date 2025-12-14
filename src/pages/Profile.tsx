import React, { useEffect, useRef, useState } from 'react';
import './Profile.css';
import Button from '../components/Button';
import Input from '../components/Input';
import {
  EmailIcon,
  IconPlaceholderProfileIcon,
  ProfileIcon,
  TelephoneIcon,
} from '../assets/icon';
import { getProfile, User } from '../api/auth';
import api from '../api/axios';
import { apiRoutes } from '../api/routes';
import { uploadAvatar } from '../api/users';

interface UserProfile {
  fullname: string;
  email: string;
  phone: string;
  avatar_url: string;
}

export default function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState<string>('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const userData = await getProfile();
        setName(userData.fullname);
        setEmail(userData.email);
        setPhone(userData.phone);
        setAvatar(userData.avatar_url || '');
      } catch (error) {
        console.error('Gagal mengambil data profil:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      const payload = {
        nama: name,
        email: email,
        noTelepon: phone,
        ...(password && { password }), // hanya kirim password jika ada
      };

      await api.put(apiRoutes.profile, payload);

      // Perbarui data di localStorage
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      userData.fullname = name;
      userData.email = email;
      if (avatar) userData.avatar_url = avatar;
      localStorage.setItem('user', JSON.stringify(userData));

      setSuccess(true);
    } catch (error) {
      console.error('Gagal menyimpan profil:', error);
      alert('Gagal menyimpan perubahan profil. Silakan coba lagi.');
    }
  };

  const uploadAvatarImage = async (file: File) => {
    try {
      setUploading(true);

      const response = await uploadAvatar(file);

      // Ambil URL avatar baru dari response
      const avatarUrl = response.data?.avatarUrl;
      setAvatar(avatarUrl);

      // Update juga di localStorage
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      userData.avatar_url = avatarUrl;
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Gagal mengunggah avatar:', error);
      alert('Gagal mengunggah avatar. Silakan coba lagi.');
    } finally {
      setUploading(false);
    }
  };

  const deleteAvatar = async () => {
    try {
      await api.delete(apiRoutes.deleteAvatar);
      setAvatar('');

      // Update juga di localStorage
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      userData.avatar_url = '';
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Gagal menghapus avatar:', error);
      alert('Gagal menghapus avatar. Silakan coba lagi.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validasi tipe file
      if (!file.type.match('image.*')) {
        alert('Silakan pilih file gambar');
        return;
      }

      // Validasi ukuran file (maksimal 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File terlalu besar. Maksimal 5MB.');
        return;
      }

      uploadAvatarImage(file);
    }
  };

  if (loading) {
    return (
      <div className="profile-page user-profile-page">
        <div className="loading-container">
          <p>Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page user-profile-page">
      <header className="profile-hero">
        <div>
          <h1>Edit Profil</h1>
          <p>
            Lengkapi dan perbarui data diri anda untuk pengalaman yang lebih
            maksimal.
          </p>
        </div>
      </header>

      <section className="profile-card">
        <div className="profile-card-head">Informasi Profil</div>

        <div className="profile-avatar-row">
          <div
            className="profile-avatar"
            onClick={() => !uploading && fileInputRef.current?.click()}
          >
            {avatar ? (
              <img src={avatar} alt="Avatar" />
            ) : (
              <span className="profile-avatar-placeholder">
                <img
                  src={IconPlaceholderProfileIcon}
                  style={{
                    background: '#FFB4C4',
                    borderRadius: '5px',
                    width: '2.5rem',
                    height: '2.5rem',
                    padding: '0.5rem',
                  }}
                  alt="profile"
                />
              </span>
            )}
          </div>
          <div className="profile-avatar-actions">
            <Button
              type="button"
              variant="teal-light"
              onClick={() => fileInputRef.current?.click()}
              style={{ fontSize: '15px' }}
              disabled={uploading}
            >
              {uploading ? 'Mengunggah...' : 'Unggah Foto Profil'}
            </Button>
            {avatar && (
              <Button
                type="button"
                variant="pink-danger"
                onClick={deleteAvatar}
                style={{ fontSize: '15px' }}
                disabled={uploading}
              >
                {uploading ? 'Menghapus...' : 'Hapus'}
              </Button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
              disabled={uploading}
            />
          </div>
        </div>

        <div className="profile-divider" />

        <div className="profile-detail-head">Informasi Detail</div>

        <div className="profile-grid">
          <label className="profile-field">
            <span>Nama</span>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Masukkan nama lengkap"
              icon={ProfileIcon}
            />
          </label>
          <label className="profile-field">
            <span>Email</span>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
              icon={EmailIcon}
            />
          </label>
          <label className="profile-field">
            <span>No Telepon</span>
            <Input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Masukkan nomor telepon"
              icon={TelephoneIcon}
            />
          </label>
          <label className="profile-field">
            <span>Password</span>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Masukkan password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              showPasswordToggle
              onPasswordToggle={togglePasswordVisibility}
              isPasswordVisible={showPassword}
            />
          </label>
        </div>

        <div className="profile-actions">
          <Button
            type="button"
            variant="pink-danger"
            onClick={() => window.history.back()}
            style={{ fontSize: '15px' }}
          >
            Batalkan Perubahan
          </Button>
          <Button
            type="button"
            variant="teal-light"
            onClick={handleSave}
            style={{ fontSize: '15px' }}
          >
            Simpan Perubahan
          </Button>
        </div>
      </section>

      {success && (
        <div className="profile-modal">
          <div className="profile-modal-card">
            <div className="profile-modal-icon">✓</div>
            <h3>Perubahan Berhasil Disimpan</h3>
            <button
              type="button"
              className="profile-btn primary"
              onClick={() => setSuccess(false)}
            >
              Selanjutnya
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
