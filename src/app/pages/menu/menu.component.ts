import { Component, Input, OnInit, Output } from '@angular/core';

interface Menu {
  name: string;
  icon: string;
  details: MenuDetail[];
}

interface MenuDetail {
  name: string;
  url: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  menu: Menu = {
    name: '',
    details: [
      {
        name: '',
        url: ''
      }
    ],
    icon: '',
  };

  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
