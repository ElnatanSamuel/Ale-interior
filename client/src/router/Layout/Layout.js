import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
