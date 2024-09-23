"use client";

import AnimalCard from "@/components/AnimalCard";
import { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://127.0.0.1:3000/animals");
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

  return <AnimalCard data={data} />;
}
