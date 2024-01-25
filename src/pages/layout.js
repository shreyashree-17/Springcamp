import { Outlet } from "react-router";
import Footer from "../components/footer";
import NavigationBar from "../components/navbar";

const Layout = () => {
    return (
      <>
        <NavigationBar />
        <Footer/>
        <Outlet />
      </>
    );
  };
  export default Layout;