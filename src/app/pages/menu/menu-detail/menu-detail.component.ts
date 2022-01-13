import { Component, Input, OnInit, Output } from '@angular/core';

interface MenuDetail {
  name: string,
  url: string
}

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent implements OnInit {

  @Input()
  detail: MenuDetail = {
    url: '',
    name: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
