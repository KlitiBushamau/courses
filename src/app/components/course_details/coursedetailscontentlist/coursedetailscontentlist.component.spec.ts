import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedetailscontentlistComponent } from './coursedetailscontentlist.component';

describe('CoursedetailscontentlistComponent', () => {
  let component: CoursedetailscontentlistComponent;
  let fixture: ComponentFixture<CoursedetailscontentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursedetailscontentlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedetailscontentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
