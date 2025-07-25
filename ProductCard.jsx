import React from "react";
import "./ProductCard.css";



const ProductCard = ({ product }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="image-box">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="card-content">
          <h2>{product.name}</h2>

          <div className="variant-labels">
            {product.variants.map((variant, i) => (
              <span key={i} className="variant">{variant}</span>
            ))}
          </div>

          <p className="description">{product.description}</p>

          <div className="card-footer">
            <div className="price">
              <small>PRICE</small>
              <strong>₹{product.price}</strong>
            </div>

            {product.inStock ? (
              <button className="btn">Add to cart</button>
            ) : (
              <button className="btn out" disabled>Out of Stock</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
