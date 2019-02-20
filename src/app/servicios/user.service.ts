import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { User } from '../modelos/user';

@Injectable()
export class UserService {

  constructor(private restangular: Restangular) {   }

  getAuth(name: string, pass: string): Observable<User> {
    return this.restangular.one('usuarios/autenticar', name, pass).get();
  }
}
