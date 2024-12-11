"use client";
import Link from "next/link";
import { Movie } from "../Model/Movie";
import Image from "next/image";
import { Actor } from "../Model/Actor";
import '../../../src/output.css'

export default function Table({
  headers,
  data,
}: {
  headers: string[];
  data: Movie[] | Actor[];
}) {
  const isMovie = (item: Movie | Actor): item is Movie => {
    return "title" in item && "director" in item && "releaseDate" in item;
  };
  const isActor = (item: Movie | Actor): item is Actor => {
    return "name" in item && "nationality" in item && "age" in item && "photo" in item;
  };
  const tableHeader = (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th className="mx-4 px-2" key={index}>
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
  const tableRow = () => {
    return (
      <tbody>
        
        {data.length > 0 && data.map((item, index) => {
          if (isMovie(item)) {
            return (
              <tr key={index + item.id} className="bg-white border-b">
                <td className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                  {item.title}
                </td>
                <td className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                  {item.director}
                </td>
                <td className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                  {item.releaseDate && typeof(item.releaseDate)==typeof(Date) && item.releaseDate.getFullYear()}
                </td>
                <td className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                  <Image
                    alt="Movie image"
                    src={item.photo}
                    width={200}
                    height={200}
                    onClick={() => {
                      window.open(item.photo, "_blank");
                    }}
                  />
                </td>
                <td>
                  <Link href={`/actor`}>Actors</Link>
                </td>
              </tr>
            );
          } else if(isActor(item)){
            return(
              <tr key={index + item.id} className="bg-white border-b">
              <td className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                {item.name}
              </td>
              <td className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                {item.nationality}
              </td>
              <td className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                {item.age}
              </td>
              <td className="text-left px-6 py-3 text-sm font-semibold text-gray-700">
                <Image
                  alt="data image"
                  src={item.photo}
                  width={200}
                  height={200}
                  onClick={() => {
                    window.open(item.photo, "_blank");
                  }}
                />
              </td>
              <td>
                <Link href={`/movie/filtered/${item.name}`}>Movies</Link>
              </td>
            </tr>
            )
          }
        })}
      </tbody>
    );
  };

  return (
    <div className="rounded-xl mx-10" style={{marginRight: '10px',marginLeft:"10px"}}>
      <table className="min-w-full table-auto bg-gray-200 border border-gray-200 shadow-md">
        {tableHeader}
        {tableRow()}
      </table>
    </div>
  );
}
