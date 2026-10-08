export type EmployeeLeaveStatus =
    | 'Pending'
    | 'Approved'
    | 'Rejected'
    | 'Cancelled';

export interface EmployeeLeave {
    id: string;
    employeeId: string;
    leaveType: string;
    startDate: string;
    endDate: string;
    reason?: string | null;
    status: EmployeeLeaveStatus;
    createdAt: string;
    createdBy?: string | null;
    approvedAt?: string | null;
    approvedBy?: string | null;
}