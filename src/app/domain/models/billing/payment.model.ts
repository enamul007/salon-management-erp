export type PaymentMethod =
    | 'Cash'
    | 'Card'
    | 'bKash'
    | 'Nagad'
    | 'Bank'
    | 'Other';

export type PaymentStatus =
    | 'Pending'
    | 'Completed'
    | 'Cancelled'
    | 'Refunded';

export interface Payment {
    id: string;
    invoiceId: string;
    paymentDate: string;
    amount: number;
    paymentMethod: PaymentMethod;
    referenceNumber?: string | null;
    status: PaymentStatus;
    notes?: string | null;
    createdAt: string;
    createdBy?: string | null;
}