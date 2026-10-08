export type AppointmentItemStatus =
    | 'Pending'
    | 'InService'
    | 'Completed'
    | 'Cancelled';

export interface AppointmentItem {
    id: string;
    appointmentId: string;
    serviceId: string;
    staffId?: string | null;
    durationMinutes: number;
    quantity: number;
    unitPrice: number;
    discountAmount: number;
    totalAmount: number;
    status: AppointmentItemStatus;
    notes?: string | null;
    createdAt: string;
    updatedAt?: string | null;
}