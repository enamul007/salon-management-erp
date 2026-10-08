export interface ServicePrice {
    id: string;
    serviceId: string;
    branchId: string;
    price: number;
    effectiveFrom: string;
    effectiveTo?: string | null;
    createdAt: string;
    createdBy?: string | null;
}