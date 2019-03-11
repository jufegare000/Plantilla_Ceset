import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { Rol } from '../modelos/rol';
import { Role } from '../modelos/role';

@Injectable()
export class RolService {

  constructor(private restangular: Restangular) { }

  sessionRoles: Role[];

  getAll(): Observable<Rol[]>{
    return this.restangular.all('rol').getList();
  }

  getById(id: number): Observable<Rol> {
    return this.restangular.one('rol', id).get();
  }

  create(rol: Rol) {
    this.restangular
    .all('rol')
    .post(rol);
  }

  getPermissions(roles): Observable<any> {
    let numbers = [];
    for(let i = 0; i < roles.length; i++) {
      numbers[i] = roles[i].idRole;
    }
    return this.restangular
      .all('rol/permisos')
      .post(numbers);
  }
}
