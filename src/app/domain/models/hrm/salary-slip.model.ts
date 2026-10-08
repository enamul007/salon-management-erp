export interface SalarySlip {
    id: string;
    organizationId: string;
    employeeId: string;

    month: number;
    year: number;

    grossSalaryAmount: number;
    grossSalaryCurrency: string;

    totalDeductionsAmount: number;
    totalDeductionsCurrency: string;

    netSalaryAmount: number;
    netSalaryCurrency: string;

    status: string;

    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}