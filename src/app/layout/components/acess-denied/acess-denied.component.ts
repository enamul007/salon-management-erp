import { Router } from '@angular/router';
import { FORM_IMPORTS } from '@/app/core/shared/imports/form-imports/form-imports.imports';
import { Component, inject, OnInit } from '@angular/core';
@Component({
    standalone: true,
    imports: [...FORM_IMPORTS],
    selector: 'app-access-denied',
    templateUrl: './acess-denied.component.html',
    styleUrl: './acess-denied.component.scss'
})
export class AccessDeniedComponent {
    private readonly router = inject(Router);    
    GoToDashboard(): void {
        this.router.navigate(['/']);
    }
}
