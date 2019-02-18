export class Rol{
    estado: string;
    fechaCreacion: string;
    fechaModificacion: string;
    id: number;
    nombre: string;

    constructor(estado?: string, fechaCreacion?: string, id?:number,
        fechaModificacion?: string, nombre?:string){
        this.id = id;
        this.nombre = nombre;
        this.estado = estado;
        this.fechaCreacion = fechaCreacion;
        this.fechaModificacion = fechaModificacion;
    }
} 