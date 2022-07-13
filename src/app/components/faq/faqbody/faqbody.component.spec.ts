import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqbodyComponent } from './faqbody.component';

describe('FaqbodyComponent', () => {
  let component: FaqbodyComponent;
  let fixture: ComponentFixture<FaqbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
