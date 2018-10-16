export class Rol{
    id: number;
    estado: string;
    nombre: string;
    fechaCreacion: string;
    fechaModificacion: string;

    constructor(id:number, nombre:string){
        this.id = id;
        this.nombre = nombre;
    }
}