import React from "react";
import Category from "../components/Category";
import Product from "../components/Product";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow">
        <Category />
        <Product />
      </section>
      <Footer />
    </div>
  );
}

export default Home;