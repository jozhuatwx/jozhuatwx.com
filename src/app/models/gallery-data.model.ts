import { Image } from './image.model';

export interface GalleryData {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  heroImage: Image;
  content: string[];
  readingTime: {
    minutes: number;
    seconds: number;
  };
  externalUrl: boolean;
  url: string;
  // developer
  status: string;
  technologies: Image[];
  // blog
  date: Date;
}

export enum GalleryDataType {
  BLOG,
  DEVELOPER_PROJECT,
  CERTIFICATE
}
