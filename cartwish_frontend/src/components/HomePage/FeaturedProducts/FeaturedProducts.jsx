import React from "react";
import "./FeaturedProducts.css";
import ProductCard from "../../ProductsPage/ProductCard/ProductCard";
import useData from "../../../hooks/useData";
import { delay, motion } from "framer-motion";
import ProductCardSkeleton from "../../ProductsPage/ProductCardSkeleton/ProductCardSkeleton";

const FeaturedProducts = () => {
  const { data, error, isLoading } = useData(
    "/products/featured",
    null,
    ["products", "featured"],
    10 * 60 * 60 * 1000
  );
  const skeletons = [1, 2, 3];

  return (
    <section className="featured_products">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Featured Products
      </motion.h2>
      <div className="align_center featured_products_list">
        {error && <em className="form_error">{error}</em>}
        {data &&
          data.map((product, index) => (
            <motion.dev
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.25,
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <ProductCard key={product._id} product={product} />
            </motion.dev>
          ))}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
      </div>
    </section>
  );
};

export default FeaturedProducts;
