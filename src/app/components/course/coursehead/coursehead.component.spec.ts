import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseheadComponent } from './coursehead.component';

describe('CourseheadComponent', () => {
  let component: CourseheadComponent;
  let fixture: ComponentFixture<CourseheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
