import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../../servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    $key: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required])
  });

  captchaResolved: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  hide: boolean = true;
  blur: boolean = false;

  iconColor() {
    return this.form.controls['pass'].invalid && this.blur ? 'warn' : '';
  }

  resolved() {
    this.captchaResolved = true;
    setTimeout(() => {
      this.captchaResolved = false;
    }, 120000)
  }

  getEmailErr(): string {
    return this.form.controls['email'].hasError('required') ? 'Digita tu Correo Electrónico' : this.form.controls['email'].hasError('email') ? 'Digita correctamente tu Correo Electronico' : this.form.controls['confirmEmail'].hasError('match') ? 'Los Correos Electronicos no concuerdan' : '';
  }

  getPassErr(): string {
    return this.form.controls['pass'].hasError('required') ? 'Digita tu Contraseña' : '';
  }

  buttonInfo() {
    return this.form.controls['email'].hasError('required') ? 'El campo "Email" es requerido' : this.form.controls['email'].hasError('email') ? 'Digita un email valido' : this.form.controls['pass'].hasError('required') ? 'El campo "Contraseña" es requerido' : !this.captchaResolved ? 'Comprueba que eres humano' : '';
  }

  goToRegister() {
     this.router.navigateByUrl('/registro');
  }

  onSubmit() {
    const form = this.form.controls;

    const user = {
      usuario: form['email'].value,
      clave: form['pass'].value
    }

    const strUser = JSON.stringify(user);
    console.log(user);
    this.userService.getAuth(strUser)
    .subscribe(resultado => {
      // Llaman método guardarDatosUsuario de login.service
      console.log(resultado);
    }, error => {
      console.log(error);
      // si hay algún error haga algo
    });
    //this.router.navigate(['/inicio']);
  }

  ngOnInit() {
  }
}
