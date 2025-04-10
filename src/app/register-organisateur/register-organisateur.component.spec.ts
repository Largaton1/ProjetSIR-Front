import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOrganisateurComponent } from './register-organisateur.component';

describe('RegisterOrganisateurComponent', () => {
  let component: RegisterOrganisateurComponent;
  let fixture: ComponentFixture<RegisterOrganisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterOrganisateurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterOrganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
