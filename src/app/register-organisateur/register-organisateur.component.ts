import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-organisateur',
  standalone: false,
  templateUrl: './register-organisateur.component.html',
  styleUrl: './register-organisateur.component.css',
  providers: [AuthService],
})
export class RegisterOrganisateurComponent {

  user = { nom: '', prenom: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  registerOrganisateur() {
    this.authService.registerOrganisateur(this.user).subscribe({
      next: (res) => {
        this.authService.saveUserOrganisateur(res);
        this.router.navigate(['/home']); // rediriger vers accueil
      },
      error: (err) => {
        alert("Erreur d'inscription");
        console.error(err);
      }
    });
  }
}
