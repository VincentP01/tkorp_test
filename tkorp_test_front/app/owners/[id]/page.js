"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Emojis from "@/components/Emojis";

export default function OwnerPage() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://127.0.0.1:3000/owners/${id}`);
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
          <strong>Owner Info</strong>
        </h1>
        <div>
          <h1>
            {data.firstName} {data.lastName}
          </h1>
          <ul>
            <li>{data.email}</li>
            <li>{data.phoneNumber}</li>
          </ul>
        </div>

        <h2>
          <strong>Animals</strong>
        </h2>
        <div>
          {data.animals && data.animals.length > 0 ? (
            <ul>
              {data.animals.map((animal) => (
                <Link href={`/animals/${animal.id}`} key={animal.id}>
                  <li key={animal.id}>
                    {animal.name} {Emojis[animal.species]}{" "}
                  </li>
                </Link>
              ))}
            </ul>
          ) : (
            <p>No animals found for this owner</p>
          )}
        </div>
      </div>
    </div>
  );
}
