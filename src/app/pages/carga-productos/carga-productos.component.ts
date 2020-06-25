import { Component, OnInit } from '@angular/core';
import { ServicioService } from "../../services/servicio.service"

@Component({
  selector: 'app-carga-productos',
  templateUrl: './carga-productos.component.html',
  styleUrls: ['./carga-productos.component.css']
})
export class CargaProductosComponent implements OnInit {

  nombre: string = "";
  marca: string = "";
  stock: string = "";
  tipo: string = "";
  local: string = "";
  precio: string = "";
  localidad: string = "";

  message: string = "";
  locales = [];

  constructor(private regService: ServicioService) { }

  ngOnInit(): void {
    this.regService.traerTodos("locales").subscribe((aux) => {
      aux.forEach((response: any) => {
        let localesInfo = response.payload.doc.data();
        this.locales.push(localesInfo);
      })
    });
  }

  cargarProducto()
  {
    this.locales.forEach((local : any) => {
      if(local.nombre == this.local){
        this.localidad = local.localidad;
      }
    });
    this.regService.guardarProducto(this.nombre, this.marca, this.stock, this.tipo, this.local, this.precio, this.localidad);
    setTimeout(() => {
      this.message = 'Producto guardado!';
    }, 2000);
  }
}
