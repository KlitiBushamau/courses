import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedetailsdescriptionComponent } from './coursedetailsdescription.component';

describe('CoursedetailsdescriptionComponent', () => {
  let component: CoursedetailsdescriptionComponent;
  let fixture: ComponentFixture<CoursedetailsdescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursedetailsdescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedetailsdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
