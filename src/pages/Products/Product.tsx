import React, { useState, useEffect, useMemo, useCallback } from "react";
import { getProducts } from "../../api";
import ProductCard from "../../components/common/ProductCard/ProductCard";

type ProductType = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

function ProductsPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch products only once and memoize them
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        // Check if we have the products in localStorage
        const cachedProducts = localStorage.getItem("products");

        if (cachedProducts) {
          setProducts(JSON.parse(cachedProducts));
        } else {
          const fetchedProducts = await getProducts();
          setProducts(fetchedProducts);
          // Cache products in localStorage
          localStorage.setItem("products", JSON.stringify(fetchedProducts));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Memoize the unique categories
  const uniqueCategories = useMemo(() => {
    return Array.from(new Set(products.map((product) => product.category)));
  }, [products]);

  // Memoize the filtered products
  const filteredProducts = useMemo(() => {
    // Filter by search term
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    return filtered;
  }, [products, searchTerm, selectedCategory]);

  // Memoize the handler functions
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleCategoryChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCategory(
        e.target.value === "no-category" ? null : e.target.value
      );
    },
    []
  );

  return (
    <section className="mx-[7%] mb-10">
      <div className="mx-4 my-11 text-lg flex flex-col md:flex-row gap-4 md:gap-8">
        <input
          className="hover:shadow-lg transition-shadow duration-300 p-2 px-5 w-full lg:w-3/12 border-[1.7px] rounded-full"
          type="text"
          name="search"
          id="search"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          className="p-1 w-full lg:w-3/12 border-b-2"
          name="category"
          id="category"
          value={selectedCategory === null ? "no-category" : selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="no-category">No category selected</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-7">
          {filteredProducts.map((product: ProductType) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default React.memo(ProductsPage);
