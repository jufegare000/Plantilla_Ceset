import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-dialog-discount',
  templateUrl: './dialog-discount.component.html',
  styleUrls: ['./dialog-discount.component.css']
})
export class DialogDiscountComponent implements OnInit {

  budgetData: Item[]  = [
    { id: 0, rateName: 'Público UdeA + PP', place: 1234567890, value: 0, total: 0 },
    { id: 1, rateName: 'Grupos + PP', place: 0 , value: 0, total: 0 },
    { id: 2, rateName: 'Público UdeA', place: 0 , value: 0, total: 0 },
    { id: 3, rateName: 'Grupos', place: 0 , value: 0, total: 0 },
    { id: 4, rateName: 'Tarifa Plena', place: 0 , value: 0, total: 0 },
    { id: 5, rateName: 'Tarifa Plena + PP', place: 0 , value: 0, total: 0 },
    { id: 6, rateName: 'Especiales', place: 0 , value: 0, total: 0 }
  ];

  displayedColumns = ['rateName', 'place', 'value', 'total'];

  budgetDataSource = new MatTableDataSource(this.budgetData);

  constructor() { }

  ngOnInit() {
  }

}

export interface Item {
  id: number;
  rateName: string;
  place: number;
  value: number;
  total: number;
}