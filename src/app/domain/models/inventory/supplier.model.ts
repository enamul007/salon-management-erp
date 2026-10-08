export interface Supplier {
    id: string;
    organizationId: string;
    name: string;
    phone?: string | null;
    email?: string | null;
    address?: string | null;
    paymentTerms?: string | null;
    isActive: boolean;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}