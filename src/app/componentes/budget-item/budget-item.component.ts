import { Component, OnInit } from '@angular/core';
import { Item } from '../budget/budget.component';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { DialogConfirmarComponent } from '../dialog-confirmar/dialog-confirmar.component';
import { DialogBudgetItemComponent } from '../dialog-budget-item/dialog-budget-item.component';

@Component({
  selector: 'app-budget-item',
  templateUrl: './budget-item.component.html',
  styleUrls: ['./budget-item.component.css']
})
export class BudgetItemComponent implements OnInit {
  itemControl = new FormControl('', [Validators.required]);
  
  displayedColumns = ['name', 'quant', 'value', 'cost'];

  sub: any;
  params: any;

  budgetData: Item[]  = [
    { id: 0, name: 'Personal/Recurso Humano', value: 1234567890 },
    { id: 1, name: 'Materiales/Suministros/Obra Fisica', value: 0 },
    { id: 2, name: 'Equipos/Maquinaria', value: 0 },
    { id: 3, name: 'Transporte/Sostenimiento en Campo', value: 0 },
    { id: 4, name: 'Gastronomía', value: 0 },
    { id: 5, name: 'Estrategia Comunicacional/Comercial', value: 0 },
    { id: 6, name: 'Comunicaciones', value: 0 },
    { id: 7, name: 'Locaciones', value: 0 },
    { id: 8, name: 'Software', value: 0 },
    { id: 9, name: 'Otros', value: 0 }
  ];

  budgetItemData: BudgetItem[] = [
    { id: 1, name: 'Holiwis', quantity: 1, value: 5000, realCost: 4500 },
    { id: 2, name: 'Holiwis', quantity: 1, value: 5000, realCost: 4500 },
    { id: 3, name: 'Holiwis', quantity: 1, value: 5000, realCost: 4500 },
    { id: 4, name: 'Holiwis', quantity: 1, value: 5000, realCost: 4500 }
  ]

  budgetItemDataSource = new MatTableDataSource(this.budgetItemData);

  showDataForm() {
    let page: string;
    switch (this.itemControl.value) {
      case 0:
        page = 'personal';
        break;
      case 1:
        page = 'materiales';
        break;
      case 2:
        page = 'equipos';
        break;
      case 3:
        page = 'transporte';
        break;
      case 4:
        page = 'gastronomia';
        break;
      case 5:
        page = 'comercial';
        break;
      case 6:
        page = 'comunicaciones';
        break;
      case 7:
        page = 'locaciones';
        break;
      case 8:
        page = 'software';
        break;
      case 9:
        page = 'otros';
        break;
      default:
        page = 'otros';
        break;
    };

    if(page !== this.params['budgetItem']) this.router.navigate([`inicio/actividades/editar/${this.params['code']}/presupuesto/${page}`]);
  }

  openDialog(type: string, row: any) {
    let dialogRef = this.dialog.open(DialogBudgetItemComponent, {
      data: {
        page: this.params['budgetItem'],
        type: type,
        row: row
      }
    });
  }

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => { this.params = params });
    let value: number;
    switch(this.params['budgetItem']) {
      case 'personal':
        value = 0;
        break;
      case 'materiales':
        value = 1;
        break;
      case 'equipos':
        value = 2;
        break;
      case 'transporte':
        value = 3;
        break;
      case 'gastronomia':
        value = 4;
        break;
      case 'comercial':
        value = 5;
        break;
      case 'comunicaciones':
        value = 6;
        break;
      case 'locaciones':
        value = 7;
        break;
      case 'software':
        value = 8;
        break;
      case 'otros':
        value = 9;
        break;
      default:
        value = 9;
        break;
    };
    this.itemControl.setValue(value);
  }

}

export interface BudgetItem {
  id: number;
  name: string;
  quantity: number;
  value: number;
  realCost: number;
}