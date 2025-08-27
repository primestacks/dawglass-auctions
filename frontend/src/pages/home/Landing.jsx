import React from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { FaSearch, FaHeart } from "react-icons/fa";
import { auctionData } from "../../data/data.js";
import FeaturedAuctionCard from "../../components/FeaturedAuctionCard";
import { FiUsers } from "react-icons/fi";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router";

//import icons
import reactLogo from "../../assets/icons/react.svg";

function Landing() {
  // Filter the auctionData to get only live auctions
  const featuredAuctionData = auctionData
    .filter(function (auction) {
      return auction.isLive;
    })
    .slice(0, 6); // Get only the first 6 live auctions

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#2563EB] to-[#7E22CE] text-white py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-normal mb-4 font-Inter">
            Dawglass Online Auctions
          </h1>
          <p className="text-lg mb-6">
            Discover amazing deals on cars, electronics, fashion, and more{" "}
          </p>

          {/* Button components */}
          <Button>Start Biding Now</Button>
          <Button className="bg-transparent border border-[#ffffff] text-[#ffffff]">
            Browse Auctions
          </Button>
          {/* <button className="bg-white text-blue-600 px-6 py-2 rounded hover:bg-blue-100 transition">
            Get Started
          </button> */}
        </div>
      </section>

      {/* Why choose us Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-normal mb-3">
            Why Choose Premier Auctions?
          </h2>
          <p className="mb-7">
            Join thousands of satisfied bidders and sellers worldwide
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded shadow flex flex-col items-center ">
              <img src={reactLogo} alt="react icon" />
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p>
                Explore a vast range of items from antiques to modern
                collectibles.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow flex flex-col items-center">
              <img src={reactLogo} alt="react icon" />
              <h3 className="text-xl font-semibold mb-2">
                Secure Transactions
              </h3>
              <p>
                Your safety is our priority. Enjoy secure and reliable
                transactions.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow flex flex-col items-center">
              <img src={reactLogo} alt="react icon" />
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p>Join a vibrant community of buyers and sellers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse categories section */}
      {/* Why choose us Section */}
      <section className="py-16 max-w-full">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-normal mb-3">Browse Categories</h2>
          <p className="mb-7">Find exactly what you are looking for</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-100 rounded shadow flex flex-col items-center ">
              <img src={reactLogo} alt="" />
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p>
                Explore a vast range of items from antiques to modern
                collectibles.
              </p>
              <span>0 auction</span>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow flex flex-col items-center ">
              <img src={reactLogo} alt="icon" />
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p>
                Explore a vast range of items from antiques to modern
                collectibles.
              </p>
              <span>0 auction</span>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow flex flex-col items-center">
              <img src={reactLogo} alt="icon" />
              <h3 className="text-xl font-semibold mb-2">
                Secure Transactions
              </h3>
              <p>
                Your safety is our priority. Enjoy secure and reliable
                transactions.
              </p>
              <span>0 auction</span>
            </div>
            <div className="p-6 bg-gray-100 rounded shadow flex flex-col items-center">
              <img src={reactLogo} alt="icon" />
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p>Join a vibrant community of buyers and sellers.</p>
              <span>0 auction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured live auctions section */}
      <section className="py-16 max-w-full mx-auto min-h-screen bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto   ">
          <h2 className="text-3xl font-normal mb-3 text-[#111827] text-[1.875rem]">
            Featured Live Auctions
          </h2>
          <p className="mb-7 font-Inter text-[1.24rem] text-[#4B5563]">
            Don't miss these popular items ending soon
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
            {featuredAuctionData.map((auction, index) => (
              <FeaturedAuctionCard key={index} auctionData={auction} />
            ))}
          </div>

          {/* Call to Action Section */}
          {/* <button className="bg-[#2094F3]  text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            <Link to="/liveauctions">View all auctions</Link>
          </button> */}
          <Link
            to="/liveauctions"
            className="bg-[#2094F3] py-3 px-10  text-white rounded hover:bg-blue-700 transition"
          >
            View all auctions
          </Link>
        </div>
      </section>

      {/* actitivites statistics */}
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
      <Footer />
    </div>
  );
}

export default Landing;
