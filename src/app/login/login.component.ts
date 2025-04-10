import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService],
})


export class LoginComponent {

  credentials = { email: '', password: ''};

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.credentials.email, this.credentials.password).subscribe({
      next: (res) => {
        this.authService.saveUser(res);
        this.router.navigate(['/home']);
      },
      error: () => {
        alert('Identifiants incorrects');
      }
    });
  }

}
