import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetalComponent } from './employee-detal.component';

describe('EmployeeDetalComponent', () => {
  let component: EmployeeDetalComponent;
  let fixture: ComponentFixture<EmployeeDetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
