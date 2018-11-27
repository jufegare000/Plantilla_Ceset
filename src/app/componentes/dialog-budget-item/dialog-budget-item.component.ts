import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dialog-budget-item',
  templateUrl: './dialog-budget-item.component.html',
  styleUrls: ['./dialog-budget-item.component.css']
})
export class DialogBudgetItemComponent implements OnInit {
  form: FormGroup = new FormGroup({
    $key: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    unity: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    dedication: new FormControl('', Validators.required),
    unityValue: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  });

  type: BudgetItem;
  timeNeeded: boolean = false;
  dedicationNeeded: boolean = false;
  fpNeeded: boolean = false;
  isEdit: boolean = false;
  isCreate: boolean = false;

  sub: any;
  params: any;

  constructor(private router: Router, private route: ActivatedRoute, public dialog: MatDialog, @Inject(MAT_DIALOG_DATA, ) public data: any) { }

  ngOnInit() {
    switch(this.data.page) {
      case 'personal':
        this.type = PERSONAL;
        this.timeNeeded = true;
        this.dedicationNeeded = true;
        this.fpNeeded = true;
        break;
      case 'materiales':
        this.type = MATERIAL;
        break;
      case 'equipos':
        this.type = EQUIP;
        this.timeNeeded = true;
        break;
      case 'transporte':
        this.type = TRANSPORT;
        this.timeNeeded = true;
        break;
      case 'gastronomia':
        this.type = GASTRONOMY;
        break;
      case 'comercial':
        this.type = COMERCIAL;
        break;
      case 'comunicaciones':
        this.type = COMUNICATION;
        break;
      case 'locaciones':
        this.type = LOCATION;
        this.timeNeeded = true;
        break;
      case 'software':
        this.type = SOFTWARE;
        break;
      case 'otros':
        this.type = OTHER;
        break;
      default:
        this.type = OTHER;
        break;
    };

    this.isCreate = this.data.type === 'create' ? true : false;
    this.isEdit = !this.isCreate;

    console.log(this.data.row);
  }

  deleteItem() {
    let dialogRef = this.dialog.open(FooterComponent, {
      data: {
        page: this.params['budgetItem']
      }
    });
  }

}

const PERSONAL: BudgetItem = {
  description: [
    'Auxiliar',
    'Auxiliar Logístico',
    'Contrato (CIS)',
    'Coordinador Proyectos',
    'Experto',
    'Mensajero',
    'Monitor',
    'Practicante',
    'Profesional',
    'Vinculado (UdeA)'
  ],
  unity: [
    'Año',
    'Día',
    'Entregable',
    'Hora',
    'Mes',
    'Semestre',
    'Trimestre'
  ]
}

const MATERIAL: BudgetItem = {
  description: [
    'Agendas',
    'Baterías',
    'Block iris',
    'Bolsa Personalizada',
    'Bolsillo',
    'Borrador de Goma',
    'Borrador de Tablero',
    'Botas de Seguridad',
    'Caja de colores',
    'Camisetas',
    'Carpeta AZ',
    'Carpeta Catálogo 1"',
    'Carpeta Catálogo 2"',
    'Carpeta Catálogo 3"',
    'Carpeta Celuguía/Legajadora Carta',
    'Carpeta Celuguía/Legajadora Oficio',
    'Carpeta Institucional',
    'Carpeta Personalizada',
    'Carpeta Plástica Carta',
    'Carpeta Plástica Oficio',
    'Cascos de Seguridad',
    'Chaleco Identificación',
    'Cinta Plástica Emabalar',
    'Cinta Plástica Embalar',
    'Cinta Plástica Enmascarar',
    'Cinta Plástica Transparente',
    'Clips Mariposa',
    'Clips Metálicos',
    'Cuaderno Grande',
    'Cuaderno Pequeño',
    'Equipo para trabajo en altura',
    'Escarapelas',
    'Fotocopias',
    'Gorras',
    'Impresiones a color',
    'Labels',
    'Lapicero',
    'Lapicero Intitucional/Personalizado',
    'Lápiz',
    'Libreta Bitácora',
    'Libreta Institucional/Personalizada',
    'Maletín Institucional/Personalizado',
    'Marcador de Tablero',
    'Marcador Permanente',
    'Opalinas',
    'Overol',
    'Pilas',
    'Pliegos de papel',
    'Portapendones',
    'Postick',
    'Recarga impresora',
    'Resma de papel',
    'Revisteros',
    'Señalador Tablero',
    'Sitckers',
    'Sobres de manila',
    'Tabla Portapapeles',
    'Tijeras',
    'Torre de Discos',
    'Equipos de protección',
    'Equipos de trabajo en altura',
    'Insumos de Oficina',
    'Otros'
  ],
  unity: [
    'Unidad',
    'Global'
  ]
}

