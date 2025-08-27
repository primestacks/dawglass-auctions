import React from "react";
import { categoriesObject } from "../data/data.js";

const handleFilterByCategory = () => {
  // Implement category filter logic here
  alert("Category clicked");
};

function CategoryFilter() {
  return (
    <div>
      {/* Browse categories section */}
      <section className="py-16 bg-[#ffffff] ">
        <div className="max-w-6xl  mx-auto text-center">
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
                onClick={handleFilterByCategory}
              >
                <img src={item.icon} alt={`${item.title}-icon`} />
                <h2 className="text-[18px] font-normal mb-2">
                  {item.catigory}
                </h2>
                <p className="text-[#4B5563] text-[14px]">{item.description}</p>
                <p className="bg-[#F5F5F4] rounded-3xl py-1 px-2 text-[#1C1917] text-[13px] font-Inter font-normal   ">
                  {" "}
                  <span>0</span> auctions
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoryFilter;
