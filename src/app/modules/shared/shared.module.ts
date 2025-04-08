import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [

    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  exports: [NavbarComponent, SidebarComponent, FooterComponent],

  imports: [
    CommonModule,
    
  ]
})
export class SharedModule { }
