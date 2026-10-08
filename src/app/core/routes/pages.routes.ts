import { Routes } from '@angular/router';
import { Documentation } from '../../pages/documentation/documentation';
import { Crud } from '../../pages/crud/crud';
import { Empty } from '../../pages/empty/empty';
import { authGuard } from '../guards/auth.guard';
import { SalaryStructuresComponent } from '@/app/layout/components/salary-structures/salary-structures.component';

export const pagesRoutes: Routes = [
    { path: 'documentation', component: Documentation }, 
    { path: 'salary-structure', component: SalaryStructuresComponent },  
    { 
      path: 'crud', 
      component: Crud, 
      canActivate: [authGuard] 
    },
    { 
      path: 'empty', 
      component: Empty, 
      canActivate: [authGuard] 
    },
    { path: '**', redirectTo: '/notfound' }
];