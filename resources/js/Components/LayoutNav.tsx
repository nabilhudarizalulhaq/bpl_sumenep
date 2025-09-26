import React from "react";
import Navbar from "./Navbar";

interface LayoutNav {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutNav> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
