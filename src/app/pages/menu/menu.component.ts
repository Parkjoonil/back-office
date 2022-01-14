import { Component, Input, OnInit, Output } from '@angular/core';
import { Menu } from 'src/app/interfaces/Menu.interface';
import { MenuService } from 'src/app/providers/menu/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isOpen: boolean = false;

  @Input()
  menu: Menu[] = [

  ];


  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenu().subscribe((menus) => {
      this.menu = menus});

  }

}
