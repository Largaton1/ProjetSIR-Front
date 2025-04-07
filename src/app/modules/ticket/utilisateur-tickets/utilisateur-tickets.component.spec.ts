import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurTicketsComponent } from './utilisateur-tickets.component';

describe('UtilisateurTicketsComponent', () => {
  let component: UtilisateurTicketsComponent;
  let fixture: ComponentFixture<UtilisateurTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtilisateurTicketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateurTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
