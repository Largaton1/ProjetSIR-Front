import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-organisateur',
  standalone: false,
  templateUrl: './login-organisateur.component.html',
  styleUrl: './login-organisateur.component.css',
  providers: [AuthService],
})
export class LoginOrganisateurComponent {


  credentials = { email: '', password: ''};

  constructor(private authService: AuthService, private router: Router) {}

  loginOrganisateur() {
    this.authService.loginOrganisateur(this.credentials.email, this.credentials.password).subscribe({
      next: (res) => {
        this.authService.saveUserOrganisateur(res);
        this.router.navigate(['/home']);
      },
      error: () => {
        alert('Identifiants incorrects');
      }
    });
  }

}
