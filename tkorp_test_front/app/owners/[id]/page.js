"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

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
    <div>
      <h1>Owner Info</h1>
      <div>
        <h1>
          {data.firstName} {data.lastName}
        </h1>
        <ul>
          <li>{data.email}</li>
          <li>{data.phoneNumber}</li>
        </ul>
      </div>
    </div>
  );
}
