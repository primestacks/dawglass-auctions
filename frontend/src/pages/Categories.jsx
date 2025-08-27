import React from "react";
import Navbar from "../components/Navbar";
import CategoryFilter from "../components/CategoryFilter";

function Categories() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <section className="w-full bg-gradient-to-r from-[#2563EB] to-[#7E22CE] text-white py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-normal mb-4 font-Inter">Categories</h1>
          <p className="text-[#F9FAFB] font-Inter">
            Explore various categories of auctions
          </p>
        </div>
      </section>

      {/* filter by Categories section */}
      <CategoryFilter />
    </div>
  );
}

export default Categories;
