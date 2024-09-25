import OwnerClientComponent from "@/components/OwnerClientComponent";

export default async function Page() {
  // Fetch initial owners data from the server-side
  const res = await fetch("http://127.0.0.1:3000/owners?page=1");
  const initialOwners = await res.json();

  return <OwnerClientComponent initialOwners={initialOwners} />;
}
