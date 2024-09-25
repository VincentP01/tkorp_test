// components/OwnerClientComponent.tsx - Composant client

"use client";

import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import OwnerCard from "@/components/OwnerCard";

export default function OwnerClientComponent({ initialOwners }) {
  const [owners, setOwners] = useState(initialOwners || []);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2); // Page 1 already loaded

  const fetchOwners = async () => {
    const data = await fetch(`http://127.0.0.1:3000/owners?page=${page}`);
    const json = await data.json();

    if (json.length === 0) {
      setHasMore(false);
    } else {
      setOwners((prevOwners) => [...prevOwners, ...json]);
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <InfiniteScroll className="min-h-[100vh] flex flex-col"
      dataLength={owners.length}
      next={fetchOwners}
      hasMore={hasMore}
      loader={<h4>Scroll to see more...</h4>}
      endMessage={<p>THE END</p>}
        pullDownToRefreshThreshold={50}
        pullDownToRefreshContent={<h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>}
        
      
    >
      
<OwnerCard data={owners} />
    
    </InfiniteScroll>
  );
}
