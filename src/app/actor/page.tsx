import Table from "../component/table";
import { Actor } from "../Model/Actor";

export default function Actors() {
  return (
    <div className="container justify-items-center mt-10">
      <Table
        headers={["Name", "Nationality", "Age", "Photo", "Action"]}
        data={[
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
                photo: "https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg",
              },
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
                photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/LanaDRPrimavera310524_%2810_of_155%29_%2853765300307%29_%28cropped%29.jpg/1024px-LanaDRPrimavera310524_%2810_of_155%29_%2853765300307%29_%28cropped%29.jpg",
              },
        ] as Actor[]}
      />
    </div>
  );
}
