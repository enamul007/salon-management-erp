export interface Branch {
    id: string;
    organizationId: string;
    name: string;
    code: string;
    phone?: string | null;
    email?: string | null;
    address?: string | null;
    openingTime?: string | null;
    closingTime?: string | null;
    isActive: boolean;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}