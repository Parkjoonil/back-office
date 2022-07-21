import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IEmployeeDTO } from 'src/app/interfaces/dtos/employee.dto';
import { Employee } from 'src/app/interfaces/Employee.interface';
import { environment } from 'src/environments/environment';

export type TItemAction = 'none' | 'create' | 'update' | 'delete';

export interface IIteamAction {
  id: number;
  action: TItemAction;
  lastname: string;
  name: string;
  teamname: string;
  position: string;
  startdate: string;
  birthday: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  baseUrl = `${environment.server}/api`

  constructor(
    private httpClient: HttpClient
  ) { }

  actionItem: Subject<IIteamAction> = new Subject();
  onActionItem: () => Observable<IIteamAction> = () => this.actionItem.asObservable();

  doActionItem(action: IIteamAction) {
    this.actionItem.next(action);
  }

  getEmployees(): Observable<IEmployeeDTO.Response.Employee[]> {
    return this.httpClient.get<IEmployeeDTO.Response.Employee[]>(`${this.baseUrl}/employee`);
  }

  getSortEmployees(teamname: string, company: string): Observable<IEmployeeDTO.Response.Employee[]> {
    return this.httpClient.get<IEmployeeDTO.Response.Employee[]>(`${this.baseUrl}/employee/sort?teamname=${teamname}&company=${company}`);
  }

  updateEmployee(id: number, info: Employee): Observable<IEmployeeDTO.Response.Employee> {
    return this.httpClient.put<IEmployeeDTO.Response.Employee>(`${this.baseUrl}/employee/${id}`, info);
  }

  deleteEmployee(id: number): Observable<IEmployeeDTO.Response.Employee> {
    return this.httpClient.delete<IEmployeeDTO.Response.Employee>(`${this.baseUrl}/employee/${id}`);
  }
}
