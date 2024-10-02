import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nomina',
  templateUrl: './nomina.component.html',
  styleUrls: ['./nomina.component.css']
})
export class NominaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  nombre: string;
  fecha: string;
  horaLlegada: string;
  horaSalida: string;
  horasTrabajadas: number;
  cuota: number;
  pagoTotal: number;

  calcularHorasTrabajadas() {
    if (this.horaLlegada && this.horaSalida) {
      const [horaLlegada, minutoLlegada] = this.horaLlegada.split(':').map(Number);
      const [horaSalida, minutoSalida] = this.horaSalida.split(':').map(Number);

      let totalHoras = horaSalida - horaLlegada;
      let totalMinutos = minutoSalida - minutoLlegada;

      if (totalMinutos < 0) {
        totalHoras -= 1;
        totalMinutos += 60;
      }

      this.horasTrabajadas = totalHoras + totalMinutos / 60;
      this.calcularPagoTotal();
    }
  }

  calcularPagoTotal() {
    if (this.horasTrabajadas && this.cuota) {
      this.pagoTotal = this.horasTrabajadas * this.cuota;
    }
  }
}
