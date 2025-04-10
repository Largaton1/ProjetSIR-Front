import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginOrganisateurComponent } from './login-organisateur.component';

describe('LoginOrganisateurComponent', () => {
  let component: LoginOrganisateurComponent;
  let fixture: ComponentFixture<LoginOrganisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginOrganisateurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginOrganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
