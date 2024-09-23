"use client";

import { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:3000/persons")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur lors du fetch", error);
      });
  }, []);

  console.log("here's all the data: ", data);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-6">
      {data.map((person) => (
        <div key={person.id} className="bg-slate-100 rounded-md ">
          <h1>{person.firstName}</h1>
          <p>{person.lastName}</p>
        </div>
      ))}
    </div>
  );
}
