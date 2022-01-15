import { MenuDetail } from "./Menu-detail.interface";

export interface Menu {
    id: number;
    name: string;
    icon: string;
    details: MenuDetail[];
  }
  
