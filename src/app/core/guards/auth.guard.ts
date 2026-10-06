import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // localStorage থেকে টোকেন চেক করা হচ্ছে
  const token = localStorage.getItem('jwt_token'); 

  if (token) {
    return true; // টোকেন থাকলে কাঙ্ক্ষিত পেজে যেতে পারবে
  } 
  
  // টোকেন না থাকলে লগইন পেজে রিডাইরেক্ট করে দেবে
  router.navigate(['/login']);
  return false;
};