"use client";

import Image from "next/image";
import Modal from "../../ui/modal/Modal";
import { Product } from "@/src/app/types/product";

type Props = {
  product: Product | null;
  onClose: () => void;
};

function ProductModal({ product, onClose }: Props) {
  if (!product) return null;

  const discountedPrice =
    product.price -
    (product.price * product.discountPercentage) / 100;

  return (
    <Modal isOpen={!!product} onClose={onClose}>
      <div className="grid md:grid-cols-2 gap-6">
        {/* image */}
        <div className="relative w-full h-72">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        {/* details */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            {product.title}
          </h2>

          <p className="text-gray-500 text-sm">
            {product.description}
          </p>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold">
              ${discountedPrice.toFixed(2)}
            </span>

            <span className="line-through text-gray-400">
              ${product.price}
            </span>
          </div>

          <p className="text-sm">
            Brand: <b>{product.brand}</b>
          </p>

          <p className="text-sm">
            Stock: <b>{product.stock}</b>
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default ProductModal;