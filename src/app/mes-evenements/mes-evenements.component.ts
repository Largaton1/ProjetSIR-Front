import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mes-evenements',
  standalone: false,
  templateUrl: './mes-evenements.component.html',
  styleUrl: './mes-evenements.component.css'
})
export class MesEvenementsComponent implements OnInit {

  evenements: any[] = [];
  displayedColumns: string[] = ['nomEvent', 'date', 'lieu', 'description', 'capacite', 'statut'];

  apiURL = 'http://localhost:8080/evenement/organisateur';

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    const user = this.authService.getUser();
    if (user && user.id) {
      this.http.get(`${this.apiURL}/${user.id}`).subscribe({
        next: (data: any) => {
          this.evenements = data;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des événements', err);
        }
      });
    }
  }

  getStatutClass(statut: string): string {
    switch (statut.toLowerCase()) {
      case 'encours':
        return 'statut-encours';
      case 'enattente':
        return 'statut-attente';
      case 'annule':
        return 'statut-annule';
      case 'termine':
        return 'statut-termine';
      default:
        return 'statut-inconnu';
    }
  }


}
