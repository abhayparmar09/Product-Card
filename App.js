import React from "react";
import ProductCard from "./ProductCard";

const sampleProduct = {
  name: "Nike Running Shoe",
  price: 3000,
  image: process.env.PUBLIC_URL + "/shoes.jpg", // 👈 correct method
  variants: ["Size 7 ", "BLACK/WHITE"],
  description:
    "Step up your sneaker game with unmatched comfort and timeless style. Designed for everyday wear with premium materials, bold stitching, and a lightweight feel — built to perform, styled to impress",
  inStock: true,
};




function App() {
  return (
    <div>
      <ProductCard product={sampleProduct} />
    </div>
  );
}

export default App;
