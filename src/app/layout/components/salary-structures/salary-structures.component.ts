import { Router } from '@angular/router';
import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { DIALOG_IMPORTS } from '@/app/core/shared/imports/dialog-imports/dialog-imports.imports';
import { SalaryStructuresService } from '@/app/core/services/salary-structures.services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FORM_IMPORTS } from '@/app/core/shared/imports/form-imports/form-imports.imports';
@Component({
    standalone: true,
    imports: [...DIALOG_IMPORTS,...FORM_IMPORTS, TableModule],  
    selector: 'app-salary-structures',
    templateUrl: './salary-structures.component.html',
    styleUrl: './salary-structures.component.scss'
})
export class SalaryStructuresComponent implements OnInit {
    ngOnInit(): void {
        this.LoadData();
    }
    private readonly router = inject(Router);
    private readonly service = inject(SalaryStructuresService);

    private fb = inject(FormBuilder);
    salaryStructureForm!: FormGroup;
    salarystructures = signal<any[]>([]);
    salaryStructure = signal<any>({});
    representatives = signal<any[]>([]);
    statuses = signal<any[]>([]);
    loading = signal<boolean>(false);
    rows = signal<number>(10);
    paginator = signal<boolean>(true);
    salaryDialog = signal<boolean>(false);

    globalFilterFields = signal<string[]>(['name', 'country.name', 'representative.name', 'status']);

    @ViewChild('filter') filter!: ElementRef;

    GoToDashboard(): void {
        this.router.navigate(['/auth/login']);
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }

    openNew(): void {
        this.salaryDialog.set(true);
    }
    hideDialog(): void {}

    getSeverity(status: string) {
        switch (status) {
            case 'qualified':
            case 'instock':
            case 'INSTOCK':
            case 'DELIVERED':
            case 'delivered':
                return 'success';

            case 'negotiation':
            case 'lowstock':
            case 'LOWSTOCK':
            case 'PENDING':
            case 'pending':
                return 'warn';

            case 'unqualified':
            case 'outofstock':
            case 'OUTOFSTOCK':
            case 'CANCELLED':
            case 'cancelled':
                return 'danger';

            default:
                return 'info';
        }
    }

   InitializeForm(): void {
    this.salaryStructureForm = this.fb.group({
        // Employee ID সাধারণত স্ট্রিং বা UUID হয়, তাই শুধু required দেওয়া হলো
        employeeId: ['', Validators.required],
        
        // স্যালারি ফিল্ডগুলো নাম্বার, ডিফল্ট ভ্যালু 0 এবং ঋণাত্মক (negative) হওয়া যাবে না
        basicSalary: [0, [Validators.required, Validators.min(0)]],
        houseRent: [0, [Validators.required, Validators.min(0)]],
        medicalAllowance: [0, [Validators.required, Validators.min(0)]],
        transportAllowance: [0, [Validators.required, Validators.min(0)]],
        
        // Gross Salary অটো-ক্যালকুলেট হবে, তাই এটি ডিজেবল (disabled) করে রাখা হলো
        grossSalary: [{ value: 0, disabled: true }],
        
        // Effective Date এর জন্য বর্তমান তারিখ ডিফল্ট হিসেবে দেওয়া হলো
        effectiveDate: [new Date(), Validators.required],
        
        // Status ডিফল্টভাবে Active (true) থাকবে
        isActive: [true]
    });
}

    saveSalaryStructure() {}
    LoadData(): void {
        this.service.getAll().subscribe({
            next(value) {},
            error(err) {}
        });
    }

    editSalaryStructure(structure: any): void {}

    deleteSalaryStructure(structure: any): void {}

    onSubmit(): void {}
}
