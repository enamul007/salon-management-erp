export type PurchaseOrderStatus =
    | 'Draft'
    | 'Submitted'
    | 'Approved'
    | 'PartiallyReceived'
    | 'Received'
    | 'Cancelled';

export interface PurchaseOrder {
    id: string;
    organizationId: string;
    branchId: string;
    supplierId: string;
    purchaseOrderNumber: string;
    orderDate: string;
    status: PurchaseOrderStatus;
    subtotal: number;
    discountAmount: number;
    taxAmount: number;
    totalAmount: number;
    notes?: string | null;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}