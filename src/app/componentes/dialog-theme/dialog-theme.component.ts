import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-theme',
  templateUrl: './dialog-theme.component.html',
  styleUrls: ['./dialog-theme.component.css']
})
export class DialogThemeComponent implements OnInit {

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    coordinator: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    contractType: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    hours: new FormControl('', [Validators.required]),
    start: new FormControl('', [Validators.required]),
    finish: new FormControl('', [Validators.required]),
    contact: new FormControl('', [Validators.required]),
    dependency: new FormControl('', [Validators.required]),
    link: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

}
