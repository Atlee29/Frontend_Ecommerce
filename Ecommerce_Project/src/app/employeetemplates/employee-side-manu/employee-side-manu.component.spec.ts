import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSideManuComponent } from './employee-side-manu.component';

describe('EmployeeSideManuComponent', () => {
  let component: EmployeeSideManuComponent;
  let fixture: ComponentFixture<EmployeeSideManuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeSideManuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSideManuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
