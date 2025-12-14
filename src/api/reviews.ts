import api from "./axios";
import { apiRoutes } from "./routes";

export interface ReviewMedia {
  media_url: string;
  media_type: string;
}

export interface TourPackage {
  id: string;
  name: string;
}

export interface UserReview {
  id: string;
  rating: number;
  comment: string;
  is_published: boolean;
  created_at: string;
  tour_package?: TourPackage;
  media?: ReviewMedia[];
}

export interface CreateReviewPayload {
  booking_id: string;
  rating: number;
  comment: string;
}

const unwrapData = <T>(payload: any): T => {
  if (payload?.data !== undefined) return payload.data as T;
  return payload as T;
};

// Menangani respons paginasi dari backend
const handlePaginatedResponse = <T>(response: any): T[] => {
  const data = unwrapData<any>(response);
  if (data.results && Array.isArray(data.results)) {
    return data.results;
  } else if (data.data && Array.isArray(data.data)) {
    return data.data;
  } else if (Array.isArray(data)) {
    return data;
  }
  return [];
};

// Fungsi untuk mengambil review dari user
export async function fetchUserReviews(): Promise<UserReview[]> {
  try {
    const res = await api.get(apiRoutes.reviews);
    const reviews = handlePaginatedResponse<UserReview>(res.data);
    return Array.isArray(reviews) ? reviews : [];
  } catch (error) {
    console.error("Gagal memuat review", error);
    return [];
  }
}

// Fungsi untuk membuat review baru
export async function createReview(payload: CreateReviewPayload, mediaFiles?: File[]): Promise<UserReview | null> {
  try {
    let res;

    if (mediaFiles && mediaFiles.length > 0) {
      // Jika ada file media, kirim sebagai multipart/form-data
      const formData = new FormData();
      formData.append('booking_id', payload.booking_id);
      formData.append('rating', payload.rating.toString());
      formData.append('comment', payload.comment);

      // Tambahkan file media
      mediaFiles.forEach((file, index) => {
        formData.append('media', file);
      });

      res = await api.post(apiRoutes.reviews, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } else {
      // Jika tidak ada file media, kirim sebagai JSON
      res = await api.post(apiRoutes.reviews, payload);
    }

    const data = unwrapData<any>(res.data);

    // Handle different response structures
    if (data?.results) {
      return data.results;
    } else if (data?.data) {
      return data.data;
    } else {
      return data;
    }
  } catch (error) {
    console.error("Gagal membuat review", error);
    throw error;
  }
}