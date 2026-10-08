export type ReviewStatus =
    | 'Pending'
    | 'Published'
    | 'Hidden';

export interface Review {
    id: string;
    customerId: string;
    appointmentId?: string | null;
    serviceId?: string | null;
    rating: number;
    comment?: string | null;
    status: ReviewStatus;
    createdAt: string;
}