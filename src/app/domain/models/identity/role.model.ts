export interface Role {
    id: string;
    name: string;
    description?: string | null;
    isActive: boolean;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}