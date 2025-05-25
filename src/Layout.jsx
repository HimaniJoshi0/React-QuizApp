import React from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const Layout = ({ children }) => {
  return (
    <div >
      
      <div className="min-h-screen">{children}</div>
 
    </div>
  );
};

export default Layout;
