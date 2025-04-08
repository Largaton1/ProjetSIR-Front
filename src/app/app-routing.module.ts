import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EvenementDetailsComponent } from './modules/evenement/evenement-details/evenement-details.component';
import { EvenementListComponent } from './modules/evenement/evenement-list/evenement-list.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { NavbarComponent } from './modules/shared/navbar/navbar.component';
import { SidebarComponent } from './modules/shared/sidebar/sidebar.component';
import { TicketCheckoutComponent } from './modules/ticket/ticket-checkout/ticket-checkout.component';
import { UtilisateurTicketsComponent } from './modules/ticket/utilisateur-tickets/utilisateur-tickets.component';
import { LoginComponent } from './modules/utilisateur/login/login.component';
import { RegisterComponent } from './modules/utilisateur/register/register.component';

const routes: Routes = [
  { path: 'sidebar', component: SidebarComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', component: EvenementListComponent },
  { path: 'evenement/:id', component: EvenementDetailsComponent },
  { path: 'evenement/:id/buy', component: TicketCheckoutComponent },
  { path: 'utilisateur/tickets', component: UtilisateurTicketsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
