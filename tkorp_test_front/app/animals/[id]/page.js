"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function AniamlPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:3000/animals/${id}`);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Erreur lors du fetch", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log("here's all the data: ", data);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="bg-slate-100 flex rounded-md min-h-32 min-w-64 justify-center items-center">
      <h1>Animal Info</h1>
      <div className="flex flex-col gap-4 px-4 justify-items-center">
        <h1>{data.name}</h1>
        <ul>
          <li>{data.species}</li>
          <li>{data.breed}</li>
        </ul>
      </div>
    </div>
  );
}
