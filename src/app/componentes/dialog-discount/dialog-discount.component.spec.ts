import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDiscountComponent } from './dialog-discount.component';

describe('DialogDiscountComponent', () => {
  let component: DialogDiscountComponent;
  let fixture: ComponentFixture<DialogDiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
