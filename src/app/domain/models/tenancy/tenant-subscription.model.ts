export interface TenantSubscription {
    id: string;
    organizationId: string;
    subscriptionPlanId: string;
    validFrom: string;
    validTo: string;
    status: string;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}