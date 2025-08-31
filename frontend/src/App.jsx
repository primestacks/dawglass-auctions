import { React } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Landing from "./pages/home/Landing";
import LiveAuction from "./pages/LiveAuction";
import NotFoundPage from "./pages/NotFoundPage";
import Categories from "./pages/Categories";
import AuctionDetails from "./pages/AuctionDetails";

// Define routes using createBrowserRouter
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
    path: "/auction/:id/:slug",
    element: <AuctionDetails />,
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
