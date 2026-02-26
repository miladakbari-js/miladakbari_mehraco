
import SearchBox from "./components/shared/SearchBox";
import { getProducts } from "./services/productApi";

export default async function Page() {
  const data = await getProducts();

  return (
    <div>
      <div>
      {data.products.length}<p>Products</p>
      <SearchBox/>
      </div>
      {/* Products count: {data.products.length} */}
    </div>
  );
}