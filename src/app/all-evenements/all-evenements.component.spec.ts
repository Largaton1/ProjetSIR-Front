import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllEvenementsComponent } from './all-evenements.component';

describe('AllEvenementsComponent', () => {
  let component: AllEvenementsComponent;
  let fixture: ComponentFixture<AllEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllEvenementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
