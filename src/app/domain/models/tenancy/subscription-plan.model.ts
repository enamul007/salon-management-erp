export interface SubscriptionPlan {
    id: string;
    name: string;
    pricePerMonthAmount: number;
    pricePerMonthCurrency: string;
    maxBranches: number;
    maxUsers: number;
    isActive?: boolean | null;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}