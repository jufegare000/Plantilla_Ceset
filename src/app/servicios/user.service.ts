import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { User } from '../modelos/user';

@Injectable()
export class UserService {

  constructor(private restangular: Restangular) {   }

  getAuth(name): Observable<any> {
    console.log(name.password);
    return this.restangular
      .all('usuarios/autenticar')
      .post(name);
  }

  /*getRole(): Observable<any> {
    return this.restangular.one('rol').get();
  }*/
}
