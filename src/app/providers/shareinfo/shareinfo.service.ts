import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IShareinfoDTO } from 'src/app/interfaces/dtos/shareinfo.dto';
import { Shareinfo } from 'src/app/interfaces/Shareinfo.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShareinfoService {

  baseUrl = `${environment.server}/api`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getShareinfo(): Observable<IShareinfoDTO.Response.Shareinfo[]> {
    return this.httpClient.get<IShareinfoDTO.Response.Shareinfo[]>(`${this.baseUrl}/shareinfo`);
  }

  createShareinfo(info: Shareinfo): Observable<IShareinfoDTO.Response.Shareinfo> {
    return this.httpClient.post<IShareinfoDTO.Response.Shareinfo>(`${this.baseUrl}/shareinfo`, info);
  }

  deleteInfo(id: number): Observable<Shareinfo> {
    return this.httpClient.delete<Shareinfo>(`${this.baseUrl}/shareinfo/${id}`);
  }
}
