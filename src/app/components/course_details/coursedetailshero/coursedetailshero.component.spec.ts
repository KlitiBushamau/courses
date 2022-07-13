import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedetailsheroComponent } from './coursedetailshero.component';

describe('CoursedetailsheroComponent', () => {
  let component: CoursedetailsheroComponent;
  let fixture: ComponentFixture<CoursedetailsheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursedetailsheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedetailsheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
