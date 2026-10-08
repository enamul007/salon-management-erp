export interface Membership {
    id: string;
    organizationId: string;
    name: string;
    description?: string | null;
    price: number;
    validityDays: number;
    discountPercentage: number;
    isActive: boolean;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}