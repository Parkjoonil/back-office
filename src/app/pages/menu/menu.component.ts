import { Component, Input, OnInit, Output } from '@angular/core';
import { Menu } from 'src/app/interfaces/Menu.interface';
import { MenuService } from 'src/app/providers/menu/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input()
  menus: Menu[] = [];

  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenu().subscribe((menus) => {
      this.menus = menus
    });
  }

  clickMenu(id: number) {
    this.menus.find(menu => {
      return menu.id === id
    })?.details.forEach(detail => {
      return detail.isOpen = !detail.isOpen
    })
    console.log(this.menus)
  }
}
