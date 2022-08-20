import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmovieComponent } from './aboutmovie.component';

describe('AboutmovieComponent', () => {
  let component: AboutmovieComponent;
  let fixture: ComponentFixture<AboutmovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutmovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
