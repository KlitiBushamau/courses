import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecourselistComponent } from './singlecourselist.component';

describe('SinglecourselistComponent', () => {
  let component: SinglecourselistComponent;
  let fixture: ComponentFixture<SinglecourselistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglecourselistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglecourselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
