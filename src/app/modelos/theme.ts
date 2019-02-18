export interface Theme {
    id: number;
    name: string;
    coordinator: string;
    document: number;
    contractType: string;
    hours: number;
    startDate: Date;
    finishDate: Date;
    contact: number[];
    dependency: string;
    link: string;
}