import AnimalClientComponent from "@/components/AnimalClientComponent";

export default async function Page() {
  const data = await fetch("http://127.0.0.1:3000/animals?page=1");
  const { animals: initialAnimals, total } = await data.json();

  const totalPages = Math.ceil(total / 12);

  return (
    <AnimalClientComponent
      initialAnimals={initialAnimals}
      totalPages={totalPages}
    />
  );
}
