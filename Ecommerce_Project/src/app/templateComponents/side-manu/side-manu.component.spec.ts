import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideManuComponent } from './side-manu.component';

describe('SideManuComponent', () => {
  let component: SideManuComponent;
  let fixture: ComponentFixture<SideManuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideManuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideManuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
