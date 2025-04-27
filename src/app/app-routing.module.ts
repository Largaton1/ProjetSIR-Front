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
import { AddEventComponent } from './add-event/add-event.component';
import { authGuard } from './auth.guard';
import { organisateurGuard } from './organisateur.guard';
import { MesEvenementsComponent } from './mes-evenements/mes-evenements.component';
import { AllEvenementsComponent } from './all-evenements/all-evenements.component';
import { adminGuard } from './admin.guard';
import { AProposComponent } from './a-propos/a-propos.component';

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
{ path: 'add-event', component: AddEventComponent,  canActivate: [organisateurGuard] }, // 🔒 bloqué si pas connecté
{ path: 'mes-evenements', component: MesEvenementsComponent, canActivate: [organisateurGuard] },
{ path: 'all-evenements', component: AllEvenementsComponent, canActivate: [adminGuard] },
{ path: 'a-propos', component: AProposComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
