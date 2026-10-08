export interface CustomerPackageUsage {
    id: string;
    customerPackageId: string;
    serviceId: string;
    appointmentId?: string | null;
    quantityUsed: number;
    usageDate: string;
    createdAt: string;
    createdBy?: string | null;
}