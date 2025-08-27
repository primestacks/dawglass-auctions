import React from "react";
import Navbar from "../components/Navbar";
import FeaturedAuctionCard from "../components/FeaturedAuctionCard";
import Footer from "../components/Footer.jsx";

function LiveAuction() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero section */}
      <section className="w-full bg-gradient-to-r from-[#2563EB] to-[#7E22CE] text-white py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-normal mb-4 font-Inter">
            Live Auctions
          </h1>
          <p className="text-[#F9FAFB] font-Inter">
            Discover amazing deals and place your bids
          </p>
        </div>
      </section>

      {/* Live Auctions Section */}
    </div>
  );
}

export default LiveAuction;
