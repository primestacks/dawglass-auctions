import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <h1 className="font-bold">Oops!.</h1>
      <h2 className="font-semibold">
        The page you are looking for does not exist.
      </h2>
      <Link to="/" className="p-3 bg-blue-700 rounded-2xl text-white mt-5">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
