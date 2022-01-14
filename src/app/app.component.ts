import { Component, Input } from '@angular/core';
import { MenuService } from './providers/menu/menu.service';

interface Menu {
  name: string,
  icon: string,
  
}

interface MenuDetail {
  name: string,
  url: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end';
  menushow: boolean = true;
  arrowdown: boolean = false;


  isOpen: boolean = false;

  constructor(
    private menuService: MenuService,
  ) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus() {
    this.menuService.getMenu().subscribe((menus) => {});

  }
  
}

