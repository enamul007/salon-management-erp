export type AuditAction =
    | 'Insert'
    | 'Update'
    | 'Delete'
    | 'Cancel'
    | 'Approve'
    | 'Reject';

export interface AuditLog {
    id: string;
    organizationId?: string | null;
    userId?: string | null;
    tableName: string;
    recordId?: string | null;
    action: AuditAction;
    oldValues?: Record<string, unknown> | null;
    newValues?: Record<string, unknown> | null;
    ipAddress?: string | null;
    userAgent?: string | null;
    createdAt: string;
}