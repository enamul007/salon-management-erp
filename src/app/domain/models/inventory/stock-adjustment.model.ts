export type StockAdjustmentType =
    | 'Increase'
    | 'Decrease';

export interface StockAdjustment {
    id: string;
    branchId: string;
    productId: string;
    adjustmentType: StockAdjustmentType;
    quantity: number;
    reason: string;
    createdAt: string;
    createdBy?: string | null;
}