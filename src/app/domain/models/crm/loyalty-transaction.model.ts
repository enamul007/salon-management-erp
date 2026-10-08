export type LoyaltyTransactionType =
    | 'Earn'
    | 'Redeem'
    | 'Adjustment'
    | 'Reversal'
    | 'Expiry';

export interface LoyaltyTransaction {
    id: string;
    customerId: string;
    invoiceId?: string | null;
    transactionType: LoyaltyTransactionType;
    points: number;
    balanceAfter: number;
    transactionDate: string;
    notes?: string | null;
    createdAt: string;
    createdBy?: string | null;
}