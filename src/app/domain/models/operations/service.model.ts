export interface Service {
    id: string;
    organizationId: string;
    serviceCategoryId: string;
    name: string;
    description?: string | null;
    durationMinutes: number;
    isActive: boolean;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}