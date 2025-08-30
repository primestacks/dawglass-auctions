import { React, useState, useEffect } from "react";
import Navbar from "../../components/Navbar.jsx";
import Button from "../../components/Button.jsx";
// import { FaSearch, FaHeart } from "react-icons/fa";
import { whyChooseUsData } from "../../data/data.js";
import FeaturedAuctionCard from "../../components/FeaturedAuctionCard.jsx";
import { FiUsers } from "react-icons/fi";
import Footer from "../../components/Footer.jsx";
import { Link } from "react-router";
import CategoryFilter from "../../components/CategoryFilter.jsx";

function Landing() {
  // const API_URI = import.meta.env.VITE_API_URL;
  const API_URI = "http://localhost:5000";

  console.log("API_URI:", API_URI);

  // const [featuredAuctionData, setFeaturedAuctionData] = useState([]);

  const [liveAuctions, setLiveAuctions] = useState([]); // State to hold live auction data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch auction data from the mock API
  useEffect(() => {
    const fetchAuctions = async () => {
      const res = await fetch(`${API_URI}/auctions`);
      try {
        if (!res.ok) throw new Error("Failed to fetch auctions");
        const data = await res.json();
        const filteredLiveAuctions = data
          .filter((auction) => auction.isLive)
          .slice(0, 6); // Get only the first 6 live auctions
        setLiveAuctions(filteredLiveAuctions);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchAuctions();
  }, []);

  if (loading) return <p>Loading auction data...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  // Filter the auctionData to get only live auctions
  // const featuredAuctionData = auctionData
  //   .filter(function (auction) {
  //     return auction.isLive;
  //   })
  //   .slice(0, 6); // Get only the first 6 live auctions

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
        <div className="max-w-6xl  mx-auto text-center">
          <h2 className="text-2xl mb-3 text-[#111827] font-Inter font-normal">
            Why Choose Premier Auctions?
          </h2>
          <p className="mb-7 text-[#4B5563] my-3 font-Inter">
            Join thousands of satisfied bidders and sellers worldwide
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 bg-[#F9FAFB] py-5">
            {whyChooseUsData.map((item) => (
              <div
                key={item.id}
                className="p-8 bg-[#ffffff] rounded shadow flex flex-col gap-y-2 items-center"
              >
                <img src={item.icon} alt={`${item.title}-icon`} />
                <h2 className="text-xl font-normal mb-2">{item.title}</h2>
                <p className="text-[#4B5563] text-[15.65px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* filter by Categories section */}
      <CategoryFilter />

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
            {liveAuctions.map((auction, index) => (
              // console.log(auction)
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
