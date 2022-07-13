import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileheroComponent } from './profilehero.component';

describe('ProfileheroComponent', () => {
  let component: ProfileheroComponent;
  let fixture: ComponentFixture<ProfileheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
