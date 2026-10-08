export interface Menu {
    id: string;
    parentId?: string | null;
    name: string;
    route?: string | null;
    icon?: string | null;
    sortOrder?: number | null;
    isActive: boolean;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}