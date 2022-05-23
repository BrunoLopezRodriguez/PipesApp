import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Bruno';
  genero: string = 'masculino';
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[]= ['Maria', 'Pedro', 'Juan', 'Eduardo', 'Roberta'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  //keyValue pipe
  persona={
    nombre: 'Bruno',
    edad: 27,
    direccion: 'Galicia, España'
  }

  //Jason pipe
  heroes=[
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ]

  //Asyc pipe
  miObservable = interval(1000); //emite velores numericos: 0,1,2,3,4....

  valorPromesa = new Promise((resolve,reject)=>{

    setTimeout(()=>{
      resolve('Tenemos data de promesa')
    }, 3500);
  });

  cambiarCliente(){
    if(this.nombre==='Bruno'){
      this.nombre='Carmen';
      this.genero='femenino';
    }else{
      this.nombre='Bruno';
      this.genero='masculino';
    }
  }

  borrarCliente(){
    this.clientes.splice(0,1);
  }

}
