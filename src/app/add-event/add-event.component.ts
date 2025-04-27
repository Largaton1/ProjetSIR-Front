import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  standalone: false,
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  private apiURLaddEvent = 'http://localhost:8080/evenement/add';

  event = {
    nomEvent: '',
    description: '',
    lieu: '',
    date: '',
    capacite: 0,
    organisateurId: 0 // ne sera pas affiché
  };

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const user = JSON.parse(localStorage.getItem('user')!);
    // if (user && user.id) {
    //   this.event.organisateurId = user.id;
    // } else {
    //   alert('Erreur: utilisateur non connecté. Veuillez vous reconnecter.');
    //   this.router.navigate(['/login']);
    // }
    this.event.organisateurId = user?.id; // Récupérer l'ID de l'organisateur depuis le localStorage
  }


  submitEvent() {
    const eventToSend = { ...this.event };

    // Transformer la date saisie (ex: "30/06/2025") en "2025-06-30"
    const parts = this.event.date.split('/');
    if (parts.length === 3) {
      const [day, month, year] = parts;
      eventToSend.date = `${year}-${month}-${day}`; // yyyy-MM-dd
    }

    // Construire le corps en x-www-form-urlencoded
    const body = new HttpParams()
    .set('nomEvent', eventToSend.nomEvent)
    .set('description', eventToSend.description)
    .set('lieu', eventToSend.lieu)
    .set('date', eventToSend.date)
    .set('capacite', eventToSend.capacite.toString())
    .set('organisateurId', eventToSend.organisateurId.toString())

    console.log('Données envoyées (x-www-form-urlencoded) :', body.toString());

    this.http.post(`${this.apiURLaddEvent}`, body.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }).subscribe({
      next: () => {
        alert('Événement ajouté avec succès');
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Erreur serveur :', err);
        alert("Erreur lors de l'ajout de l'événement");
      }
    });


  }

}
