import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductsForCustomerComponent } from './viewproducts-for-customer.component';

describe('ViewproductsForCustomerComponent', () => {
  let component: ViewproductsForCustomerComponent;
  let fixture: ComponentFixture<ViewproductsForCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproductsForCustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewproductsForCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
