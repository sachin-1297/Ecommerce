import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDiagComponent } from './address-diag.component';

describe('AddressDiagComponent', () => {
  let component: AddressDiagComponent;
  let fixture: ComponentFixture<AddressDiagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressDiagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
