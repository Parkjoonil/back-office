import { Calendar } from "../Calendar.interface";

export namespace IEmployeeDTO {
    export namespace Request {
    }
    export namespace Response {
        export interface Employee {
            id: number;
            lastname: string;
            name: string;
            teamname: string;
            position: string;
            startdate: string;
            birthday: string;
            phone: string;
            calendar: Calendar[];
            createdAt?: Date;
            updatedAt?: Date;
            deletedAt?: Date;
          }
    }
}