export interface Role {
    idRole: number;
    name: string;
    date?: Date;
}

export interface RoleRequest {
    id: number;
    role: Role;
    date: Date;
}

export const ROLES: Role[] = [
    { idRole: 1, name: 'Coordinador Académico' },
    { idRole: 2, name: 'Coordinador Logístico' },
    { idRole: 3, name: 'Coordinador Comercial' }
];

export function createRole(name: string): Role {
    const id = ROLES[ROLES.length - 1].idRole + 1;;
    const auxName = name;
    const date = new Date();
    
    const role: Role = {
        idRole: id,
        name: auxName,
        date: date
    }

    return role;
}