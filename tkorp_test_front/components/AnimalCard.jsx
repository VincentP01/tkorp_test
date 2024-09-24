import Link from "next/link";
import Emojis from "./Emojis";

export default function OwnerCard({ data }) {
  console.log("data : ", data);
  return (
    <div className="grid grid-cols-3 gap-4 px-4 justify-items-center">
      {data.map((animal) => (
        <Link href={`/animals/${animal.id}`} key={animal.id}>
          <div className="bg-slate-100 hover:bg-slate-300 flex flex-col rounded-md min-h-32 min-w-64 justify-center items-center font-[family-name:var(--font-geist-mono)]">
            <h1 className="items-stretch">{animal.name}</h1>
            <p>{Emojis[animal.species]}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
