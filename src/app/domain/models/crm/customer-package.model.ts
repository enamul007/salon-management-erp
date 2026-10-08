export type CustomerPackageStatus =
    | 'Active'
    | 'Expired'
    | 'Completed'
    | 'Cancelled';

export interface CustomerPackage {
    id: string;
    customerId: string;
    packageId: string;
    purchaseDate: string;
    startDate: string;
    endDate?: string | null;
    purchaseAmount: number;
    status: CustomerPackageStatus;
    createdAt: string;
    createdBy?: string | null;
}