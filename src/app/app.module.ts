import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {
  MatSidenavModule,
  MatInputModule,
  MatButtonModule,
  MatDatepickerModule,
  MatCardModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatSelectModule,
  MatSnackBarModule,
  MatDialogModule,
  MatProgressBar,
  MatProgressBarModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './auth/auth-guard.service';
import { CifradoService } from './servicios/cifrado.service';

import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './auth/restConfig';
import { InicioRoutingModule } from './componentes/inicio/inicio-routing.module';
import { JwtService } from './servicios/jwt.service';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatSelectModule,
    InicioRoutingModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
    RestangularModule.forRoot( [JwtService], RestangularConfigFactory)
  ],
  providers: [
    CifradoService,
    AuthGuard,
    JwtService
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
