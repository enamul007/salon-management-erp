export interface Employee {
    id: string;
    organizationId: string;
    employeeCode: string;
    firstName: string;
    lastName?: string | null;
    phone?: string | null;
    email?: string | null;
    designation?: string | null;
    joiningDate?: string | null;
    basicSalary: number;
    isActive: boolean;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
    status: number;
}