import { FORM_IMPORTS } from '@/app/core/shared/imports/form-imports/form-imports.imports';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    standalone: true,
    imports: [...FORM_IMPORTS],
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrl: './error.component.scss'
})
export class ErrorComponent {
    private readonly router = inject(Router);
    GoToDashboard(): void {
        this.router.navigate(['/']);
    }
}
