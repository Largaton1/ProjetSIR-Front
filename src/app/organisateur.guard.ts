import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const organisateurGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.getUserRole() === 'organisateur') {
    return true;
  }

  router.navigate(['/login-organisateur']); // rediriger si ce n’est pas un organisateur
  return false;
};
