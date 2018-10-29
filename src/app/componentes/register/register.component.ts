import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';
import * as deepEqual from 'deep-equal';

import { ValidateMatch } from '../../validators/matchValidator';
import { RolService } from '../../servicios/rol.service';
import { Rol } from '../../modelos/rol';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private rolSs: RolService) { }

  rol: Rol = new Rol();

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', [Validators.required, Validators.minLength(10)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(10)]),
    id: new FormControl('', [Validators.required]),
    idType: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmEmail: new FormControl(''),
    pass: new FormControl('', [Validators.required]),
    confirmPass: new FormControl(''),
    role: new FormControl('', [Validators.required])
  });

  hide: boolean = true;
  blur: boolean = false;
  submited: boolean = false;

  roles = ['Coordinador Académico', 'Coordinador Logístico', 'Coordinador Comercial'];
  idTypes = ['Tarjeta de Identidad', 'Cedula de Ciudadanía', 'Cedula de Extranjería', 'Otro'];

  iconColor() {
    return this.form.controls['pass'].hasError('required') ? this.blur ||  this.submited ? 'warn' : '' : '';
  }

  anyError() : boolean {
    return this.form.invalid;
  }

  getNameErr() : string {
    return this.form.controls['fullName'].hasError('required') || this.form.controls['fullName'].hasError('minlength') ? 'Digita tu Nombre Completo' : '';
  }

  getEmailErr() : string {
    return this.form.controls['email'].hasError('required') ? 'Digita tu Correo Electrónico' : this.form.controls['email'].hasError('email') ? 'Digita correctamente tu Correo Electronico' : this.form.controls['confirmEmail'].hasError('match') ? 'Los Correos Electronicos no concuerdan' : '';
  }

  getConfirmEmailErr() : string {
    return this.form.controls['confirmEmail'].hasError('required') ? 'Digita tu Correo Electrónico' : this.form.controls['confirmEmail'].hasError('email') ? 'Digita correctamente tu Correo Electronico' : this.form.controls['confirmEmail'].hasError('match') ? 'Los Correos Electrónicos no concuerdan' : '';
  }

  getPassErr() : string {
    return this.form.controls['pass'].hasError('required') ? 'Digita tu Contraseña' : '';
  }

  getConfirmPassErr() : string {
    return this.form.controls['confirmPass'].hasError('required') ? 'Digita tu Contraseña' : this.form.controls['confirmPass'].hasError('match')  ? 'Las Contraseñas no concuerdan' : '';
  }

  getRoleErr() : string {
    return this.form.controls['role'].hasError('required') ? 'Elige un rol' : '';
  }

  submit() {
    console.log(this.form.controls['id'].value);
    this.rol.id = parseInt(this.form.controls['id'].value);
    this.rol.estado = "en aprovacion";
    this.rol.fechaCreacion = Date();
    this.rol.fechaModificacion = Date();
    this.rol.nombre = this.form.controls['fullName'].value + " " + this.form.controls['lastName'];

    this.rolSs.create(this.rol);
  }

  ngOnInit() {
    this.form.controls.confirmPass.setValidators([Validators.required, ValidateMatch(this.form.controls.pass)]);
    this.form.controls.confirmEmail.setValidators([Validators.required, Validators.email, ValidateMatch(this.form.controls.email)]);

    document.getElementById('confirmEmail').onpaste = (object) => {
      object.preventDefault();
      alert('Acción prohibida');
    }

    document.getElementById('email').oncopy = (object) => {
      object.preventDefault();
      alert('Acción prohibida');
    }
  }
}