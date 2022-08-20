import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyframeworkComponent } from './myframework.component';

describe('MyframeworkComponent', () => {
  let component: MyframeworkComponent;
  let fixture: ComponentFixture<MyframeworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyframeworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyframeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
