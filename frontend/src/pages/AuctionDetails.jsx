import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

function AuctionDetails() {
  // const auction = auctionData.id;
  const [auction, setAuction] = useState({}); // State to hold auction data

  const params = useParams();

  // Fetch auction data from the mock API
  useEffect(() => {
    const fetchAuction = async () => {
      try {
        const res = await fetch(`http://localhost:5000/auctions/${params.id}`);

        if (!res.ok) throw new Error("Failed to fetch auction data");
        const data = await res.json();
        setAuction(data);
      } catch (error) {
        console.error("Error fetching auction data:", error);
      }
    };
    fetchAuction();
  }, []);

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
      <section className="max-w-full mx-auto py-12 min-h-screen">
        <div className="max-w-6xl mx-auto mb-8 font-Inter flex flex-col md:flex-row space-x-5">
          {/* left flex */}
          <div className="flex-1 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <img
                src={auction.image}
                alt={auction.title}
                className="w-full h-64 object-cover rounded mb-6"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold mb-2">{auction.title}</h1>
              <p className="text-gray-700 mb-4">{auction.productDescription}</p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
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
          </div>
        </div>
        <div className="mt-8 text-center ">
          <Link to="/" className="text-blue-600 ">
            &larr; Back to Auctions
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AuctionDetails;
// filepath: c:\Projects\Dawglass-auctions\frontend\src\pages\AuctionDetails.jsx
