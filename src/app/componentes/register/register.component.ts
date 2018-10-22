import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  completed;
  captchaResolved = false;

  constructor() { }

  hide = true;
  blur = false;

  color() {
    return this.password.hasError('required') && this.blur ? 'warn' : '';
  }

  resolved() {
    this.captchaResolved = true;
  }

  isCompleted() {
    return !this.email.hasError('required') && !this.email.hasError('email') && !this.password.hasError('required');
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'Digite su Email' :
      this.email.hasError('email') ? 'Digite un Email valido' :
        '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'Digite su Contraseña' :
      '';
  }

  buttonInfo() {
    return this.email.hasError('required') ? 'El campo "Email" es requerido' : this.email.hasError('email') ? 'Digita un email valido' : this.password.hasError('required') ? 'El campo "Contraseña" es requerido' : !this.captchaResolved ? 'Comprueba que eres humano' : '';
  }
  
  ngOnInit() {
  }

}
