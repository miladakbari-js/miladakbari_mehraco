"use client";

type Props = {
  currentPage: number;
  total: number;
  limit: number;
  onChange: (page: number) => void;
};

function Pagination({ currentPage, total, limit, onChange }: Props) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex justify-center gap-2 mt-10">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;

        return (
          <button
            key={page}
            onClick={() => onChange(page)}
            className={`
              px-4 py-2 rounded-lg border
              ${
                currentPage === page
                  ? "bg-black text-white"
                  : "bg-white"
              }
            `}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;