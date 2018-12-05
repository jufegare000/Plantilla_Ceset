import { Userer, createNewUserer } from "./user";

export interface Person {
    idPerson: number;
    completeName: string;
    documentType: string;
    document: string;
    email: string;
    userCollection: Userer;
    idUser: Userer;
}

export function createPerson(id: number) {
    return {
        idPerson: id,
        completeName: 'Pepito Perez',
        documentType: 'Cedula de Ciudadanía',
        document: '1214741495',
        email: 'pipe-oh@hotmai',
        userCollection: createNewUserer(id + 1),
        idUser: createNewUserer(id + 1)
    }
}