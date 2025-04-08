import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvenementDetailsComponent } from './evenement-details/evenement-details.component';
import { MyHomeComponent } from './my-home/my-home.component';

const routes: Routes = [
  { path: 'home', component: MyHomeComponent },
{ path: 'evenements/:id', component: EvenementDetailsComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
