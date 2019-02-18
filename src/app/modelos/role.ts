export interface Role {
    id: number;
    name: string;
    date?: Date;
}

export interface RoleRequest {
    id: number;
    role: Role;
    date: Date;
}

export const ROLES: Role[] = [
    { id: 1, name: 'Coordinador Académico' },
    { id: 2, name: 'Coordinador Logístico' },
    { id: 3, name: 'Coordinador Comercial' }
];

export function createRole(name: string): Role {
    const id = ROLES[ROLES.length - 1].id + 1;;
    const auxName = name;
    const date = new Date();
    
    const role: Role = {
        id: id,
        name: auxName,
        date: date
    }

    return role;
}