import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatDialog} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogFinancialAnalysisComponent } from '../dialog-financial-analysis/dialog-financial-analysis.component';
import { DialogDiscountComponent } from '../dialog-discount/dialog-discount.component';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  displayedColumns = ['name', 'value'];

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

  udeaContributions: Item[] = [
    { id: 0, name: 'Manejo y Costos Administración (10%)', value: 0 },
    { id: 1, name: 'Educación Continua', value: 0 }
  ];

  engContributions: Item[] = [
    { id: 0, name: 'Educación Continua', value: 0 }
  ];

  budgetDataSource = new MatTableDataSource(this.budgetData);
  contrUdeaDataSource = new MatTableDataSource(this.udeaContributions);
  contrEngDataSource = new MatTableDataSource(this.engContributions);

  parseValue(value: number) {
    let strValue: string = value.toString();
    let endSub: string = strValue.substr(strValue.length - 3, 3);
    let midSub: string = strValue.substr(strValue.length - 6, 3);
    let startSub: string = strValue.substr(strValue.length - 9, 3);

    return `${startSub}'${midSub}.${endSub}`;
  }

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog) {
  }

  goToBudgetItem(id: number) {
    let page: string;
    switch (id) {
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
    }
    this.router.navigate([`inicio/actividades/editar/${this.params['code']}/presupuesto/${page}`]);
  }

  showFinancialAnalysis() {
    let dialogRef = this.dialog.open(DialogFinancialAnalysisComponent, {} );
  }

  showDiscount() {
    let dialogRef = this.dialog.open(DialogDiscountComponent, {} );
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => { this.params = params });
  }

}

export interface Item {
  id: number;
  name: string;
  value: number;
}