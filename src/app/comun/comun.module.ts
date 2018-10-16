import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTableModule,
  MatPaginatorModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatMenuModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavComponent } from '../componentes/sidenav/sidenav.component';
import { DialogConfirmarComponent } from '../componentes/dialog-confirmar/dialog-confirmar.component';


@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents: [
    DialogConfirmarComponent
  ],
  declarations: [
    SidenavComponent,
    DialogConfirmarComponent],
  exports: [
    SidenavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ComunModule { }
