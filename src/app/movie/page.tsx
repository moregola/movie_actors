import Table from "../component/table";
import { Movie } from "../Model/Movie";

export default function Movies() {
  return (
    <div className="container justify-items-center mt-10">
      <Table
        headers={["Title", "Director", "Year", "Photo", "Action"]}
        data={[
          {
            id: "d53f8e7a-91af-4df5-8b96-1f2c1d34c9d8",
            title: "Inception",
            genre: "Sci-Fi",
            director: "Christopher Nolan",
            producer: "Emma Thomas",
            releaseDate: new Date("2010-07-16"),
            description:
              "A skilled thief is given a chance at redemption if he can successfully perform inception.",
            actors: [
              {
                id: "d1f5c7e9-8f56-4e47-bbeb-5f7e3a6c3d9a",
                name: "Leonardo DiCaprio",
                age: 48,
                state: "California",
                city: "Los Angeles",
                country: "USA",
                movies: [],
                birthDate: new Date("1974-11-11"),
                nationality: "American",
                photo:
                  "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
              },
            ],
            movieRating: {
              rating: 8.8,
            },
            photo:
              "https://upload.wikimedia.org/wikipedia/pt/8/84/AOrigemPoster.jpg",
          },
          {
            id: "a23f9e9c-1234-4edf-bbbc-7d9e2f4c6c3f",
            title: "The Matrix",
            genre: "Action",
            director: "The Wachowskis",
            producer: "Joel Silver",
            releaseDate: new Date("1999-03-31"),
            description:
              "A hacker discovers the shocking truth about reality and his role in the war against its controllers.",
            actors: [
              {
                id: "c9a3e7d1-2f34-4dcd-aef7-5b6c1d9e2c5b",
                name: "Keanu Reeves",
                age: 59,
                state: "California",
                city: "Los Angeles",
                country: "USA",
                movies: [],
                birthDate: new Date("1964-09-02"),
                nationality: "Canadian",
                photo:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/LanaDRPrimavera310524_%2810_of_155%29_%2853765300307%29_%28cropped%29.jpg/1024px-LanaDRPrimavera310524_%2810_of_155%29_%2853765300307%29_%28cropped%29.jpg",
              },
            ],
            movieRating: {
              rating: 8.7,
            },
            photo:
              "https://upload.wikimedia.org/wikipedia/pt/c/c1/The_Matrix_Poster.jpg",
          },
        ] as Movie[]}
      />
    </div>
  );
}
