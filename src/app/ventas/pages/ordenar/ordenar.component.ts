import { Component} from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent{


  enMayusculas:boolean=false;
  orderBy: string ='';
  heroes: Heroe[]=[
    {
      nombre: 'Superman',
      vuela:true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela:false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela:false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela:false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela:true,
      color: Color.verde
    },
  ] 



  cambiarMayusculas(){
    if(this.enMayusculas){
      this.enMayusculas=false;
    }else{
      this.enMayusculas=true;
    }
  }

  cambiarOrden(value :string){
    this.orderBy = value;
  }
}
