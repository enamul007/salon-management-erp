export type InvoiceStatus =
    | 'Unpaid'
    | 'PartiallyPaid'
    | 'Paid'
    | 'Overpaid'
    | 'Cancelled'
    | 'Refunded';

export interface Invoice {
    id: string;
    organizationId: string;
    branchId: string;
    customerId?: string | null;
    appointmentId?: string | null;
    invoiceNumber: string;
    invoiceDate: string;
    subtotal: number;
    discountAmount: number;
    taxAmount: number;
    totalAmount: number;
    paidAmount: number;
    dueAmount: number;
    status: InvoiceStatus;
    notes?: string | null;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}