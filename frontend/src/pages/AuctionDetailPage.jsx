import React from "react";
import { Link, useParams } from "react-router-dom";
import { auctionData } from "../data/data.js";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function AuctionDetailPage() {
  const { slug } = useParams();
  const auction = auctionData.slug;

  if (!auction) {
    return (
      <div>
        <Navbar />
        <div className="max-w-3xl mx-auto py-20 text-center min-h-screen">
          <h2 className="text-2xl font-bold mb-4">Auction Not Found</h2>
          <Link to="/" className="text-blue-600 underline">
            Go back to home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <section className="max-w-4xl mx-auto py-12 px-4 min-h-screen">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <img
            src={auction.image}
            alt={auction.title}
            className="w-full h-64 object-cover rounded mb-6"
          />
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              {auction.category}
            </span>
            {auction.isLive && (
              <span className="px-4 py-1 bg-[#2094F3] text-white rounded-2xl">
                Live
              </span>
            )}
          </div>
          <h1 className="text-3xl font-bold mb-2">{auction.title}</h1>
          <p className="text-gray-700 mb-4">{auction.productDescription}</p>
          <div className="flex flex-wrap gap-6 mb-6">
            <div>
              <span className="block text-gray-500">Current Bid</span>
              <span className="text-blue-600 font-bold text-xl">
                ${auction.currentBid}
              </span>
            </div>
            <div>
              <span className="block text-gray-500">Starting Price</span>
              <span className="font-bold">${auction.startingPrice}</span>
            </div>
            <div>
              <span className="block text-gray-500">Bids</span>
              <span className="font-bold">{auction.bids}</span>
            </div>
            <div>
              <span className="block text-gray-500">Views</span>
              <span className="font-bold">{auction.views}</span>
            </div>
          </div>
          <div className="mb-4">
            <span className="block text-gray-500">Auction Starts</span>
            <span className="font-bold">{auction.startTime}</span>
          </div>
          <div className="mb-4">
            <span className="block text-gray-500">Seller</span>
            <span className="font-bold">{auction.seller}</span>
          </div>
          <button className="bg-[#2094F3] text-white px-6 py-3 rounded font-semibold w-full mt-6">
            Place Bid
          </button>
        </div>
        <div className="mt-8 text-center ">
          <Link to="/" className="text-blue-600 underline">
            &larr; Back to Auctions
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AuctionDetailPage;
// filepath: c:\Projects\Dawglass-auctions\frontend\src\pages\AuctionDetails.jsx
