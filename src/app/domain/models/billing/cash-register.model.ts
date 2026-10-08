export type CashRegisterStatus =
    | 'Open'
    | 'Closed';

export interface CashRegister {
    id: string;
    branchId: string;
    registerDate: string;
    openingCash: number;
    closingCash?: number | null;
    expectedCash?: number | null;
    cashDifference?: number | null;
    status: CashRegisterStatus;
    openedAt: string;
    closedAt?: string | null;
    openedBy?: string | null;
    closedBy?: string | null;
}