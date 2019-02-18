import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-financial-analysis',
  templateUrl: './dialog-financial-analysis.component.html',
  styleUrls: ['./dialog-financial-analysis.component.css']
})
export class DialogFinancialAnalysisComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl('', Validators.required),
    clients: new FormControl('', Validators.required),
    rate: new FormControl('', Validators.required)
  });

  ngOnInit() {
  }

}
