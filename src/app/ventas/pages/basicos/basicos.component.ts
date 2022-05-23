import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower: string = 'bruno';
  nombreUpper: string = 'BRUNO';
  nombreCompleto: string = 'bRunO LoPEz';

  fecha: Date = new Date();

}
