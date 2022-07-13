import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqheroComponent } from './faqhero.component';

describe('FaqheroComponent', () => {
  let component: FaqheroComponent;
  let fixture: ComponentFixture<FaqheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
