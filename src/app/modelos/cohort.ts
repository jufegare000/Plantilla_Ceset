import { AcademicActivity } from "./academicActivity";

export interface Cohort {
    id: number;
    activity: AcademicActivity;
    initDate: Date;
    endDate: Date;
    state: string;
}

export function createNewCohort(id: number, activity?: AcademicActivity): Cohort {
    const initDate = new Date();
    initDate.setFullYear(2020);
    const endDate = new Date();
    endDate.setFullYear(2021);
    const state = STATES[id % 3];

  return {
    id: id,
    activity: activity,
    initDate: initDate,
    endDate: endDate,
    state: state
  };
}

export const STATES = [
    'En Contratación',
    'En Ejecución',
    'Finalizada'
]