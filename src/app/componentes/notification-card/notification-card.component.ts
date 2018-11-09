import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-card',
  templateUrl: './notification-card.component.html',
  styleUrls: ['./notification-card.component.css']
})
export class NotificationCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hello: boolean = false;

  NOTIFICATION_TYPES = ['message', 'confirm', 'option', 'input'];

  notifications = [
    {
      type: 'message',
      name: 'Recordatorio',
      content: 'Revisar actividad academida "Nombre de la Actividad"'
    },
    {
      type: 'confirm',
      name: 'Asignación de Roles',
      content: 'Pepito Perez quiere ser "Nombre del Rol"',
      options: [{
        content: 'Aceptar',
        color: 'primary'
      },{
        content: 'Declinar',
        color: 'warn'
      }]
    },
    {
      type: 'option',
      name: '"Nombre de la actividad"',
      content: 'Selecciona el tipo de actividad que le corresponde a "Nombre de la actividad"',
      options: ['Opcion 1', 'Opcion 2', 'Opcion 3', 'Opcion 4']
    },
    {
      type: 'input',
      name: '"Nombre de la actividad"',
      content: 'Nombre de la actividad que se está creando: ',
    }
  ]

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  inputFocus = false

  click() {
    console.log('Holi :)');
  }

}
