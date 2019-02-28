import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../../servicios/user.service';
import { LoginService } from '../../auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public teta = false;

  form: FormGroup = new FormGroup({
    $key: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, this.responseValidator(this)])
  });

  captchaResolved: boolean = false;

  constructor(private userService: UserService, private router: Router, private loginService : LoginService) { }

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
    return this.form.controls['email'].hasError('required') ? 'Digita tu Correo Electrónico' : this.form.controls['email'].hasError('email') ? 'Digita correctamente tu Correo Electronico' : '';
  }

  getPassErr(): string {
    return this.form.controls['pass'].hasError('credentials') ? this.credentialError ? this.credentialError.message : '' : this.form.controls['pass'].hasError('required') ? 'Digita tu Contraseña' : '';
  }

  resetCredential() {
    this.credentialError = null;
    this.form.controls['pass'].setValue(this.form.controls['pass'].value);
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
      nameUser: form['email'].value,
      password: form['pass'].value
    }

    const strUser = JSON.stringify(user);
    console.log(user);
    this.userService.getAuth(user)
    .subscribe(resultado => {
      // Llaman método guardarDatosUsuario de login.service
      resultado.status == 403 ? console.log(403) : console.log(200);
      //this.loginService.guardarDatosUsuario(resultado.token);
    }, error => {
      // si hay algún error haga algo
      this.credentialError = {status: error.status, message: 'Email y/o contraseña no concuerdan'}
      this.form.controls['pass'].setValue('');
    });
    //this.router.navigate(['/inicio']);
  }

  credentialError: {status: number, message: string} | null = null;

  responseValidator(params: any) : ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      console.log(params.credentialError);
      if(params.credentialError)
        return { 'credentials': true };
      return null
    }
  }

  ngOnInit() {
    /*this.userService.getRole().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })*/
  }
}
