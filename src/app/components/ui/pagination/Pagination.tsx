"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  currentPage: number;
  total: number;
  limit: number;
  onChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  total,
  limit,
  onChange,
}: Props) {
  const totalPages = Math.ceil(total / limit);

  const createPages = () => {
    const pages: (number | "...")[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        Math.abs(i - currentPage) <= 2
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  };

  const pages = createPages();

  return (
    <div className="flex items-center justify-center gap-2 mt-10">
      
 
      <button
        disabled={currentPage === 1}
        onClick={() => onChange(currentPage - 1)}
        className="p-2 border rounded-lg disabled:opacity-40 cursor-pointer"
      >
        <ChevronLeft size={18} />
      </button>

      {pages.map((p, index) =>
  p === "..." ? (
    <span key={`ellipsis-${index}`} className="px-2">
      ...
    </span>
  ) : (
    <button
      key={`page-${p}`}
      onClick={() => onChange(p)}
      className={`
        px-4 py-2 rounded-lg border cursor-pointer
        ${
          currentPage === p
            ? "bg-black text-white"
            : "bg-white hover:bg-gray-100"
        }
      `}
    >
      {p}
    </button>
  )
)}

   
      <button
        disabled={currentPage === totalPages}
        onClick={() => onChange(currentPage + 1)}
        className="p-2 border rounded-lg disabled:opacity-40 cursor-pointer"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}