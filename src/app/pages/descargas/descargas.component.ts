import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.component.html',
  styleUrls: ['./descargas.component.css']
})
export class DescargasComponent implements OnInit {

  @Input() tabla: any[];
  
  constructor() { }

  ngOnInit(): void {
  }

  descargarPDF(){

  }

  descargarCSV(){
    
  }

}
