import { AuthService } from '@/app/core/services/auth/auth.service';
import { FORM_IMPORTS } from '@/app/core/shared/imports/form-imports/form-imports.imports';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
    selector: 'app-login',
    standalone: true,
    imports: [...FORM_IMPORTS],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    /*dependencies */
    private fb = inject(FormBuilder);
    private readonly router = inject(Router);
    private authService = inject(AuthService);
    constructor() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            rememberMe: [false]
        });
    }
    loginForm!: FormGroup;
    systemname = signal<string>('Salon Management!');
    onSubmit() {
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value).subscribe({
                next: (response) => {
                    console.log('Login successful!', response);
                    this.router.navigate(['/dashboard']);
                },
                error: (err) => {
                    this.router.navigate(['/auth/login']);
                    console.error('Login failed!', err);
                }
            });
        } else {
            this.loginForm.markAllAsTouched();
        }
    }
}
