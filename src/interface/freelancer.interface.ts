export interface FreelancerInterface {
  id: number;
  img: string;
  name: string;
  profession: string;
  rating: number;
  reviews: number;
  tags: string[];
  skill: string;
  price: number;
  location: string;
  level: string;
  language: string;
  sort: string;
  title: string;
  hourlyRate?: number;
  jobSuccess?: number;
}
