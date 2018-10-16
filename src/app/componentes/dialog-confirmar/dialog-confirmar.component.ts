import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-confirmar',
  templateUrl: './dialog-confirmar.component.html',
  styleUrls: ['./dialog-confirmar.component.css']
})
export class DialogConfirmarComponent implements OnInit {

  mensajeConfirmacion = '';
  confirmado = false;

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.mensajeConfirmacion = data.mensajeConfirmacion;
     }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  aceptar(){
    this.confirmado = true;
    this.cerrarDialog();
  }

  cerrarDialog() {
    this.dialogRef.close(this.confirmado);
  }

}
