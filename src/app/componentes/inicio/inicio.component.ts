import { Component, OnInit, Inject } from '@angular/core';
import { RolService } from '../../servicios/rol.service';
import { Rol } from '../../modelos/rol';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  roles: Rol[];
  rol: Rol;
  error: any;

  constructor(private rolSs: RolService) {
    this.rolSs.getAll()
    .subscribe(listaRoles => {
      console.log("Retornó");
      this.roles = listaRoles;
    }, error =>{
      this.error = error;
    });
    this.rolSs.getById(1)
    .subscribe(rol => {
      console.log('Funcionó!!!');
      this.rol = rol;
    }, error => {
      this.error = error;
    });
  }

  ngOnInit() {
  }

}
