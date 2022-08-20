import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviehomeComponent } from './moviehome.component';

describe('MoviehomeComponent', () => {
  let component: MoviehomeComponent;
  let fixture: ComponentFixture<MoviehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
