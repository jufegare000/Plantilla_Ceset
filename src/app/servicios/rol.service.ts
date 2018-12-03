import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { Rol } from '../modelos/rol';

@Injectable()
export class RolService {

  constructor(private restangular: Restangular) { }

  getAll(): Observable<Rol[]>{
    return this.restangular.all('usuario').getList();
  }

  getById(id: number): Observable<Rol> {
    return this.restangular.one('rol', id).get();
  }

  create(rol: Rol) {
    this.restangular
    .all('rol')
    .post(rol);
  }
}
