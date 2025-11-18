import React, { useState, useEffect } from "react";
import Category from "../components/Category";
import Product from "../components/Product";
import Footer from "../components/Footer";

function Home() {
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [categoriesError, setCategoriesError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchCategories() {
      try {
        const response = await fetch(
          "https://api-norapart.liara.run/api/category"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        if (isMounted) {
          setCategories(Array.isArray(data) ? data : []);
          setCategoriesError(null);
        }
      } catch (error) {
        if (isMounted) {
          setCategoriesError("خطا در دریافت دسته‌بندی‌ها");
          console.error("Failed to fetch categories", error);
        }
      } finally {
        if (isMounted) {
          setLoadingCategories(false);
        }
      }
    }

    fetchCategories();

    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-grow">
        <Category categories={categories} categoriesError={categoriesError} loadingCategories={loadingCategories}/>
        <Product />
      </section>
      <Footer />
    </div>
  );
}

export default Home;