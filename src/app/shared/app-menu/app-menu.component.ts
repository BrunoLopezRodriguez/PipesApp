import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styles: [
  ]
})
export class AppMenuComponent implements OnInit {

  items: MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-folder-open',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-calendar-plus',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-euro',
            routerLink: 'numeros'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-comment',
            routerLink: 'no-comunes'
          },
        ]
      },
      {
        label:'Pipes personalizados',
        icon: 'pi pi-paperclip',
        routerLink:'ordenar'
      }
  ];
  }

}
