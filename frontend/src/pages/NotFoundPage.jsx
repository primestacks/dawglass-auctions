import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
      <h1>Oops!.</h1>
      <h2>The page you are looking for does not exist.</h2>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
