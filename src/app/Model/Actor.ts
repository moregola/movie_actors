import { Movie } from "./Movie";

export interface Actor {
  id: string;
  name: string;
  age: number;
  state: string;
  city: string;
  country: string;
  movies: Movie[];
  birthDate: Date;
  nationality: string;
  photo: string;
}
