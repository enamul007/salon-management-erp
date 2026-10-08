export interface Product {
    id: string;
    organizationId: string;
    productCategoryId: string;
    unitId: string;
    sku: string;
    name: string;
    description?: string | null;
    purchasePrice: number;
    sellingPrice: number;
    minimumStock: number;
    trackBatch: boolean;
    trackExpiry: boolean;
    isActive: boolean;
    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}