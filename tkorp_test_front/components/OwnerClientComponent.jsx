// components/OwnerClientComponent.tsx - Composant client

"use client";

import { useState, useEffect } from "react";
import OwnerCard from "@/components/OwnerCard";

export default function OwnerClientComponent({ initialOwners, totalPages }) {
  const [owners, setOwners] = useState(initialOwners || []);
  const [page, setPage] = useState(1); // Page 1 already loaded

  const fetchOwners = async (newPage) => {
    const data = await fetch(`http://127.0.0.1:3000/owners?page=${newPage}`);
    const json = await data.json();
    setOwners(json.owners);
    setPage(newPage);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      fetchOwners(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (page > 1) {
      fetchOwners(page - 1);
    }
  };

  return (
    <div>
      <OwnerCard data={owners} />
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
