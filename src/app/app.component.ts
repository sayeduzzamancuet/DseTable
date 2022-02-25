import { Component } from '@angular/core';
import {NbMenuItem, NbSidebarService} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sidebarService: NbSidebarService) {
  }
  title = 'DseTable';
  items: NbMenuItem[] = [
    {
      title: 'Home',
      expanded: true,
      children: [
        {
          title: 'home',
          link: '/'
        },
        {
          title: 'Market',
          link: '/market'
        },
        {
          title: 'Calculator',
          link: '/calculator'
        },
        {
          title: '52 Weeks Lowest',
          link: '/lowest'
        }
      ],
    },

  ];
// ...
  toggle() {
    this.sidebarService.toggle(false, 'left');
  }
}
