import { Routes } from '@angular/router';
import { Dashboard } from '../../pages/dashboard/dashboard';
import { Documentation } from '../../pages/documentation/documentation';
import { Landing } from '../../pages/landing/landing';
import { Notfound } from '../../pages/notfound/notfound';
import { AppLayout } from '../../layout/components/layout/app.layout.component';
import { LoginComponent } from '@/app/layout/components/login/login.component';
import { authGuard } from '../guards/auth.guard';
import { SalaryStructuresComponent } from '@/app/layout/components/salary-structures/salary-structures.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        component: AppLayout,
        canActivate: [authGuard],
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('./uikit.routes').then(m => m.uikitRoutes) },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./pages.routes').then(m => m.pagesRoutes) }
        ]
    },
    { path: 'salary-structure', component: SalaryStructuresComponent },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('../routes/auth.routes').then(m => m.authRoutes) },
    { path: '**', redirectTo: '/notfound' }
];