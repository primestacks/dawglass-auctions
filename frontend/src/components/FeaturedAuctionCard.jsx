import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeart } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

function FeaturedAuctionCard({ auctionData }) {
  const [isFav, setIsFav] = useState("");

  const { slug } = useParams();
  const auction = auctionData.slug;

  // console.log(auction);

  const handleFavoriteToggle = () => {
    // Toggle favorite state
    setIsFav(!isFav);
  };

  return (
    // Rendering the auction card based on the auctionData.lvie property

    <div className="bg-[#ffffff] relative shadow-md rounded-lg w-full md:max-w-[300px] h-auto text-left md:max-h-[430px]">
      <img
        src={auctionData.image}
        alt={auctionData.title}
        className="rounded-t-md w-full object-center Z-20"
      />
      {auctionData.isLive && (
        <span className="absolute px-4 py-1 top-4 left-4  bg-[#2094F3] text-[#ffffff] rounded-2xl">
          Live
        </span>
      )}
      <span
        className={`p-2 rounded-md absolute right-3 top-3  Z-100 cursor-pointer bg-[#f3f3f3] `}
        onClick={handleFavoriteToggle}
      >
        {/* Heart icon for favorite toggle */}
        {isFav ? (
          <IoHeart className="text-2xl text-[#2094F3]" />
        ) : (
          <IoMdHeartEmpty className="text-2xl " />
        )}
      </span>

      <div className="p-4">
        <h2 className="font-Inter my-2">{auctionData.title}</h2>
        <div className="flex justify-between  my-2">
          <div className="flex flex-col">
            <span>Current Bid</span>
            <span className="text-[#2094F3]">${auctionData.currentBid}.00</span>
          </div>
          <div className="flex flex-col">
            <span>{auctionData.bids} bids</span>
            <span>{auctionData.views} views</span>
          </div>
        </div>

        <span>Starting price</span>

        <button className="bg-[#2094F3] cursor-pointer w-full py-3 rounded mt-3 text-[#ffffff] font-Inter font-semibold">
          <Link to={`/auction/${auction}`}>Place a bid</Link>
        </button>
      </div>
    </div>
  );
}

export default FeaturedAuctionCard;
