export type CustomerMembershipStatus =
    | 'Active'
    | 'Expired'
    | 'Cancelled';

export interface CustomerMembership {
    id: string;
    customerId: string;
    membershipId: string;
    startDate: string;
    endDate: string;
    purchaseAmount: number;
    status: CustomerMembershipStatus;
    createdAt: string;
    createdBy?: string | null;
}