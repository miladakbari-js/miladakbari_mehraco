"use client";

import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import useFilterStore from "../../store/filterStore";
import { useDebounce } from "../../hooks/useDebounce";

function SearchBox() {
  const search = useFilterStore((state) => state.search);
  const setSearch = useFilterStore((state) => state.setSearch);


  const [inputValue, setInputValue] = useState(search);


  const debouncedValue = useDebounce(inputValue, 500);


  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue, setSearch]);

  return (
    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl w-270 ">
      <Search size={16} className="text-gray-500" />

      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search product"
        className="bg-transparent outline-none w-full text-sm "
      />
    </div>
  );
}

export default SearchBox;