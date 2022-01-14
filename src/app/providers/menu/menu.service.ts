import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/interfaces/Menu.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  baseUrl = `${environment.server}/api`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getMenu(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(`${this.baseUrl}/menu`);
  }
}
