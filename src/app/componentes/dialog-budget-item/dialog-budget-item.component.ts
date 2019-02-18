import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import { FooterComponent } from '../footer/footer.component';
import { BudgetItem } from '../budget-item/budget-item.component';
import { PERSONAL, MATERIAL, EQUIP, TRANSPORT, GASTRONOMY, COMERCIAL, COMUNICATION, LOCATION, SOFTWARE, OTHER } from '../../modelos/budget';
import { Item } from '../../modelos/budget';

@Component({
  selector: 'app-dialog-budget-item',
  templateUrl: './dialog-budget-item.component.html',
  styleUrls: ['./dialog-budget-item.component.css']
})
export class DialogBudgetItemComponent implements OnInit {
  form: FormGroup;

  charged = false;

  type: Item;
  timeNeeded: boolean = false;
  dedicationNeeded: boolean = false;
  fpNeeded: boolean = false;
  isEdit: boolean = false;
  isCreate: boolean = false;

  sub: any;
  params: any;

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<DialogBudgetItemComponent>) { }

  ngOnInit() {
    setTimeout(() => {
      this.charged = true;
      this.form  = new FormGroup({
        $key: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        quantity: new FormControl('', Validators.required),
        unity: new FormControl('', Validators.required),
        time: new FormControl('', Validators.required),
        dedication: new FormControl('', Validators.required),
        unityValue: new FormControl('', Validators.required),
        comment: new FormControl('', Validators.required)
      });
    }, 50);
    switch(this.data.page) {
      case 'personal':
        this.type = PERSONAL;
        this.timeNeeded = true;
        this.dedicationNeeded = true;
        this.fpNeeded = true;
        break;
      case 'materiales':
        this.type = MATERIAL;
        break;
      case 'equipos':
        this.type = EQUIP;
        this.timeNeeded = true;
        break;
      case 'transporte':
        this.type = TRANSPORT;
        this.timeNeeded = true;
        break;
      case 'gastronomia':
        this.type = GASTRONOMY;
        break;
      case 'comercial':
        this.type = COMERCIAL;
        break;
      case 'comunicaciones':
        this.type = COMUNICATION;
        break;
      case 'locaciones':
        this.type = LOCATION;
        this.timeNeeded = true;
        break;
      case 'software':
        this.type = SOFTWARE;
        break;
      case 'otros':
        this.type = OTHER;
        break;
      default:
        this.type = OTHER;
        break;
    };

    this.isCreate = this.data.type === 'create' ? true : false;
    this.isEdit = !this.isCreate;
  }

  createItem() {
    console.log(this.form);
    this.dialogRef.close({data: this.form});
  }

  deleteItem() {
    let dialogRef = this.dialog.open(FooterComponent, {
      data: {
        page: this.params['budgetItem']
      }
    });
  }

}