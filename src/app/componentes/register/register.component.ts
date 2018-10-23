import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as deepEqual from 'deep-equal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmEmail: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required]),
    confirmPass: new FormControl('', [Validators.required]),
    role: new FormControl('', [Validators.required])
  });

  hide: boolean = true;
  blur: boolean = false;
  submited: boolean = false;

  roles = ['Coordinador Académico', 'Coordinador Logístico', 'Coordinador Comercial'];

  iconColor() {
    return this.form.controls['pass'].hasError('required') ? this.blur ||  this.submited ? 'warn' : '' : '';
  }

  anyError() : boolean {
    return this.form.controls['fullName'].hasError('required') || this.form.controls['email'].hasError('required') || this.form.controls['email'].hasError('email') || this.form.controls['confirmEmail'].hasError('required') || this.form.controls['confirmEmail'].hasError('email') || this.isEmailMatchErr() || this.form.controls['pass'].hasError('required') || this.form.controls['confirmPass'].hasError('required') || this.isPassMatchErr() || this.form.controls['role'].hasError('required');
  }

  isEmailMatchErr() : boolean {
    let email: string = this.form.controls['email'].value;
    let confirmEmail: string = this.form.controls['confirmEmail'].value;
    return !deepEqual(email, confirmEmail);
  }

  isPassMatchErr() : boolean {
    let pass: string = this.form.controls['pass'].value;
    let confirmPass: string = this.form.controls['confirmPass'].value;
    return !deepEqual(pass, confirmPass);
  }

  getNameErr() : string {
    return this.form.controls['fullName'].hasError('required') ? 'Digita tu Nombre Completo' : '';
  }

  getEmailErr() : string {
    return this.form.controls['email'].hasError('required') ? 'Digita tu Correo Electrónico' : this.form.controls['email'].hasError('email') ? 'Digita correctamente tu Correo Electronico' : '';
  }

  getConfirmEmailErr() : string {
    console.log('\nError de requerimiento: ' + this.form.controls['confirmEmail'].hasError('required'));
    console.log('Error de email: ' + this.form.controls['confirmEmail'].hasError('email'));
    console.log('Error de match: ' + this.isEmailMatchErr() + "\n");

    let mensaje : string = this.form.controls['confirmEmail'].hasError('required') ? 'Digita tu Correo Electrónico' : this.form.controls['confirmEmail'].hasError('email') ? 'Digita correctamente tu Correo Electronico' : this.isEmailMatchErr() ? 'Los Correos Electronicos no concuerdan' : '';

    console.log("\n" + mensaje + "\n");

    return mensaje;
  }

  getPassErr() : string {
    return this.form.controls['pass'].hasError('required') ? 'Digita tu Contraseña' : '';
  }

  getConfirmPassErr() : string {
    return this.form.controls['confirmPass'].hasError('required') ? 'Digita tu Contraseña' : this.isPassMatchErr() ? 'Las Contraseñas no concuerdan' : '';
  }

  getRoleErr() : string {
    return this.form.controls['role'].hasError('required') ? 'Elige un rol' : '';
  }

  ngOnInit() {
  }
}
