import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { ComunModule } from '../comun/comun.module';

@NgModule({
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    ComunModule
  ],
  declarations: [AdministradorComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AdministradorModule { }