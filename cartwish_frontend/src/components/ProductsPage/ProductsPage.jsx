import React from "react";
import "./ProductsPage.css";
import ProductsSidebar from "./ProductsSidebar/ProductsSidebar";
import ProductsList from "./ProductsList/ProductsList";

const ProductsPage = () => {
  return (
    <section className="products_page">
      <ProductsSidebar />
      <ProductsList />
    </section>
  );
};

export default ProductsPage;
