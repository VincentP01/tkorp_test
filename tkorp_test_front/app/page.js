import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-7xl text-center leading-loose">
      <p className="font-[family-name:var(--font-geist-mono)] text-center align-middle">
        Welcome to
        <br /> Owners and pets !<br /> 🐱👤🐶
      </p>
    </div>
  );
}
