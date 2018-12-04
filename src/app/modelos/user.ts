import { ROLES, Role, RoleRequest } from './role';

export interface User {
    name: string;
    lastName: string;
    id: number;
    idType: string;
    email: string;
    role?: Role[];
    roleRequest?: RoleRequest;
}

export function createNewUser(id: number, name?: string): User {
    const auxName = name || NAMES[Math.round(Math.random() * (NAMES.length - 1))];
    const lastName = NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0);
    const idType = ID_TYPES[Math.round(Math.random() * (ID_TYPES.length - 1))];
    const email = auxName.toLowerCase() + lastName.toLocaleLowerCase() + '@' + auxName.toLocaleLowerCase() + '.com';
    const role = [ROLES[Math.round(Math.random() * (ROLES.length - 1))], ROLES[Math.round(Math.random() * (ROLES.length - 1))], ROLES[Math.round(Math.random() * (ROLES.length - 1))]];

    const needRequest = Math.round(Math.random() * 2) == 1;
    const roleRequest: RoleRequest = needRequest ? { id: 1, role: role[1], date: new Date() } : null ;

  return {
    id: id,
    name: auxName,
    lastName: lastName,
    idType: idType,
    email: email,
    role: role,
    roleRequest: roleRequest
  };
}

export const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export const ID_TYPES = [
    'Tarjeta de Identidad',
    'Cedula de Ciudadanía',
    'Cedula de Extranjería',
    'Otro'
];