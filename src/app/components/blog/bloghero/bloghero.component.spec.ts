import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogheroComponent } from './bloghero.component';

describe('BlogheroComponent', () => {
  let component: BlogheroComponent;
  let fixture: ComponentFixture<BlogheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogheroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
