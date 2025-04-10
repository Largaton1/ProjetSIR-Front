import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularapp';

  showToolbar = true;
  userName: string | null = null;

  constructor(private router: Router, public authService: AuthService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        this.showToolbar = !['/login', '/register', '/login-client', '/register-client', '/login-organisateur', '/register-organisateur'].includes(event.url);
        this.updateUserInfo();
        // Routes pour lesquelles on cache la toolbar
        // const hiddenRoutes = ['/login', '/register', '/login-client', '/register-client', '/login-organisateur', '/register-organisateur'];
        // Vérifie si l'URL actuelle est dans la liste des routes cachées
        // this.showToolbar = !hiddenRoutes.includes(event.urlAfterRedirects);
      }
    });
  }

  ngOnInit(): void {
    this.updateUserInfo();
  }

  updateUserInfo() {
    if (this.authService.isLoggedIn()) {
      this.userName = this.authService.getUserName();
    } else {
      this.userName = null;
    }
  }

  logout() {
    this.authService.logout();
    this.userName = null;
    this.router.navigate(['/home']);
  }
}
