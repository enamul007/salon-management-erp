import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('accessToken'); 
  if (token) {
    return true; 
  }   
  console.log('Access denied. User is not authenticated.');
  router.navigate(['/auth/access-denied']);
  return false;
};