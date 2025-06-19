"use client";
import React from "react";

const AddToCard = () => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={() => alert("Product added to cart!")}
    >
      Add to Cart
    </button>
  );
};

export default AddToCard;
