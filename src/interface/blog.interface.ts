import type { AuthorInterface } from '@/interface/author.interface';

export interface BlogInterface {
  id: number;
  img: string;
  date: string;
  title: string;
  brief: string;
  description: string;
  category: string;
  author: AuthorInterface;
}
