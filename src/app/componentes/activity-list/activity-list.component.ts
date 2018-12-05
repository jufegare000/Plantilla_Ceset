import { Component, OnInit, ViewChild , Injectable, Output, EventEmitter} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatPaginatorIntl } from '@angular/material';
import { Router } from '@angular/router';
import { AcademicActivity, createNewActivity } from '../../modelos/academicActivity';
import { ActivityService } from '../../servicios/activity.service';
import { Restangular } from 'ngx-restangular';
import { createPerson } from '../../modelos/person';
import { createNewUserer } from '../../modelos/user';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'coordinatorName'];
  dataSource: MatTableDataSource<AcademicActivity>;
  activities: AcademicActivity[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private activityService: ActivityService, private restangular: Restangular) {
    // Create 100 users
    const activities: AcademicActivity[] = [];
    for (let i = 1; i <= 100; i++) { activities.unshift(createNewActivity(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(activities);
    this.activities = activities;
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  clicked(row: AcademicActivity) {
    this.activityService.activity = row;
    this.router.navigate(['/inicio/actividades/editar/' + row.id]);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  createActivity() {
    this.router.navigate(['/inicio/actividades/crear']);
  }

  clic() {
    console.log('clicked!');
    this.activities.unshift(createNewActivity(101));
    this.dataSource = new MatTableDataSource(this.activities);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.restangular
      .all('usuarios')
      .post(createPerson(3));
  }

  ngOnInit() {
    console.log('Se cargó la vista de Lista de Actividades', this.activityService.roles);
  }
}

/*export interface UserData {
  code: string;
  name: string;
  attendant: string;
}*/

@Injectable()
export class MatPaginatorIntlSpanish extends MatPaginatorIntl {
    itemsPerPageLabel = 'Actividades por página: ';
    nextPageLabel = 'Siguiente Página';
    previousPageLabel = 'Página Anterior';

    getRangeLabel = (page: number, pageSize: number, length: number) => {
        return ((page * pageSize) + 1) + ' - ' + ((page * pageSize) + pageSize) + ' de ' + length;
    }
}
