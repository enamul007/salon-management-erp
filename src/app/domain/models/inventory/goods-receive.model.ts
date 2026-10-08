export type GoodsReceiveStatus =
    | 'Draft'
    | 'Posted'
    | 'Cancelled';

export interface GoodsReceive {
    id: string;
    organizationId: string;
    branchId: string;
    supplierId: string;
    purchaseOrderId?: string | null;
    receiveNumber: string;
    receiveDate: string;
    status: GoodsReceiveStatus;
    notes?: string | null;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}