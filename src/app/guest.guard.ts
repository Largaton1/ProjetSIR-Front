import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const guestGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    return true; // ✅ autoriser si non connecté
  }

  if (!authService.isLoggedInClient()) {
    return true; // ✅ autoriser si non connecté
  }

  if (!authService.isLoggedInOrganisateur()) {
    return true; // ✅ autoriser si non connecté
  }

  router.navigate(['/home']); // 🔁 rediriger vers accueil si déjà connecté
  return false;
};
