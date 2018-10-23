import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
    pass: new FormControl('', [Validators.required]),
    role: new FormControl('')
  });

  hide: boolean = true;
  blur: boolean = false;

  iconColor() {
    return this.form.controls['pass'].hasError('required') ? this.blur ? 'warn' : '' : '';
  }

  getErrorMessage() {
    return this.form.controls['fullName'].hasError('required') ? 'Holi' : 'Holiwis';
  }

  ngOnInit() {

  }
}
