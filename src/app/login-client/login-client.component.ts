import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-client',
  standalone: false,
  templateUrl: './login-client.component.html',
  styleUrl: './login-client.component.css',
  providers: [AuthService],
})
export class LoginClientComponent {

  credentials = { email: '', password: ''};

  constructor(private authService: AuthService, private router: Router) {}

  loginClient() {
    this.authService.loginClient(this.credentials.email, this.credentials.password).subscribe({
      next: (res) => {
        this.authService.saveUserClient(res);
        this.router.navigate(['/home']);
      },
      error: () => {
        alert('Identifiants incorrects');
      }
    });
  }

}
