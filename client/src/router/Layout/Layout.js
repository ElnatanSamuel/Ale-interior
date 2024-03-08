import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import NavBarMain from "../../components/NavbarMain/NavbarMain";

const Layout = () => {
  return (
    <div className="app">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
