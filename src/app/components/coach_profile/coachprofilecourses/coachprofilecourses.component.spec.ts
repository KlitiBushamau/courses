import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachprofilecoursesComponent } from './coachprofilecourses.component';

describe('CoachprofilecoursesComponent', () => {
  let component: CoachprofilecoursesComponent;
  let fixture: ComponentFixture<CoachprofilecoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachprofilecoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachprofilecoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
