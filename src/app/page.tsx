"use client";
export default function Home() {
  return (
    <div className="container justify-items-center mt-10">
      <div className="flex justify-center space-x-4">
        <button
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => (window.location.href = "/movie")}
        >
          Movies
        </button>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => (window.location.href = "/actor")}
        >
          Actors
        </button>
      </div>
    </div>
  );
}
