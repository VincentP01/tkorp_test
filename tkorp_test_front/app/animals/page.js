import AnimalCard from "@/components/AnimalCard";

export default async function Page() {
  const data = await fetch("http://127.0.0.1:3000/animals");
  const json = await data.json();
  if (!json) return <p>No animal data</p>;

  console.log("here's the animal data : ", data);

  return <AnimalCard data={json} />;
}
