export type InvoiceItemType =
    | 'Service'
    | 'Product';

export interface InvoiceItem {
    id: string;
    invoiceId: string;
    itemType: InvoiceItemType;
    serviceId?: string | null;
    productId?: string | null;
    description: string;
    quantity: number;
    unitPrice: number;
    discountAmount: number;
    taxAmount: number;
    lineTotal: number;
    createdAt: string;
}