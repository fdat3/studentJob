export interface ProjectInterface {
  id: number;
  skills: string;
  title: string;
  brief: string;
  img: string;
  category: string;
  projectType: string;
  englishLevel: string;
  language: string;
  location?: string;
  tags?: string[];
  price?: {
    min: number;
    max: number;
  };
  sort?: string;
}
export interface ProjectProposalInterface {
  id: number;
  name: string;
  img: string;
  reviews: number;
  rating: number;
  brief: string;
  price: {
    min: number;
    max: number;
  };
  hours: number;
}
