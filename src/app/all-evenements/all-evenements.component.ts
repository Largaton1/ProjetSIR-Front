import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-evenements',
  standalone: false,
  templateUrl: './all-evenements.component.html',
  styleUrl: './all-evenements.component.css'
})
export class AllEvenementsComponent implements OnInit{

  evenements: any[] = [];
  displayedColumns: string[] = ['nomEvent', 'date', 'lieu', 'description', 'capacite', 'statut', 'action'];
  apiURL = 'http://localhost:8080/evenement';

  constructor(private http: HttpClient, private authService: AuthService ) {}

  ngOnInit(): void {
    this.loadEvenements();
  }

  loadEvenements() {
    this.http.get<any[]>(this.apiURL).subscribe({
      next: (data) => this.evenements = data,
      error: (err) => console.error('Erreur lors du chargement des événements', err)
    });
  }

  updateStatut(evenement: any, newStatut: string) {
    const admin = this.authService.getUser(); // 👈 récupérer l'admin connecté




    if (!admin || !admin.id) {
      alert("Impossible de récupérer l'administrateur connecté");
      return;
    }

    const body = {
      nouveauStatut: newStatut,
      administrateurId: admin.id
    };

    const headers = { 'Content-Type': 'application/json' };
    // const updatedEvent = { ...evenement, statut: newStatut, administrateurId: admin.id  };

    this.http.put(`${this.apiURL}/update-statut/${evenement.id}`, body, { headers }).subscribe({
      next: () => {
        alert('Statut mis à jour avec succès');
        this.loadEvenements(); // recharger la liste
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour du statut', err);
        alert('Échec de mise à jour du statut');
      }
    });
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
