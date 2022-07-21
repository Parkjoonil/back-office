import { Calendar } from "./Calendar.interface";
import { EmployeeTeam } from "./EmployeeTeam.interface";

export interface Employee {
    lastname: string;
    name: string;
    teamname: EmployeeTeam[];
    position: string;
    startdate: string;
    birthday: string;
    phone: string;
    calendar: Calendar[];
  }