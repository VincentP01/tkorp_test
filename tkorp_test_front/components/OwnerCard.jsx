import Link from "next/link";

export default function OwnerCard({ data }) {
  console.log("data : ", data);
  return (
    <div className="grid grid-cols-3 gap-4 px-4 justify-items-center">
      {data.map((person) => (
        <Link href={`/owners/${person.id}`} key={person.id}>
          <div className="bg-slate-100 flex rounded-md min-h-32 min-w-64 justify-center items-center">
            <h1>
              {person.firstName} {person.lastName}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
}
