import { Component, OnInit, Input, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AcademicActivity, createNewActivity } from '../../modelos/academicActivity';
import { ActivityService } from '../../servicios/activity.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
  currentActivity: AcademicActivity;
  createView: boolean;

  params: any;

  private sub: any;

  generalForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    dependency: new FormControl('', [Validators.required]),
    resGroup: new FormControl(),
    coordinator: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    duration: new FormControl('', [Validators.required])
  });

  contractForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    type: new FormControl('', [Validators.required]),
    entity: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required])
  });

  budgetForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    value: new FormControl({value: '000', disabled: true}, [Validators.required])
  });

  cofinancingForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    entity: new FormControl('', [Validators.required]),
    concept: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required])
  });

  cohortForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    reuneCode: new FormControl('', [Validators.required]),
    sigepCode: new FormControl('', [Validators.required])
  });

  types = ['Consultoría Profesional', 'Servicio Técnico de Laboratorio', 'Educación no Formal', 'Gestión Tecnológica'];
  
  getNameErr() {
    return '';
  }
  getTypeErr() {
    return '';
  }

  goToBudget() {
    this.router.navigate([`inicio/actividades/editar/${this.params['code']}/presupuesto`]);
  }

  anyError() {
    return false;
  }

  cancel() {
    this.router.navigate(['inicio/actividades']);
  }

  createActivity() {
    this.router.navigate['inicio/cohortes/crear'];
  }

  constructor(private router: Router, private route: ActivatedRoute, private activityService: ActivityService) { }

  ngOnInit() {
    let activity: AcademicActivity = this.activityService.activity;
    this.currentActivity = activity;
    this.sub = this.route.params.subscribe(params => { this.params = params });

    this.createView = this.router.url.includes('crear');

    if(!activity)
      activity = this.activityService.activities[parseInt(this.params['code']) - 1];

    if(!this.createView) {
      let form: FormGroup = this.generalForm;
      form.controls['name'].setValue(activity.name);
      form.controls['type'].setValue(activity.type);
      form.controls['dependency'].setValue(activity.dependency);
      form.controls['resGroup'].setValue(activity.investigationGroup || '');
      form.controls['coordinator'].setValue(activity.coordinatorName);
      form.controls['phone'].setValue(activity.coordinatorPhone);
      form.controls['email'].setValue(activity.coordinatorEmail);
      form.controls['duration'].setValue(activity.duration);
    }
  }

  data: any[] = [];

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    //if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const data = [];

    for(let i = 0; i < target.files.length; i++) {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        /* read workbook */
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

        /* grab first sheet */
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        /* save data */
        data.push(XLSX.utils.sheet_to_json(ws, {header: 1}));
      };
      reader.readAsBinaryString(target.files[i]);
    }
    this.data = data;
  }

  console() {
    console.log(this.data);
  }

}
