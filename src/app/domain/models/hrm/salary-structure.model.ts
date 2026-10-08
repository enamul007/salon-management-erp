export interface SalaryStructure {
    id: string;
    employeeId: string;

    basicSalaryAmount: number;
    basicSalaryCurrency: string;

    houseRentAmount: number;
    houseRentCurrency: string;

    medicalAllowanceAmount: number;
    medicalAllowanceCurrency: string;

    transportAllowanceAmount: number;
    transportAllowanceCurrency: string;

    createdAt: string;
    createdBy?: string | null;
    updatedAt?: string | null;
    updatedBy?: string | null;
}