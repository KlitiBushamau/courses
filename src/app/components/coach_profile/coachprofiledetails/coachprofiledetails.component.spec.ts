import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachprofiledetailsComponent } from './coachprofiledetails.component';

describe('CoachprofiledetailsComponent', () => {
  let component: CoachprofiledetailsComponent;
  let fixture: ComponentFixture<CoachprofiledetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachprofiledetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachprofiledetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
