import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Calendar } from 'src/app/interfaces/Calendar.interface';
import { ICalendarDTO } from 'src/app/interfaces/dtos/calendar.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  baseUrl = `${environment.server}/api`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getCalendars(): Observable<ICalendarDTO.Response.Calendar[]> {
    return this.httpClient.get<ICalendarDTO.Response.Calendar[]>(`${this.baseUrl}/calendar`);
  }

  getSortCalendars(year: string, month: string, employeeid?: number): Observable<ICalendarDTO.Response.Calendar[]> {
    return this.httpClient.get<ICalendarDTO.Response.Calendar[]>(`${this.baseUrl}/calendar/sort?year=${year}&month=${month}&employeeid=${employeeid}`);
  }

  getSortCalendarsName(employeeid?: number): Observable<ICalendarDTO.Response.Calendar[]> {
    return this.httpClient.get<ICalendarDTO.Response.Calendar[]>(`${this.baseUrl}/calendar/sortname?employeeid=${employeeid}`);
  }

  createCalendar(info: Calendar): Observable<ICalendarDTO.Response.Calendar> {
    return this.httpClient.post<ICalendarDTO.Response.Calendar>(`${this.baseUrl}/calendar`, info);
  }
}
