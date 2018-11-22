import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  displayedColumns = ['name', 'value'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  parseValue(value: number) {
    let strValue: string = value.toString();
    let endSub: string = strValue.substr(strValue.length - 3, 3);
    let midSub: string = strValue.substr(strValue.length - 6, 3);
    let startSub: string = strValue.substr(strValue.length - 9, 3);

    return `${startSub}'${midSub}.${endSub}`;
  }

  constructor() { }

  ngOnInit() {
  }

}

export interface Item {
  name: string;
  value: number;
}

const ELEMENT_DATA: Item[] = [
  { name: 'Personal/Recurso Humano', value: 1234567890 },
  { name: 'Materiales/Suministros/Obra Fisica', value: 0 },
  { name: 'Equipos/Maquinaria', value: 0 },
  { name: 'Transporte/Sostenimiento en Campo', value: 0 },
  { name: 'Gastronomía', value: 0 },
  { name: 'Estrategia Comunicacional/Comercial', value: 0 },
  { name: 'Comunicaciones', value: 0 },
  { name: 'Locaciones', value: 0 },
  { name: 'Software', value: 0 },
  { name: 'Otros', value: 0 }
];