import { Rol } from './rol';
export class Token{
    iss : number;
    exp: number;
    sub: string;
    usr: string;
    nom : string;
    ide : string;
    rol : number;
    rls : Rol[];
    jwt : string;

   constructor(tokenString : string){

   }
}