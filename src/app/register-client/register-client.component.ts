import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-client',
  standalone: false,
  templateUrl: './register-client.component.html',
  styleUrl: './register-client.component.css',
  providers: [AuthService],
})
export class RegisterClientComponent {
  user = { nom: '', prenom: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  registerClient() {
    this.authService.registerClient(this.user).subscribe({
      next: (res) => {
        this.authService.saveUserClient(res);
        // 🔥 Stocker le client retourné (avec ID)
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
