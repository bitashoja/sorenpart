import React from "react";
import "./index.css";
import { AppProvider } from "./context/AppContext";
import Header from "./components/Header";
import Category from "./components/Category";
import Product from "./components/Product";
import Footer from "./components/Footer";

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Category />
          <Product />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}
