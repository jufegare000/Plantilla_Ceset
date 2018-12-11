import { Component, OnInit } from '@angular/core';
import { Item } from '../budget/budget.component';
import { BudgetItem } from '../budget-item/budget-item.component';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivityService } from '../../servicios/activity.service';
import { AcademicActivity } from '../../modelos/academicActivity';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

  itemControl = new FormControl('', [Validators.required]);

  displayedColumns = ['name', 'quant', 'value', 'cost'];
  
  sub: any;
  params: any;

  showDataForm() {
    console.log(this.itemControl.value);
    if(this.itemControl.value this.route.url)
    this.router.navigate([`inicio/actividades/editar/${this.itemControl.value}/temas`]);
  }

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog, private activityService: ActivityService) { }

  activity: AcademicActivity;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => { this.params = params });
    this.activity = this.activityService.activities[this.params['code'] - 1];
    this.itemControl.setValue(this.activity.id);
  }

  budgetData: AcademicActivity[] = this.activityService.activities;


  budgetItemData: BudgetItem[] = [
    { id: 1, name: 'Holiwis', quantity: 1, value: 5000, realCost: 4500 },
    { id: 2, name: 'Holiwis', quantity: 1, value: 5000, realCost: 4500 },
    { id: 3, name: 'Holiwis', quantity: 1, value: 5000, realCost: 4500 },
    { id: 4, name: 'Holiwis', quantity: 1, value: 5000, realCost: 4500 }
  ]

  budgetItemDataSource = new MatTableDataSource(this.budgetItemData);

}
