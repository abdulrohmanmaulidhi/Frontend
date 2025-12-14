import api from './axios';
import { apiRoutes } from './routes';

export type User = {
  id: string;
  fullname: string;
  email: string;
  role: string;
  avatar_url?: string;
  phone?: string;
};

type BackendLoginResponse = {
  success: boolean;
  message: string;
  data: {
    userId: string;
    nama: string;
    email: string;
    role: string;
    token: string;
    profileImage?: string;
  };
};

type BackendRegisterResponse = {
  success: boolean;
  message: string;
  data: {
    userId: string;
    token: string;
  };
};

type ProfileResponse = {
  success: boolean;
  message: string;
  data: {
    nama: string;
    email: string;
    noTelepon?: string;
    profileImage?: string;
  };
};

export async function login(email: string, password: string) {
  const res = await api.post<BackendLoginResponse>(apiRoutes.login, {
    email,
    password,
  });

  // Map backend response to frontend User type
  const backendData = res.data.data;
  const user: User = {
    id: backendData.userId,
    fullname: backendData.nama,
    email: backendData.email,
    role: backendData.role,
    avatar_url: backendData.profileImage,
  };

  // simpan ke localStorage
  localStorage.setItem('token', backendData.token);
  localStorage.setItem(
    'user',
    JSON.stringify({
      id: user.id,
      fullname: user.fullname,
      email: user.email,
      role: user.role,
      avatar_url: user.avatar_url,
    })
  );

  return user;
}

export function isAdminUser(email?: string) {
  return email?.toLowerCase().includes('admin');
}

export async function register(
  fullname: string,
  email: string,
  password: string,
  setujuKebijakan: boolean,
  phone: string = ''
) {
  // Include konfirmasiPassword as the same as password for now
  const payload = {
    nama: fullname,
    email,
    password,
    noTelepon: phone,
    konfirmasiPassword: password, // same as password for now
    setujuKebijakan,
  };

  const res = await api.post<BackendRegisterResponse>(
    apiRoutes.register,
    payload
  );

  // Map backend response to frontend User type
  const backendData = res.data.data;

  // For registration, we need to get the user profile to get all required fields
  const user: User = {
    id: backendData.userId,
    fullname: fullname, // Use the provided fullname since backend doesn't return it immediately
    email: email,
    role: 'user', // Default role for new users
    avatar_url: undefined,
  };

  if (backendData.token) {
    localStorage.setItem('token', backendData.token);
  }

  localStorage.setItem('user', JSON.stringify(user));
  return user;
}

export async function getProfile() {
  const raw = localStorage.getItem('user');
  if (raw) {
    const storedUser = JSON.parse(raw);
    // Try to update with fresh data from server
    try {
      const res = await api.get<ProfileResponse>(apiRoutes.profile);
      const backendData = res.data.data;

      // Update stored user with fresh data while keeping id and role
      const updatedUser: User = {
        id: storedUser.id, // Keep the id from localStorage
        fullname: backendData.nama,
        email: backendData.email,
        role: storedUser.role, // Keep the role from localStorage
        phone: backendData.noTelepon,
        avatar_url: backendData.profileImage,
      };

      // Update localStorage with fresh data
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    } catch (error) {
      // If API call fails, return stored user
      return storedUser;
    }
  }

  // If no stored user, fetch from API
  const res = await api.get<ProfileResponse>(apiRoutes.profile);
  const backendData = res.data.data;

  // For this case we need to get the id and role from the token payload or elsewhere
  // Since the profile endpoint doesn't return id and role, we'll have to handle this differently
  const user: User = {
    id: '', // id is not returned by profile endpoint, so we use empty string as fallback
    fullname: backendData.nama,
    email: backendData.email,
    role: '', // role is not returned by profile endpoint, so we use empty string as fallback
    avatar_url: backendData.profileImage,
  };

  return user;
}

// Fungsi untuk logout
export async function logout(): Promise<boolean> {
  try {
    await api.post(apiRoutes.logout);
    // Hapus data dari localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  } catch (error) {
    console.error('Gagal logout', error);
    // Tetap hapus data dari localStorage walaupun API gagal
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }
}
