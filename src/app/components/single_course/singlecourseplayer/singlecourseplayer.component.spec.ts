import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecourseplayerComponent } from './singlecourseplayer.component';

describe('SinglecourseplayerComponent', () => {
  let component: SinglecourseplayerComponent;
  let fixture: ComponentFixture<SinglecourseplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglecourseplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglecourseplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
