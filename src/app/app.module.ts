import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyHomeComponent } from './my-home/my-home.component';


// Import Angular Material modules
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

import { EvenementDetailsComponent } from './evenement-details/evenement-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { LoginOrganisateurComponent } from './login-organisateur/login-organisateur.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { RegisterOrganisateurComponent } from './register-organisateur/register-organisateur.component';
import { AddEventComponent } from './add-event/add-event.component';
import { MesEvenementsComponent } from './mes-evenements/mes-evenements.component';
import { AllEvenementsComponent } from './all-evenements/all-evenements.component';
import { AProposComponent } from './a-propos/a-propos.component';


@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    EvenementDetailsComponent,
    LoginComponent,
    RegisterComponent,
    LoginClientComponent,
    LoginOrganisateurComponent,
    RegisterClientComponent,
    RegisterOrganisateurComponent,
    AddEventComponent,
    MesEvenementsComponent,
    AllEvenementsComponent,
    AProposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // Angular Material modules
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    FlexLayoutModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatOptionModule,


    //other modules
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