const EQUIP: BudgetItem = {
  description: [
    'Adquisición Cámara Fotográfica',
    'Adquisición Computador Escritorio',
    'Adquisición Computador Portátil',
    'Adquisición de Tablet´s',
    'Adquisición Escaner',
    'Adquisición Impresoras',
    'Adquisición USB',
    'Adquisición insumos de Laboratorio',
    'Adquisición equipos de Laboratorio',
    'Alquiler Computador Esctritorio',
    'Alquiler Computador Portátil',
    'Alquiler Datáfono',
    'Alquiler de Tarima',
    'Alquiler Equipos de Laboratorio',
    'Alquiler insumos de Laboratorio',
    'Alquiler Escaner',
    'Alquiler Impresoras',
    'Alquiler Mobiliario Stand',
    'Alquiler Panelería',
    'Alquiler Servicio de Sonido',
    'Alquiler Servicios Audiovisuales (Sonido + Luces + Video)',
    'Alquiler Servicios de Luces',
    'Cables de Red/HDMI/Datos/VGA/Convertidor USB y RED',
    'Extensión Eléctrica',
    'GPS',
    'Otros'
  ],
  unity: [
    'Año',
    'Día',
    'Entregable',
    'Hora',
    'Mes',
    'Semestre',
    'Trimestre',
    'Unidad',
    'Global'
  ]
}

const TRANSPORT: BudgetItem = {
  description: [
    'Tiquetes avión',
    'Transporte Bus',
    'Transporte Buseta',
    'Transporte Camioneta',
    'Transporte no Convencional',
    'Transporte Taxi',
    'Transporte Van',
    'Viáticos',
    'Otro'
  ],
  unity: [
    'Día',
    'Hora',
    'Trayecto'    
  ]
}

const GASTRONOMY: BudgetItem = {
  description: [
    'Almuerzo con Servicio',
    'Almuerzo Empacado',
    'Botellas de agua',
    'Cena con Servicio',
    'Cena Empacado',
    'Coctel',
    'Estación de Café',
    'Grupos Culturales',
    'Refrigerio',
    'Servicio de Alimentación',
    'Otro' 
  ],
  unity: [
    'Unidad',
    'Global'    
  ]
}

const COMERCIAL: BudgetItem = {
  description: [
    'Afiche',
    'Agenda Programática',
    'Anuncio de Prensa',
    'Anuncio de Revista',
    'Automatización de procesos del CESET',
    'Banners',
    'Boletín de Prensa',
    'Bonos de Descuento',
    'Brochure',
    'Carne',
    'Cuña radial ',
    'Diseño Página Web',
    'Identidad Grafíca',
    'Impresiones',
    'Pasacalle',
    'Pauta en Televisión ',
    'Pendón',
    'Pieza Gráfica',
    'Plataforma Mail Marketing',
    'Plataforma Pagos en Linea',
    'Plegables',
    'Post para Redes',
    'Posters',
    'Rompe Tráfico',
    'Señaletica',
    'Slides',
    'Social Media',
    'Souvenirs',
    'Tarjetas de Invitación',
    'Tarjetas de Presentación',
    'Totems',
    'Video',
    'Volantes',
    'Habladores',
    'Otros'
  ],
  unity: [
    'Unidad',
    'Global'
  ]
}

const COMUNICATION: BudgetItem = {
  description: [
    'Plan de Datos',
    'Plan de Voz',
    'Equipo Celular',
    'Envío de Correspondencia',
    'Otro'
  ],
  unity: [
    'Unidad',
    'Global'
  ]
}

const LOCATION: BudgetItem = {
  description: [
    'Auditorio',
    'Aula de cómputo',
    'Laboratorio',
    'Salón de Clase',
    'Salones de eventos',
    'Otro'
  ],
  unity: [
    'Día',
    'Global',
    'Hora',
    'Unidad'    
  ]
}

const SOFTWARE: BudgetItem = {
  description: [
    'Licencia Wiz IQ',
    'Licencia Adobe',
    'Plataforma Moodle',
    'Desarrollo de contenidos',
    'Mantenimiento Plataforma',
    'Plataforma Wen Conference',
    'Licencia ArcGis',
    'Licencia AutoCad',
    'Licencia Projetc',
    'Licencia Inventor',
    'Licencia Acces',
    'Licencia Office',
    'Otro'
  ],
  unity: [
    'Global',
    'Unidad'    
  ]
}

const OTHER: BudgetItem = {
  description: [
    'Normas',
    'Permisos',
    'Pólizas',
    'Seguro',
    'Servicios de Laboratorio',
    'Servicios Técnicos',
    'Otro'    
  ],
  unity: [
    'Global',
    'Unidad'    
  ]
}

export interface BudgetItem {
  description: String[];
  unity: String[];
}