export type DiscountType =
    | 'Percentage'
    | 'Fixed';

export interface PromoCode {
    id: string;
    organizationId: string;
    code: string;
    discountType: DiscountType;
    discountValue: number;
    validFrom: string;
    validTo: string;
    maxUsageLimit: number;
    currentUsageCount: number;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}