import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachprofileheroComponent } from './coachprofilehero.component';

describe('CoachprofileheroComponent', () => {
  let component: CoachprofileheroComponent;
  let fixture: ComponentFixture<CoachprofileheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachprofileheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachprofileheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
