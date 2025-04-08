import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { EvenementAPIServiceService } from '../evenement-apiservice.service';


@Component({
  selector: 'app-evenement-details',
  standalone: false,
  templateUrl: './evenement-details.component.html',
  styleUrl: './evenement-details.component.css'
})

export class EvenementDetailsComponent implements OnInit {
    id!: number;
    events: any[] = [];
    newEvent = { id: 0, nomEvent: '', description: '', lieu: '', capacite: 0, date: '', statut: ''};
    evenement: any;
    prixUnitaire = 6.00;
    quantiteDemandee: number = 1;

    constructor(private route: ActivatedRoute, private evenementService: EvenementAPIServiceService,) { }

    // ngOnInit() {
    //   this.id = +this.route.snapshot.paramMap.get('id')!;
    //   console.log("ID reçu :", this.id);
    // }

    ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getEvenementDetails();
    // this.newEvent.capacite = 1;
    }

    getEvenementDetails() {
      this.evenementService.getEvents().subscribe((data: any[]) => {
        this.evenement = data.find(e => e.id === this.id);
      });
    }

    // increment() {
    //   this.newEvent.capacite++;
    // }

    increment() {
      if (this.quantiteDemandee < this.evenement.capacite) {
        this.quantiteDemandee++;
      }
    }

    decrement() {
      if (this.quantiteDemandee > 1) {
        this.quantiteDemandee--;
      }
    }

    // decrement() {
    //   if (this.newEvent.capacite > 1) {
    //     this.newEvent.capacite--;
    //   }
    // }

    getStatutClass(statut: string): string {
      return 'statut-' + statut;
    }


}
