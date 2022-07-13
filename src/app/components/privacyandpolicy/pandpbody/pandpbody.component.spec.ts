import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandpbodyComponent } from './pandpbody.component';

describe('PandpbodyComponent', () => {
  let component: PandpbodyComponent;
  let fixture: ComponentFixture<PandpbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandpbodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PandpbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
