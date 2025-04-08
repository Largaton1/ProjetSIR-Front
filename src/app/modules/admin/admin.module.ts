import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from '../shared/admin-layout/admin-layout.component';
import { SharedModule } from '../shared/shared.module';


// Composants partagés

@NgModule({
  declarations: [
    AdminLayoutComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    AdminLayoutComponent
  ]
})
export class AdminModule {}
