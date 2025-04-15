import { Component, OnInit } from '@angular/core';
import { TicketAPIServiceService } from '../ticket-apiservice.service';
import { E } from '@angular/cdk/keycodes';
import { EvenementAPIServiceService } from '../evenement-apiservice.service';
import {ChangeDetectionStrategy} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-my-home',
  standalone: false,
  templateUrl: './my-home.component.html',
  styleUrl: './my-home.component.css',
  providers: [TicketAPIServiceService, EvenementAPIServiceService, AuthService],
})
export class MyHomeComponent implements OnInit {
  statut: 'Annule' | 'EnCours' | 'Termine' = 'EnCours';
  events: any[] = [];
  newEvent = { id: 0, nomEvent: '', description: '', lieu: '', capacite: 0, date: '', statut: ''};
  constructor( private ticketService: TicketAPIServiceService, private evenementService: EvenementAPIServiceService, private router: Router, public authService: AuthService) { }

  /* ngOnInit() {
    this.ticketService.getTickets();
  } */




  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.evenementService.getEvents().subscribe(data => {
      this.events = data;
    });
  }

  addEvent(): void {
    this.evenementService.createEvent(this.newEvent).subscribe(() => {
      this.newEvent = { id: 0, nomEvent: '', description: '', lieu: '', capacite: 0, date: '', statut: '' };
      this.loadEvents();
    });
  }

  goToDetails(id: number): void {
    this.router.navigate(['/evenements', id]);
  }

}
