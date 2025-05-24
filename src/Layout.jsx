import React from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const Layout = ({ children }) => {
  return (
    <div >
      {/* <Navbar /> */}
      <div className="min-h-screen">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
