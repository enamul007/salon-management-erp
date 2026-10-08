export interface StockLedger {
    id: string;
    branchId: string;
    productId: string;
    transactionType: string;
    referenceId?: string | null;
    quantityIn: number;
    quantityOut: number;
    unitCost: number;
    balanceQuantity: number;
    transactionDate: string;
    notes?: string | null;
    createdAt: string;
    createdBy?: string | null;
}