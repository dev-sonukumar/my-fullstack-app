import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./pages/Navbar.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./components/layout/Home.jsx";
import Footer from "./components/common/Footer.jsx";
import OurServices from "./pages/OurServices.jsx";
import Post from "./pages/Post.jsx";
import Faq from "./pages/Faq.jsx";
import Contact from "./pages/Contact.jsx";

// Layout Component to Avoid Repeating Navbar & Footer
const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Shared Layout
    children: [
      { index: true, element: <Home /> }, // Default route
      { path: "/", element: <Home /> },
      { path: "services", element: <OurServices /> },
      { path: "services/:post", element: <Post /> },
      { path: "faqs", element: <Faq /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
