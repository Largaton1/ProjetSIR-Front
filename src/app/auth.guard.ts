import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true; // ✅ autoriser si connecté
  }

  if (authService.isLoggedInClient()) {
    return true; // ✅ autoriser si connecté
  }

  if (authService.isLoggedInOrganisateur()) {
    return true; // ✅ autoriser si connecté
  }

  router.navigate(['/login']); // 🔁 rediriger si non connecté
  return false;
};
