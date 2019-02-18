import { Injectable, OnInit } from '@angular/core';
import { AcademicActivity } from '../modelos/academicActivity';

@Injectable()
export class ActivityService {
  roles;
  error;
  activities: AcademicActivity[];

  activity: AcademicActivity;

  getRoles() {
    return this.roles;
  }

}
