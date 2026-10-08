export interface ChartOfAccount {
    id: string;
    organizationId: string;
    accountCode: string;
    accountName: string;
    accountType: string;
    isActive: boolean;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}