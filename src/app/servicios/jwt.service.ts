import { Injectable } from '@angular/core';
import CryptoJS from 'crypto-js';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Token } from '../modelos/token';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class JwtService {


  header = {
    "alg": "HS256",
    "typ": "JWT"
  };

  data = {
    "iss": "auth-frontend",
    "sub": "",
    "exp": 0,
    "iat": 0
  };

  constructor() { }

  /**
   * Método que convierte un token JWT en string a un objeto Token del modelo
   * @param tokenString 
   */
  decodeToken(tokenString: string) {
    const helper = new JwtHelperService();
    let tokenJWT: Token;
    tokenJWT = helper.decodeToken(tokenString);
    tokenJWT.jwt = tokenString;
    return tokenJWT;

  }

  /**
   * Método que genera un token JWT para la autenticación con el backend
   */
  generarTokenAutenticacion(): any {
    const fechActual = new Date();
    let fechaExpiracionToken = fechActual;
    // token válido por 10 minutos
    fechaExpiracionToken.setMinutes(fechaExpiracionToken.getMinutes() + 10);

    const millisecondsExp = fechaExpiracionToken.getTime();
    const millisecondsExpIat = fechActual.getTime();

    this.data.exp = millisecondsExp;
    this.data.iat = millisecondsExpIat;

    let stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(this.header));
    let encodedHeader = this.base64url(stringifiedHeader);


    let stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(this.data));
    let encodedData = this.base64url(stringifiedData);


    let signature = encodedHeader + "." + encodedData;
    signature = CryptoJS.HmacSHA256(signature, environment.TOKEN_KEY);
    signature = this.base64url(signature);

    let token = encodedHeader + "." + encodedData + "." + signature;

    let observableToken = Observable.create(function (observer) {
      observer.next(token);
    });

    return observableToken;

  }

  esTokenValido(token: string): boolean {
    let tokenJWT: Token;
    const helper = new JwtHelperService();
    tokenJWT = this.decodeToken(token);

    // Si no se pudo decodificar el token
    if (!tokenJWT) { return false; }

    // Si el subject está vacío
    if (!tokenJWT.sub) { return false; }

    // Si el token expiró
    if (helper.isTokenExpired(token)) {
      localStorage.clear();
      return false;
    }

    return true;
  }

  base64url(source) {
    // Encode in classical base64
    let encodedSource = CryptoJS.enc.Base64.stringify(source);

    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, '');

    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');

    return encodedSource;
  }




}
