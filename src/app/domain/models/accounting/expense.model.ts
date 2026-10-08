export interface Expense {
    id: string;
    organizationId: string;
    branchId: string;
    expenseCategoryId: string;
    expenseDate: string;
    amount: number;
    paymentMethod?: string | null;
    description?: string | null;
    status: ExpenseStatus;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}

export type ExpenseStatus =
    | 'Pending'
    | 'Approved'
    | 'Rejected'
    | 'Cancelled';