export interface EmployeeSchedule {
    id: string;
    employeeId: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    breakStartTime?: string | null;
    breakEndTime?: string | null;
    isDayOff: boolean;
    createdAt: string;
    updatedAt?: string | null;
}