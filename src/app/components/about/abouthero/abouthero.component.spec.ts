import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutheroComponent } from './abouthero.component';

describe('AboutheroComponent', () => {
  let component: AboutheroComponent;
  let fixture: ComponentFixture<AboutheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
