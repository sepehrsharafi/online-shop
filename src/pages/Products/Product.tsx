import React, { useState, useEffect } from "react";
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
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
        console.log(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

  useEffect(() => {
    if (selectedCategory === null) {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(
      e.target.value === "no-category" ? null : e.target.value
    );
  };

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="mx-[11%] mb-10">
      <section className="mx-4  my-11 text-lg  flex flex-col md:flex-row gap-4 md:gap-8">
        <input
          className="p-2 px-5 w-full lg:w-3/12 border-[1.7px] rounded-full"
          type="text"
          name=""
          id=""
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          className="p-1 w-full lg:w-3/12 border-b-2"
          name=""
          id=""
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
      </section>
      <div className="flex flex-wrap justify-center gap-7">
        {filteredProducts.map((product: ProductType) => (
          <ProductCard key={product.id} props={product} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(ProductsPage);
