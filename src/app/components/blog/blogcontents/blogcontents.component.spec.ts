import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcontentsComponent } from './blogcontents.component';

describe('BlogcontentsComponent', () => {
  let component: BlogcontentsComponent;
  let fixture: ComponentFixture<BlogcontentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogcontentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcontentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
