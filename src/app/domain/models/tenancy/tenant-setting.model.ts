export interface TenantSetting {
    id: string;
    organizationId: string;
    timeZone: string;
    defaultCurrency: string;
    taxRatePercentage: number;
    receiptLogoUrl?: string | null;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}