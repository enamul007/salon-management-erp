export type CustomerGender =
    | 'Male'
    | 'Female'
    | 'Other';

export interface Customer {
    id: string;
    organizationId: string;
    firstName: string;
    lastName?: string | null;
    phone: string;
    email?: string | null;
    gender?: CustomerGender | null;
    dateOfBirth?: string | null;
    address?: string | null;
    notes?: string | null;
    isActive: boolean;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}