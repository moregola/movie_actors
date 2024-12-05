"use client";
import Link from "next/link";
import { Movie } from "../Model/Movie";
import Image from "next/image";
import { Actor } from "../Model/Actor";

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
        {data.map((item, index) => {
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
                  {item.releaseDate.getFullYear()}
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
          } else {
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
                <Link href={`/movie`}>Movies</Link>
              </td>
            </tr>;
          }
        })}
      </tbody>
    );
  };

  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="min-w-full bg-gray-200 border border-gray-200 shadow-md">
        {tableHeader}
        {tableRow()}
      </table>
    </div>
  );
}
