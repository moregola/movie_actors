'use client'

import { useEffect, useState } from "react";
import Table from "../component/table";
import { Movie } from "../Model/Movie";

export default function Movies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch('/api/movie/list');
      const data = await response.json();
      setMovies(data);
    }
    fetchMovies();
  }, []);

  return (
    <div className="container justify-items-center mt-10">
      <Table
        headers={["Title", "Director", "Year", "Photo", "Action"]}
        data={movies}
      />
    </div>
  );
}
