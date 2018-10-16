import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../auth/login.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  nombre_usuario: string;

  constructor(private loginService: LoginService) {
    
  }

  ngOnInit() {
  }

}
