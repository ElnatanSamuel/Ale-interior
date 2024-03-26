import { createBrowserRouter } from "react-router-dom";
import About from "../../pages/AboutPage/About";
import Blogs from "../../pages/BlogsPage/Blogs";
import Home from "../../pages/HomePage/Home";
import Services from "../../pages/ServicesPage/Services";
import Contacts from "../../pages/ContactsPage/Contacts";
import Layout from "../Layout/Layout";
import ContactsPage from "../../pages/ContactsPage/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <ContactsPage />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default router;
