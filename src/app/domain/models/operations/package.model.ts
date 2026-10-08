export interface Package {
    id: string;
    organizationId: string;
    name: string;
    description?: string | null;
    price: number;
    validityDays?: number | null;
    isActive: boolean;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}