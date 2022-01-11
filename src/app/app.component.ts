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
  setting1: boolean = false;
  setting2: boolean = false;
  setting3: boolean = false;
  setting4: boolean = false;
}
