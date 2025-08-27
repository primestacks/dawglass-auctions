import React from "react";
import Navbar from "../components/Navbar";
import FeaturedAuctionCard from "../components/FeaturedAuctionCard";
import { auctionData } from "../data/data.js";
import Footer from "../components/Footer.jsx";
import Button from "../components/Button";
import { FiUsers } from "react-icons/fi";

function LiveAuction() {
  // Filter the auctionData to get only live auctions
  const featuredLiveAuctionData = auctionData.filter(function (auction) {
    return auction.isLive;
  });

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
      <section className="py-16 max-w-full mx-auto ">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {featuredLiveAuctionData.map((auction, index) => (
              <FeaturedAuctionCard key={index} auctionData={auction} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 bg-[#2563EB] text-center">
        <div className="max-w-6xl mx-auto text-center text-[#ffffff] py-5 font-Inter">
          <h2 className="text-3xl font-normal mb-3">
            Ready to Start Your Auction Journey?
          </h2>
          <p className="mb-7">
            Join Premier Auctions today and discover amazing deals
          </p>
          <Button className="text-[#2563EB] py-2 px-7 bg-[#ffffff] rounded-lg hover:bg-[#E7E5E4] transition">
            <span className="flex items-center gap-4">
              <FiUsers />
              Join Now - It's fee
            </span>
          </Button>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}

export default LiveAuction;
