import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementDetailsComponent } from './evenement-details/evenement-details.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { LoginOrganisateurComponent } from './login-organisateur/login-organisateur.component';
import { RegisterOrganisateurComponent } from './register-organisateur/register-organisateur.component';
import { guestGuard } from './guest.guard';

const routes: Routes = [
  { path: 'home', component: MyHomeComponent },
{ path: 'evenements/:id', component: EvenementDetailsComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'login', component: LoginComponent, canActivate: [guestGuard]}, // 🔒 bloqué si déjà connecté
{ path: 'register', component: RegisterComponent, canActivate: [guestGuard] },
{ path: 'login-client', component: LoginClientComponent, canActivate: [guestGuard]},
{ path: 'register-client', component: RegisterClientComponent, canActivate: [guestGuard] },
{ path: 'login-organisateur', component: LoginOrganisateurComponent,canActivate: [guestGuard]},
{ path: 'register-organisateur', component: RegisterOrganisateurComponent, canActivate: [guestGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
