import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pipesApp';

  nombre : string = 'bRuNO lOpeZ';
  valor: number= 1000;
  obj={
    nombre: 'Bruno'
  }


  constructor(private primengConfig: PrimeNGConfig){}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  mostrarNombre(){
  }
}
