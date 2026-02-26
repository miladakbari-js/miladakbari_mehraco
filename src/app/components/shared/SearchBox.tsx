"use client"
import {Search} from "lucide-react"
import useFilterStore from "../../store/filterStore";


function SearchBox() {
  const search = useFilterStore((state)=> state.search);
  const setSearch = useFilterStore((state)=> state.setSearch)
  return (
    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-xl w-full max-w-md">
       
        <Search size={16} className="text-gray-500" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search product"
        className="bg-transparent outline-none w-full text-sm"
      />
    </div>
  )
}

export default SearchBox