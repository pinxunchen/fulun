import { Component } from '@angular/core';

import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('collapseExpand', [
      state('collapsed', style({ 'max-height': '0', opacity: '0' })),
      state('expanded', style({ 'max-height': '1000px', opacity: '1' })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ])
  ]
})
export class HeaderComponent {
  isNavbarCollapsed = true;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

}
