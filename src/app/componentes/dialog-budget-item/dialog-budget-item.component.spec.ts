import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBudgetItemComponent } from './dialog-budget-item.component';

describe('DialogBudgetItemComponent', () => {
  let component: DialogBudgetItemComponent;
  let fixture: ComponentFixture<DialogBudgetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBudgetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBudgetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
