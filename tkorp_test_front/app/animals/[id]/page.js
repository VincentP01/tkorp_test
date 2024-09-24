"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Emojis from "@/components/Emojis";

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
    <div className="flex justify-center items-center font-[family-name:var(--font-geist-mono)]">
      <div className="bg-slate-100 flex flex-col rounded-md min-h-32 min-w-96 self-center items-center p-8 gap-8">
        <h1>
          <strong>Animal Info</strong>
        </h1>
        <div className="flex flex-col gap-4 px-4 justify-items-center">
          <h1>
            {data.name} {Emojis[data.species]}
          </h1>
          <ul>
            <li> Species: {data.species}</li>
            <li>Breed: {data.breed}</li>
            <li>Weight: {data.weight}</li>
            <li>
              Owner:{" "}
              <Link href={`/owners/${data.owner.id}`}>
                {data.owner.firstName} {data.owner.lastName}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
