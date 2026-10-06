import { Routes } from '@angular/router';
import { Dashboard } from '../../pages/dashboard/dashboard';
import { Documentation } from '../../pages/documentation/documentation';
import { Landing } from '../../pages/landing/landing';
import { Notfound } from '../../pages/notfound/notfound';
import { AppLayout } from '../../layout/components/layout/app.layout.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('./uikit.routes').then(m => m.uikitRoutes) },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./pages.routes').then(m => m.pagesRoutes) }
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    // jodi auth.routes file a 'authRoutes' name export kora thake, tahole nicher line ti kaj korbe
    { path: 'auth', loadChildren: () => import('../routes/auth.routes').then(m => m.authRoutes) },
    { path: '**', redirectTo: '/notfound' }
];