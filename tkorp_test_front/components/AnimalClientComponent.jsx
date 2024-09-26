"use client";

import { useState, useEffect } from "react";
import AnimalCard from "@/components/AnimalCard";

export default function AnimalClientComponent({ initialAnimals, totalPages }) {
  const [animals, setAnimals] = useState(initialAnimals || []);
  const [page, setPage] = useState(1); // Page 1 already loaded

  const fetchAnimals = async (newPage) => {
    const data = await fetch(`http://127.0.0.1:3000/animals?page=${newPage}`);
    const json = await data.json();
    setAnimals(json.animals);
    setPage(newPage);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      fetchAnimals(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (page > 1) {
      fetchAnimals(page - 1);
    }
  };

  return (
    <div>
      <AnimalCard data={animals} />
      <div className="pagination-controls mt-12 flex justify-center space-x-4">
        <button
          onClick={handlePrevPage}
          className="px-4 py-2 bg-slate-300 text-white rounded-md"
          disabled={page === 1} // Désactiver si c'est la première page
        >
          Précédent
        </button>
        <span>
          Page {page} sur {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-slate-300 text-white rounded-md"
          disabled={page === totalPages} // Désactiver s'il n'y a plus de pages
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
