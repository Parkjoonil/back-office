export namespace ICalendarDTO {
    export namespace Request {
        export interface CreateCalendar {
            date: string;
            attendancetime: string;
            reference: string;
            status: number;
            employeename_id: number;
          }
    }
    export namespace Response {
        export interface Calendar {
            id: number;
            date: string;
            attendancetime: string;
            reference: string;
            status: number;
            employeename_id: number;
            createdAt?: Date;
            updatedAt?: Date;
            deletedAt?: Date;
          }
    }
}
