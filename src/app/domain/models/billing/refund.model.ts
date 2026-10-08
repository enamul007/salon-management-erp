export type RefundMethod =
    | 'Cash'
    | 'Card'
    | 'bKash'
    | 'Nagad'
    | 'Bank'
    | 'Other';

export type RefundStatus =
    | 'Pending'
    | 'Completed'
    | 'Cancelled';

export interface Refund {
    id: string;
    invoiceId: string;
    paymentId?: string | null;
    refundDate: string;
    amount: number;
    refundMethod: RefundMethod;
    reason: string;
    status: RefundStatus;
    createdAt: string;
    createdBy?: string | null;
}