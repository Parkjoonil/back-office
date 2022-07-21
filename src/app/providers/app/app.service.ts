import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  userName: string = 'Mana_Ara';
  endTimeHour: number = 10;
  endTimeMinute: number = 0;
  constructor() { }
}