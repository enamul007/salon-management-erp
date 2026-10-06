import { FORM_IMPORTS } from '@/app/core/shared/imports/form-imports/form-imports.imports';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-login',
    standalone: true,
    imports: [...FORM_IMPORTS,RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
 
export class LoginComponent {
    private fb = inject(FormBuilder);
    constructor() {
    this.loginForm = this.fb.group({
        email: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required,Validators.minLength(6)]],
        rememberMe: [false]
    });
}

    loginForm!: FormGroup;
    systemname = signal<string>('Salon Management!');

    email: string = '';

    password: string = '';

    checked: boolean = false;


    onSubmit() {
        if (this.loginForm.valid) {
            const email = this.loginForm.value.email;
            const password = this.loginForm.value.password;
            const rememberMe = this.loginForm.value.rememberMe;
        }
    }
}
