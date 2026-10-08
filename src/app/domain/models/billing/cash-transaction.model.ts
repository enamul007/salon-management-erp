export type CashTransactionType =
    | 'Sale'
    | 'Expense'
    | 'Refund'
    | 'Adjustment';

export interface CashTransaction {
    id: string;
    cashRegisterId: string;
    transactionType: CashTransactionType;
    referenceId?: string | null;
    amount: number;
    description?: string | null;
    transactionDate: string;
    createdAt: string;
    createdBy?: string | null;
}