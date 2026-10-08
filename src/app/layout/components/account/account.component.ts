import { Router } from '@angular/router';
import { FORM_IMPORTS } from '@/app/core/shared/imports/form-imports/form-imports.imports';
import { Component, inject, OnInit } from '@angular/core';
@Component({
    standalone: true,
    imports: [...FORM_IMPORTS],
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrl: './account.component.scss'
})
export class AccountComponent {
    private readonly router = inject(Router);    
    GoToDashboard(): void {
        this.router.navigate(['/auth/login']);
    }
}
