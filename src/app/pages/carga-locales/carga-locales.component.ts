import { Component, OnInit } from '@angular/core';
import { ServicioService } from "../../services/servicio.service"

@Component({
  selector: 'app-carga-locales',
  templateUrl: './carga-locales.component.html',
  styleUrls: ['./carga-locales.component.css']
})
export class CargaLocalesComponent implements OnInit {

  nombre: string = "";
  email: string = "";
  telefono: string = "";
  localidad: string = "";

  message: string = "";

  constructor(private regService: ServicioService) { }

  ngOnInit(): void {
  }

  cargarLocal() {
    this.regService.guardarLocal(this.nombre, this.email, this.telefono, this.localidad);
    setTimeout(() => {
      this.message = 'Local guardado!';
    }, 2000);
  }

}
