import {Component} from '@angular/core';

import {MENU_ITEMS} from './pages-menu';

@Component({
  selector: 'crm-pages',
  template: `
    <crm-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </crm-sample-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;
}
