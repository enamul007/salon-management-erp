export interface Organization {
    id: string;
    name: string;
    code: string;
    phone?: string | null;
    email?: string | null;
    address?: string | null;
    isActive: boolean;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}