import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/interfaces/Project.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  baseUrl = `${environment.server}/api`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getProject(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(`${this.baseUrl}/project`);
  }

}
