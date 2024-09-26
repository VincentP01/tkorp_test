import OwnerClientComponent from "@/components/OwnerClientComponent";

export default async function Page() {
  // Fetch initial owners data from the server-side
  const res = await fetch("http://127.0.0.1:3000/owners?page=1");
  const { owners: initialOwners, total } = await res.json();

  const totalPages = Math.ceil(total / 12);

  return (
    <OwnerClientComponent
      initialOwners={initialOwners}
      totalPages={totalPages}
    />
  );
}
