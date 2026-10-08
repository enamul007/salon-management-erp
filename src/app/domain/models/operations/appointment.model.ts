export type AppointmentStatus =
    | 'Pending'
    | 'Confirmed'
    | 'CheckedIn'
    | 'InService'
    | 'Completed'
    | 'Cancelled'
    | 'NoShow';

export interface Appointment {
    id: string;
    organizationId: string;
    branchId: string;
    customerId: string;
    appointmentDate: string;
    startTime: string;
    endTime: string;
    status: AppointmentStatus;
    notes?: string | null;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}