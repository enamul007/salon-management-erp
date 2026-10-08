export interface GoodsReceiveItem {
    id: string;
    goodsReceiveId: string;
    productId: string;
    orderedQuantity: number;
    receivedQuantity: number;
    acceptedQuantity: number;
    rejectedQuantity: number;
    unitPrice: number;
    batchNumber?: string | null;
    expiryDate?: string | null;
    createdAt: string;
}