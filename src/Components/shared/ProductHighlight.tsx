"use client";

import Image from "next/image";
import { FC } from "react";
import { useRouter } from "next/navigation";

const ProductHighlight: FC = () => {
  const router = useRouter();

  const handleBuyNow = () => {
    // redirect to /allproduct with discount info
    router.push("/allproduct?discount=20");
  };

  return (
    <section className="w-11/12 mx-auto mt-10 rounded-2xl bg-gray-100 dark:bg-gray-900 transition-colors px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Product Image */}
        <div className="flex-1">
          <Image
            src="/Banner.jpg"
            alt="Product"
            width={500}
            height={400}
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center lg:text-left">
            Product Highlight
          </h2>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            SuperCool Laptop
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            This laptop is designed for maximum performance and portability, perfect for professionals and students alike.
          </p>

          {/* Features */}
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
              16GB RAM for smooth multitasking
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
              512GB SSD for fast storage
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
              Lightweight & portable design
            </li>
          </ul>

          {/* Call to Action */}
          <button
            onClick={handleBuyNow}
            className="mt-4 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Buy Now - 20% Off
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
