// Import images from the assets folder
// import car from "../assets/images/car.svg";
// import gamingPc from "../assets/images/gaming-pc.png";
// import iphone from "../assets/images/iphone-15.png";
// import leatherJacket from "../assets/images/leather-jacket.png";
// import motocycle from "../assets/images/motocycle.png";
// import vintageWatch from "../assets/images/vintage-watch.png";
// import { slugify } from "../utils/utils.js";

// import images/icons
import livebidIcon from "../assets/icons/livebid-icon.svg";
import greatDealIcon from "../assets/icons/great-deal-icon.svg";
import secureIcon from "../assets/icons/secure-icon.svg";

const navItems = [
  { name: "Home", to: "/", active: true },
  { name: "Live Auctions", to: "/liveauctions", active: false },
  { name: "Categories", to: "/categories", active: false },
];

// ========================================
// Why choose us data array
const whyChooseUsData = [
  {
    id: 1,
    icon: livebidIcon,
    title: "Live Bidding",
    description: "Real-time bidding with instant updates and notifications",
  },
  {
    id: 2,
    icon: secureIcon,
    title: "Secure Platform",
    description: "Safe and secure transactions with buyer protection",
  },
  {
    id: 3,
    icon: greatDealIcon,
    title: "Great Deals",
    description: "Find incredible bargains and rare items every day",
  },
];

const categoriesObject = [
  {
    id: 1,
    icon: livebidIcon,
    catigory: "Electronics",
    description: "Gadgets, computers, and electronic devices",
  },
  {
    id: 2,
    icon: secureIcon,
    catigory: "Cars",
    description: "Vehicles, motorcycles, and automotive items",
  },
  {
    id: 3,
    icon: greatDealIcon,
    catigory: "Clothing",
    description: "Fashion, accessories, and apparel",
  },
  {
    id: 4,
    icon: greatDealIcon,
    catigory: "General",
    description: "Miscellaneous items and collectibles",
  },
];

export { navItems, categoriesObject, whyChooseUsData };
