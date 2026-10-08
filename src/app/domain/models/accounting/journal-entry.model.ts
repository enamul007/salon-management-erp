export interface JournalEntry {
    id: string;
    organizationId: string;
    referenceNumber: string;
    entryDate: string;
    description?: string | null;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}