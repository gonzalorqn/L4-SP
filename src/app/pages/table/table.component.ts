import { Component, OnInit } from '@angular/core';
import { ServicioService } from "../../services/servicio.service"

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  productos = [];

  constructor(private regService: ServicioService) { }

  ngOnInit(): void {
    this.regService.traerTodos("productos").subscribe((aux) => {
      aux.forEach((response: any) => {
        let prodInfo = response.payload.doc.data();
        this.productos.push(prodInfo);
      })
    });
  }
}
