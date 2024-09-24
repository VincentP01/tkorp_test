import OwnerCard from "@/components/OwnerCard";
// import { useState, useEffect } from "react";

export default async function Page() {
  const data = await fetch("http://127.0.0.1:3000/owners");
  const json = await data.json();
  if (!json) return <p>No owner data</p>;

  return <OwnerCard data={json} />;
}
