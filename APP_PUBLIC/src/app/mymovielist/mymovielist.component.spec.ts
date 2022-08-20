import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MymovielistComponent } from './mymovielist.component';

describe('MymovielistComponent', () => {
  let component: MymovielistComponent;
  let fixture: ComponentFixture<MymovielistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MymovielistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MymovielistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
