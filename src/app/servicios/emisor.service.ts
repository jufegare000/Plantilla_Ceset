import { Component, Injectable, Input, Output, EventEmitter } from '@angular/core';
@Injectable()
export class EmisorService {
  @Output() valorPrueba: EventEmitter<string> = new EventEmitter();

  constructor() {}

  obtenerValorPrueba(): any {
    return this.valorPrueba;
  }
  cambiarValorPrueba(valor: string) {
    this.valorPrueba.emit(valor);
  }

}
