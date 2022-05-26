import { Image } from './image.model';

export interface HomeData {
  splash: {
    title: string;
    content: string;
    image: Image;
  }
  about: {
    content: string;
  }
}
