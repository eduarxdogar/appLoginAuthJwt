import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';
import { DialogComponent } from 'src/app/cliente/dialog/dialog.component';
import { Concepto } from 'src/app/models/concepto';
import { Venta } from 'src/app/models/venta';
import { ApiventaService } from 'src/app/services/apiventa.service';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.scss']
})
export class DialogoComponent implements OnInit {
  public venta: Venta;
  public conceptos: Concepto[];

  public conceptoFrom = this.fromBuilder.group({
    cantidad: [0, Validators.required],
    importe: [0, Validators.required],
    idProducto: [1, Validators.required],
  });


  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              public snackBar: MatSnackBar,
              private fromBuilder: FormBuilder,
              public apiVenta: ApiventaService
  ) {
    this.conceptos = [];
    this.venta = { idCliente: 1, conceptos:[] };
   }
   close() {
    this.dialogRef.close();

   }

   addConcepto() {
    this.conceptos.push({...this.conceptoFrom.value});
   }

   addVenta() {
    this.venta.conceptos = this.conceptos;
    this.apiVenta.add(this.venta).subscribe(response => {
      
        this.dialogRef.close();
        this.snackBar.open('Venta Hecha Con Exito',
           '', {
            duration: 2000
           });
      

    });

   }

  ngOnInit(): void {
  }

}

