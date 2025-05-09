import React from "react";
import "./ProductsSidebar.css";
import LinkWithIcon from "../../Navbar/LinkWithIcon/LinkWithIcon";
import useData from "../../../hooks/useData";
const ProductsSidebar = () => {
  const { data: categories, error } = useData(
    "/category",
    null,
    ["categories"],
    24 * 60 * 60 * 1000
  );

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>

      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {categories &&
          categories.map((category) => (
            <LinkWithIcon
              id={category._id}
              key={category._id}
              title={category.name}
              link={`/products?category=${category.name}`}
              emoji={`http://localhost:5000/category/${category.image}`}
              sidebar
            />
          ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
