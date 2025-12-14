import api from './axios';
import { apiRoutes } from './routes';

// Interface untuk forgot password dan reset password
export interface ForgotPasswordPayload {
  email: string;
}

export interface ResetPasswordPayload {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface UploadAvatarPayload {
  avatar: File;
}

export interface UserProfileUpdate {
  fullname?: string;
  email?: string;
  phone?: string;
}

// Interface untuk admin user management
export interface AdminUserUpdate {
  fullname?: string;
  email?: string;
  phone?: string;
  role?: string;
}

// Interface untuk user data
export interface AdminUser {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: string;
  registered: string;
}

export interface UploadAvatarPayload {
  avatar: File;
}

export interface UploadAvatarResponse {
  success: boolean;
  message: string;
  data?: {
    avatarUrl: any;
  };
}

// Fungsi untuk forgot password
export async function requestPasswordReset(email: string): Promise<boolean> {
  try {
    const payload: ForgotPasswordPayload = { email };
    await api.post(apiRoutes.forgotPassword, payload);
    return true;
  } catch (error) {
    console.error('Gagal mengirim permintaan reset password', error);
    return false;
  }
}

// Fungsi untuk reset password
export async function resetPassword(
  token: string,
  newPassword: string,
  confirmPassword?: string
): Promise<boolean> {
  try {
    // Only send newPassword to match backend expectation
    await api.post(apiRoutes.resetPassword, {
      token,
      newPassword,
    });
    return true;
  } catch (error) {
    console.error('Gagal mereset password', error);
    return false;
  }
}

// Fungsi untuk upload avatar
export async function uploadAvatar(
  avatarFile: File
): Promise<UploadAvatarResponse> {
  try {
    const formData = new FormData();
    formData.append('avatar', avatarFile);

    const response = await api.put(apiRoutes.uploadAvatar, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return {
      success: true,
      message: 'Berhasil mengunggah avatar',
      data: {
        avatarUrl: response.data?.data?.avatarUrl || response.data?.avatarUrl,
      },
    };
  } catch (error: any) {
    console.error('Gagal mengunggah avatar', error);
    return {
      success: false,
      message:
        error.response?.data?.message ||
        error.message ||
        'Gagal mengunggah avatar',
    };
  }
}

// Fungsi untuk delete avatar
export async function deleteAvatar(): Promise<boolean> {
  try {
    await api.delete(apiRoutes.deleteAvatar);
    return true;
  } catch (error) {
    console.error('Gagal menghapus avatar', error);
    return false;
  }
}

// Fungsi untuk update profile
export async function updateProfile(
  payload: UserProfileUpdate
): Promise<boolean> {
  try {
    await api.put(apiRoutes.profile, payload);
    return true;
  } catch (error) {
    console.error('Gagal memperbarui profil', error);
    return false;
  }
}

// Fungsi untuk mengambil semua user (hanya untuk admin)
export async function fetchUsers(): Promise<AdminUser[]> {
  try {
    const res = await api.get(apiRoutes.users);
    const data = res.data;

    // Handle different response structures
    if (data?.results && Array.isArray(data.results)) {
      return data.results.map((user: any) => ({
        id: user.id,
        name: user.fullname || user.nama || user.name || '-',
        email: user.email || '-',
        phone: user.phone || user.telephone || '-',
        role: user.role || user.roles || 'user',
        registered:
          user.created_at || user.registered_at || user.createdAt || '-',
      }));
    } else if (data?.data && Array.isArray(data.data)) {
      return data.data.map((user: any) => ({
        id: user.id,
        name: user.fullname || user.nama || user.name || '-',
        email: user.email || '-',
        phone: user.phone || user.telephone || '-',
        role: user.role || user.roles || 'user',
        registered:
          user.created_at || user.registered_at || user.createdAt || '-',
      }));
    } else {
      return [];
    }
  } catch (error) {
    console.error('Gagal mengambil daftar pengguna', error);
    return [];
  }
}

// Fungsi untuk mendapatkan user berdasarkan ID (hanya untuk admin)
export async function getUserById(id: string | number): Promise<any | null> {
  try {
    const res = await api.get(`${apiRoutes.users}/${id}`);
    return res.data;
  } catch (error) {
    console.error('Gagal mengambil data pengguna', error);
    return null;
  }
}

// Fungsi untuk memperbarui user (hanya untuk admin)
export async function updateUserById(
  id: string | number,
  payload: AdminUserUpdate
): Promise<boolean> {
  try {
    await api.put(`${apiRoutes.users}/${id}`, payload);
    return true;
  } catch (error) {
    console.error('Gagal memperbarui pengguna', error);
    return false;
  }
}

// Fungsi untuk menghapus user (hanya untuk admin)
export async function deleteUser(id: string | number): Promise<boolean> {
  try {
    await api.delete(`${apiRoutes.users}/${id}`);
    return true;
  } catch (error) {
    console.error('Gagal menghapus pengguna', error);
    return false;
  }
}
