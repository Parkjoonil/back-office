import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';
  menushow: boolean = true;
  arrowdown: boolean = false;
  setting1: boolean = true;
  setting2: boolean = true;
  setting3: boolean = true;
  setting4: boolean = true;
}
