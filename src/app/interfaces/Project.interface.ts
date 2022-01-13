export interface Project {
    name: string;
    status: Status;
    start_at?: Date;
    end_at?: Date;
  }
  
  type Status = '대기' | '중' | '완료';