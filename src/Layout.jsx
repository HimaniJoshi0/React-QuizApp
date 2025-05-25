import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
