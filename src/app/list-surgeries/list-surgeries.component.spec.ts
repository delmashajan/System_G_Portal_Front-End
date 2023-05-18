import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSurgeriesComponent } from './list-surgeries.component';

describe('ListSurgeriesComponent', () => {
  let component: ListSurgeriesComponent;
  let fixture: ComponentFixture<ListSurgeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSurgeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSurgeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
