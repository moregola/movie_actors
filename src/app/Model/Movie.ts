import { Actor } from "./Actor";
import { Rating } from "./Rating";

export interface Movie {
  id: string;
  title: string;
  genre: string;
  director: string;
  producer: string;
  releaseDate: Date;
  description: string;
  actors: Actor[];
  movieRating: Rating;
  photo: string;
}
