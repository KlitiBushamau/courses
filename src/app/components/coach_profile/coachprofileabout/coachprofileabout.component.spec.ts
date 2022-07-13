import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachprofileaboutComponent } from './coachprofileabout.component';

describe('CoachprofileaboutComponent', () => {
  let component: CoachprofileaboutComponent;
  let fixture: ComponentFixture<CoachprofileaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachprofileaboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachprofileaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
