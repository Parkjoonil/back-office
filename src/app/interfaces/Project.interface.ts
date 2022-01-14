export interface Project {
    id: number;
    name: string;
    status: Status;
    startAt?: Date;
    endAt?: Date;
  }
  
  type Status = '대기' | '중' | '완료';