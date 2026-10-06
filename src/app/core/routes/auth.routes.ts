
import { AccessDeniedComponent } from '@/app/layout/components/acess-denied/acess-denied.component';
import { ErrorComponent } from '@/app/layout/components/error/error.component';
import { LoginComponent } from '@/app/layout/components/login/login.component';
import { Routes } from '@angular/router'; 

export const authRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'access', component: AccessDeniedComponent },
    { path: '**', redirectTo: '/notfound' }
];