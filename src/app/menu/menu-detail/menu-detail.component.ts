import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {

  @Input('routeUrl')
  routeUrl: string = '';
  
  @Input('name')
  name: string = '';

  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
