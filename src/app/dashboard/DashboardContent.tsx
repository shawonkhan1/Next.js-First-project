"use client";

import React, { useEffect, useState } from "react";

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

export default function DashboardContent() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const existing = localStorage.getItem("cart");
    if (existing) setCart(JSON.parse(existing));
  }, []);

  const handleCancel = (id: number) => {
    const updated = cart.filter((p) => p.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  if (cart.length === 0) return <p className="text-center py-10">No products in your dashboard</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
      <div className="flex flex-col gap-4">
        {cart.map((product) => (
          <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg shadow">
            <div className="flex items-center gap-4">
              <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded" />
              <div>
                <h2 className="font-bold">{product.name}</h2>
                <p>${product.price}</p>
              </div>
            </div>
            <button
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={() => handleCancel(product.id)}
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
