import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [AuthService],
})

export class RegisterComponent {

  user = { nom: '', prenom: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    this.authService.register(this.user).subscribe({
      next: (res) => {
        this.authService.saveUser(res);
        // 🔥 Stocker l'admin retourné (avec ID)
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['/home']); // rediriger vers accueil
      },
      error: (err) => {
        alert("Erreur d'inscription");
        console.error(err);
      }
    });
  }

}
