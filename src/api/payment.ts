import api from "./axios";
import { apiRoutes } from "./routes";

export type PaymentStatus = "unpaid" | "paid" | "refunded" | "failed" | string;

export interface PaymentDetail {
  booking_id: string;
  booking_code: string;
  package_name: string;
  total_price: number;
  whatsapp_number?: string;
  payment_deadline?: string;
  status: PaymentStatus;
}

export interface PaymentUpdatePayload {
  status: PaymentStatus;
}

const unwrapData = <T>(payload: any): T => {
  if (payload?.data !== undefined) return payload.data as T;
  return payload as T;
};

// Fungsi untuk mengambil detail pembayaran berdasarkan booking_id
export async function fetchPaymentDetail(bookingId: string): Promise<PaymentDetail | null> {
  try {
    const res = await api.get(`${apiRoutes.payments}/${bookingId}`); // Endpoint: GET /payments/{booking_id}
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
    console.error("Gagal memuat detail pembayaran", error);
    return null;
  }
}

// Fungsi untuk mengupdate status pembayaran (hanya untuk admin)
// Endpoint: PATCH /payments/{booking_id}/status (admin only) - menggunakan middleware isAdmin di backend
export async function updatePaymentStatus(bookingId: string, status: PaymentStatus): Promise<boolean> {
  try {
    await api.patch(`${apiRoutes.payments}/${bookingId}/status`, { status }); // Endpoint: /payments/{booking_id}/status
    return true;
  } catch (error) {
    console.error("Gagal mengupdate status pembayaran", error);
    return false;
  }
}