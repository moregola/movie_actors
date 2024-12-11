'use client'

import { useEffect, useState } from "react";
import Table from "../../../app/component/table";
import { Movie } from "../../../app/Model/Movie";
import { useRouter } from "next/router";

export default function FilteredMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const router = useRouter();

  const { id } = router.query; 
  
  useEffect(() => {
    async function fetchMovies() {
      if(id)
      {
        const response = await fetch('/api/movie/list');
        const data = await response.json() as Movie[];
        console.log("id" , id)
        const filtered = data.filter(m => m.actors.find(a => a.name == id))
        setMovies(filtered);
      }
    }
    fetchMovies()
  }, [id]);

  return (
    <div className="container justify-items-center mt-10 mx-5">
      <Table
        headers={["Title", "Director", "Year", "Photo", "Action"]}
        data={movies}
      />
    </div>
  );
}
