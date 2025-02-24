import { Home, Eye, Newspaper, Briefcase } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Vision",
    to: "#vision",
    icon: <Eye className="h-4 w-4" />,
  },
  {
    title: "News",
    to: "#news",
    icon: <Newspaper className="h-4 w-4" />,
  },
  {
    title: "Careers",
    to: "#careers",
    icon: <Briefcase className="h-4 w-4" />,
  },
];
