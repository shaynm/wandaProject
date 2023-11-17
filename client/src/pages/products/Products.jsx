import React, { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import { getAllProducts } from "../../services/productsService";
import "./products.css";
import { BsSearch } from "react-icons/bs";
import Loading from "../../components/loading/Loading";
import NoProductFound from "../../components/noProductFound/NoProductFound";

const Products = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [priceRanges, setPriceRanges] = useState([
    { label: "$0 - $50", range: [0, 50] },
    { label: "$50 - $500", range: [50, 500] },
    { label: "$500 and above", range: [500, Infinity] },
  ]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const resetFiltersAndSearch = () => {
    setSelectedPriceRanges([]);
    setSearch("");
  };

  const productsApi = async (productCategory) => {
    const request = await getAllProducts();
    if (request.status === 200) {
      const productsList = request.data.filter((item) => {
        return item.category === productCategory;
      });
      setProducts(productsList);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    productsApi(category);
    resetFiltersAndSearch();
  }, [category]);

  const handlePriceRangeChange = (range) => {
    if (selectedPriceRanges.includes(range)) {
      setSelectedPriceRanges(selectedPriceRanges.filter((r) => r !== range));
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, range]);
    }
  };

  const filterProducts = () => {
    return products.filter((item) => {
      const titleMatch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const priceMatch =
        selectedPriceRanges.length === 0 ||
        selectedPriceRanges.some((range) => {
          const [min, max] = priceRanges.find((r) => r.label === range).range;
          return Number(item.price) >= min && Number(item.price) <= max;
        });
      return titleMatch && priceMatch;
    });
  };

  return (
    <>
      {isLoading ? (
        <div className="container my-4">
          <div className="row">
            <div className="col-lg-3">
              <h1 className="products-title">{category}</h1>
              <div className="mb-3 search-input">
                <BsSearch />
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  className="form-control"
                  placeholder="Search Product"
                  aria-label="Search"
                  value={search}
                />
              </div>
              {/* Checkboxes for price range */}
              <div className="price-range">
                <h5 className="mb-3">Filter by Price:</h5>
                {priceRanges.map((range) => (
                  <div key={range.label} className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={selectedPriceRanges.includes(range.label)}
                      onChange={() => handlePriceRangeChange(range.label)}
                    />
                    <label className="form-check-label">{range.label}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="col">
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {products &&
                products.length > 0 &&
                filterProducts().length > 0 ? (
                  filterProducts().map((item) => (
                    <div key={item._id} className="col">
                      <Card
                        _id={item._id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        quantityInStock={item.quantityInStock}
                      />
                    </div>
                  ))
                ) : (
                  <div className="col">
                    <div className="no-products text-center">
                      <NoProductFound />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Products;
