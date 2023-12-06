export interface JobInterface {
  id: number;
  img: string;
  title: string;
  server: string;
  benefits: string[];
  category: string;
  salary: number;
  jobType: string;
  level: string;
  sort: string;
}

export interface ManageJobInterface {
  id: number;
  img: string;
  title: string;
  server: string;
  application: number;
  created: string;
  expired: string;
  status: number;
}
