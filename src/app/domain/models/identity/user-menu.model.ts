export interface UserMenu {
    id: string;
    userId: string;
    menuId: string;
    isAllowed: boolean;
    canView: boolean;
    canCreate: boolean;
    canEdit: boolean;
    canDelete: boolean;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}