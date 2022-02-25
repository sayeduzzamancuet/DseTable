import { Component } from '@angular/core';
import {NbMenuItem} from "@nebular/theme";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DseTable';
  items: NbMenuItem[] = [
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
  ];
// ...

}
