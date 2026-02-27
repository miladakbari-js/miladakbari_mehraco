"use client";

import { useState } from "react";
import { Product } from "@/src/app/types/product";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

type Props = {
  products: Product[];
};

function ProductGrid({ products }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <div
        className="
  grid
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        gap-4
"
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}

export default ProductGrid;
