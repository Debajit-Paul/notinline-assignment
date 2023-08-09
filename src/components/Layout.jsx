import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-fit">
      <header>
        <Navbar />
      </header>
      <main className="">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
