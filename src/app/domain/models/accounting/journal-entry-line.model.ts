export interface JournalEntryLine {
    id: string;
    journalEntryId: string;
    chartOfAccountId: string;
    debitAmount: number;
    creditAmount: number;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}