export type EmployeeCommissionType =
    | 'Percentage'
    | 'Fixed';

export type EmployeeCommissionStatus =
    | 'Pending'
    | 'Approved'
    | 'Paid'
    | 'Reversed';

export interface EmployeeCommission {
    id: string;
    employeeId: string;
    invoiceId?: string | null;
    appointmentItemId?: string | null;
    commissionType: EmployeeCommissionType;
    commissionRate?: number | null;
    commissionAmount: number;
    status: EmployeeCommissionStatus;
    createdAt: string;
    createdBy?: string | null;
}