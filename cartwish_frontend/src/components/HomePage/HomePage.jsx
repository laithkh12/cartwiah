import React from "react";
import "./HomePage.css";
import HeroSection from "./HeroSection/HeroSection";
import iphone from "../../assets/iphone-14-pro.webp";
import mac from "../../assets/mac-system-cut.jfif";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitle="Experince the power of the latest iPhone 14 with our most Pro camera ever."
        link="/product/681b2800670d3318df583ab0"
        image={iphone}
      />
      <FeaturedProducts />
      <HeroSection
        title="Build the ultimate setup"
        subtitle="You can add Studio Display and color-matched Magic accessories to your bag after configure your Mac mini."
        link="/product/681b2800670d3318df583ab8"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
