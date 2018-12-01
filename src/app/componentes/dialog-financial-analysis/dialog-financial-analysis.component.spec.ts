import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFinancialAnalysisComponent } from './dialog-financial-analysis.component';

describe('DialogFinancialAnalysisComponent', () => {
  let component: DialogFinancialAnalysisComponent;
  let fixture: ComponentFixture<DialogFinancialAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFinancialAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFinancialAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
