export type EmployeeAttendanceStatus =
    | 'Present'
    | 'Absent'
    | 'Late'
    | 'HalfDay'
    | 'Leave';

export interface EmployeeAttendance {
    id: string;
    employeeId: string;
    attendanceDate: string;
    checkIn?: string | null;
    checkOut?: string | null;
    status: EmployeeAttendanceStatus;
    notes?: string | null;
    createdAt: string;
}