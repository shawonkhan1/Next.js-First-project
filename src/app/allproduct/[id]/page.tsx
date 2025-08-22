"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  releaseDate: string;
  image: string;
};

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter(); // router import করা হলো

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("/products.json");
      const data: Product[] = await res.json();
      const found = data.find((p) => p.id === parseInt(id));
      setProduct(found || null);
    };

    fetchProduct();
  }, [id]);

  const handleBuyNow = () => {
    if (!product) return;
    const existing = localStorage.getItem("cart");
    const cart: Product[] = existing ? JSON.parse(existing) : [];
    
    // duplicate check
    if (!cart.find((p) => p.id === product.id)) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      // buy করলে dashboard-এ redirect
      router.push("/dashboard");
    } else {
      alert(`${product.name} is already in your dashboard`);
      router.push("/dashboard");
    }
  };

  if (!product) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-h-96 object-cover rounded-lg mb-6 shadow"
      />
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <div className="flex flex-wrap gap-6 mt-4">
        <p className="text-lg font-semibold text-blue-600">${product.price}</p>
        <p className="text-gray-600">Category: {product.category}</p>
        <p className="text-gray-600">Brand: {product.brand}</p>
        <p className="text-gray-600">Stock: {product.stock}</p>
        <p className="text-gray-600">Rating: {product.rating} ⭐</p>
        <p className="text-gray-600">Release: {product.releaseDate}</p>
      </div>

      <button
        onClick={handleBuyNow}
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Buy Now
      </button>
    </div>
  );
}
