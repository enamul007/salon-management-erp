export type VerificationMethod =
    | 'email'
    | 'sms'
    | 'whatsapp';

export interface PasswordResetOtp {
    id: string;
    userId?: string | null;
    identifier: string;
    verificationMethod: VerificationMethod;
    otpHash: string;
    expiresAt: string;
    verifiedAt?: string | null;
    consumedAt?: string | null;
    attemptCount: number;
    maxAttempts: number;
    isUsed: boolean;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
}