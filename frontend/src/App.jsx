import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Landing from "./pages/home/Landing";
import LiveAuction from "./pages/LiveAuction";
import NotFoundPage from "./pages/NotFoundPage";
import Categories from "./pages/Categories";
import AuctionDetailPage from "./pages/AuctionDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/liveauctions",
    element: <LiveAuction />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/auction/:id",
    element: <AuctionDetailPage />,
  },
]);

function App() {
  return (
    <div>
      {/* Routing */}
      <RouterProvider router={router} />
      {/* Components and pages  */}
    </div>
  );
}

export default App;
