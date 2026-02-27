"use client";

import Image from "next/image";
import { Product } from "@/src/app/types/product";

type Props = {
  product: Product;
  onClick?: () => void;
};

function ProductCard({ product, onClick }: Props) {
  const discountedPrice =
    product.price -
    (product.price * product.discountPercentage) / 100;

  return (
    <div
      onClick={onClick}
      className="
        cursor-pointer
        bg-white
        rounded-2xl
        border
        p-4
        transition
        hover:shadow-lg
        hover:-translate-y-1
      "
    >

      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain"
        />
      </div>

     
      <h3 className="text-sm font-medium line-clamp-2 mb-2">
        {product.title}
      </h3>

   
      <div className="flex items-center gap-2">
        <span className="font-bold text-lg">
          ${discountedPrice.toFixed(2)}
        </span>

        <span className="text-sm text-gray-400 line-through">
          ${product.price}
        </span>
      </div>

   
      <div className="mt-2 text-xs text-red-500 font-medium">
        %{product.discountPercentage.toFixed(0)} OFF
      </div>
    </div>
  );
}

export default ProductCard;