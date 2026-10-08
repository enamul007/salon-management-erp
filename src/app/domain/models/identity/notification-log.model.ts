export interface NotificationLog {
    id: string;
    organizationId: string;
    customerId?: string | null;
    type: string;
    message: string;
    sentAt: string;
    status: string;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}