import React, { useState, useEffect } from "react";
import { categoriesObject } from "../data/data.js";

function CategoryFilter({ onCategorySelect }) {
  const [auctionCounts, setAuctionCounts] = useState({});

  useEffect(() => {
    // Fetch auctions from JSON server
    fetch("http://localhost:3001/auctions")
      .then((res) => res.json())
      .then((data) => {
        // Count auctions per category
        const counts = {};
        data.forEach((auction) => {
          counts[auction.category] = (counts[auction.category] || 0) + 1;
        });
        setAuctionCounts(counts);
      });
  }, []);

  const handleFilterByCategory = (category) => {
    if (onCategorySelect) onCategorySelect(category);
  };

  return (
    <div>
      <section className="py-16 bg-[#ffffff] ">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl mb-3 text-[#111827] font-Inter font-normal">
            Browse by Category
          </h2>
          <p className="mb-7 text-[#4B5563] my-3 font-Inter">
            Find exactly what you're looking for{" "}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-7 bg-[#ffffff] py-5">
            {categoriesObject.map((item) => (
              <div
                key={item.id}
                className="p-5 bg-[#ffffff] rounded shadow flex flex-col gap-y-2 items-center cursor-pointer hover:shadow-lg transition"
                onClick={() => handleFilterByCategory(item.catigory)}
              >
                <img src={item.icon} alt={`${item.catigory}-icon`} />
                <h2 className="text-[18px] font-normal mb-2">
                  {item.catigory}
                </h2>
                <span className="text-[#4B5563] text-[14px]">
                  {item.description}
                </span>
                <span className="bg-[#F5F5F4] rounded-3xl py-1 px-2 text-[#1C1917] text-[13px] font-Inter font-normal">
                  {auctionCounts[item.catigory] || 0} auctions
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryFilter;
// filepath: c:\Projects\Dawglass-
