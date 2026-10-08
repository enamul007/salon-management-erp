export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    passwordHash: string;
    refreshToken?: string | null;
    refreshTokenExpiry?: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt?: string | null;
    phoneNumber?: string | null;
}