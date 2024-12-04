'use client'
import Link from "next/link";
import { Movie } from "../Model/Movie";
import Image from "next/image";

export default function Table({
  headers,
  movies,
}: {
  headers: string[];
  movies: Movie[];
}) {

    return (
    <div className="overflow-x-auto rounded-xl">
      <table className="min-w-full bg-gray-200 border border-gray-200 shadow-md">
        <thead >
          <tr >
            {headers.map((header, index) => (
              <th className="mx-4 px-2" key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => {
            return (
                <tr key={index+movie.id}  className="bg-white border-b">
                    <td  className="text-left px-6 py-3 text-sm font-semibold text-gray-700">{movie.title}</td>
                    <td  className="text-left px-6 py-3 text-sm font-semibold text-gray-700">{movie.director}</td>
                    <td  className="text-left px-6 py-3 text-sm font-semibold text-gray-700">{movie.releaseDate.getFullYear()}</td>
                    <td  className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                        <Image
                            alt="Movie image"
                            src={movie.photo}
                            width={200}
                            height={200}
                            onClick={()=>{
                                window.open(movie.photo, "_blank");
                            }}
                        />
                    </td>
                    <td><Link href={`/actors/${movie.title}`}>Actors</Link></td>
                </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
