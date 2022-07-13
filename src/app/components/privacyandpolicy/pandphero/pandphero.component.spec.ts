import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandpheroComponent } from './pandphero.component';

describe('PandpheroComponent', () => {
  let component: PandpheroComponent;
  let fixture: ComponentFixture<PandpheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandpheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PandpheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
