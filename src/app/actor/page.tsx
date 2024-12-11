'use client'
import { useState, useEffect } from "react";
import Table from "../component/table";
import { Actor } from "../Model/Actor";

export default function Actors() {
  const [actors, setActors] = useState<Actor[]>([]);

  useEffect(() => {
    async function fetchActors() {
      const response = await fetch("/api/actor/list");
      const data = await response.json();
      setActors(data);
    }
    fetchActors();
  }, []);
  return (
    <div className="container justify-items-center mt-10 mx-5">
      <Table
        headers={["Name", "Nationality", "Age", "Photo", "Action"]}
        data={actors}
      />
    </div>
  );
}
