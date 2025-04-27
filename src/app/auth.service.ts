import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL = 'http://localhost:8080/admin';
  private apiURLclient = 'http://localhost:8080/client';
  private apiURLorganisateur = 'http://localhost:8080/organisateur';

  constructor(private http: HttpClient) { }


  // login(email: string, password: string) {
  //   return this.http.post(`${this.apiURL}/login`, { email, password });
  // }

  // register(data: any) {
  //   return this.http.post(`${this.apiURL}/add`, data);
  // }



  // Administrateur login and register et autre methods

  login(email: string, password: string) {
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);

    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    return this.http.post(`${this.apiURL}/login`, body.toString(), { headers });
  }

  register(data: any) {
    const body = new URLSearchParams();
    body.set('nom', data.nom);
    body.set('prenom', data.prenom);
    body.set('email', data.email);
    body.set('password', data.password);

    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

    return this.http.post(`${this.apiURL}/add`, body.toString(), { headers });
  }

  saveUser(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
    localStorage.setItem('role', 'admin');
  }

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  logout() {
    localStorage.removeItem('user');
  }


  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  getUserName(): string {
    const user = this.getUser();
    return user ? `${user.prenom} ${user.nom}` : '';
  }


// Client login and register et autre methods

loginClient(email: string, password: string) {
  const body = new URLSearchParams();
  body.set('email', email);
  body.set('password', password);

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

  return this.http.post(`${this.apiURLclient}/login`, body.toString(), { headers });
}

registerClient(data: any) {
  const body = new URLSearchParams();
  body.set('nom', data.nom);
  body.set('prenom', data.prenom);
  body.set('email', data.email);
  body.set('password', data.password);

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

  return this.http.post(`${this.apiURLclient}/add`, body.toString(), { headers });
}

saveUserClient(data: any) {
  localStorage.setItem('user', JSON.stringify(data));
  localStorage.setItem('role', 'client');
}

isLoggedInClient() {
  return !!localStorage.getItem('user');
}

logoutClient() {
  localStorage.removeItem('user');
}

// Organisateur login and register et autre methods



loginOrganisateur(email: string, password: string) {
  const body = new URLSearchParams();
  body.set('email', email);
  body.set('password', password);

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

  return this.http.post(`${this.apiURLorganisateur}/login`, body.toString(), { headers });
}

registerOrganisateur(data: any) {
  const body = new URLSearchParams();
  body.set('nom', data.nom);
  body.set('prenom', data.prenom);
  body.set('email', data.email);
  body.set('password', data.password);

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };

  return this.http.post(`${this.apiURLorganisateur}/add`, body.toString(), { headers });
}

saveUserOrganisateur(data: any) {
  localStorage.setItem('user', JSON.stringify(data));
  localStorage.setItem('role', 'organisateur');
}

isLoggedInOrganisateur() {
  return !!localStorage.getItem('user');
}

logoutOrganisateur() {
  localStorage.removeItem('user');
}



getUserRole(): string | null {
  return localStorage.getItem('role');
}


isAdmin() {
  return this.getUserRole() === 'admin';
}

isClient() {
  return this.getUserRole() === 'client';
}

isOrganisateur() {
  return this.getUserRole() === 'organisateur';
}

}
