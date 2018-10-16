import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ModeOfOperation, utils} from 'aes-js';

@Injectable()
export class CifradoService {

    cifrarAES128(mensaje: string): string{
        var cifrado = new ModeOfOperation.ofb(environment.claveDeCifrado, environment.vectorDeInicializacion);
        var mensajeEnBytes = utils.utf8.toBytes(mensaje);
        var mensajeCifradoEnBytes = cifrado.encrypt(mensajeEnBytes);
        var mensajeCifradoenHex =  utils.hex.fromBytes(mensajeCifradoEnBytes);
        return mensajeCifradoenHex;
      }
}