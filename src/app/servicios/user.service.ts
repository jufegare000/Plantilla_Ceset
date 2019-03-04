import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { User, AuthUser } from '../modelos/user';

@Injectable()
export class UserService {

  constructor(private restangular: Restangular) { }

  getAuth(user: AuthUser): Observable<any> {
    return this.restangular
      .all('usuarios/autenticar')
      .post(user);
  }

  /*getRole(): Observable<any> {
    return this.restangular.one('rol').get();
  }*/
}
