export interface PurchaseOrderItem {
    id: string;
    purchaseOrderId: string;
    productId: string;
    quantity: number;
    unitPrice: number;
    discountAmount: number;
    taxAmount: number;
    totalAmount: number;
    createdAt: string;
}