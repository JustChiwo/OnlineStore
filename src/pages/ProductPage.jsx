import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/cartSlice.js";
import products from "../data/products.js";
import SearchBar from "../components/SearchBar.jsx";
import SideBar from "../components/SideBar.jsx";
import BagPanel from "../components/BagPanel.jsx";
import "./ProductPage.css";

function ProductPage() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    const search = searchTerm.toLowerCase();
    if (!search) return products;

    return products.filter((product) =>
      [product.name, product.subtitle, product.color, product.category]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(search))
    );
  }, [searchTerm]);

  return (
    <div className="product-page">
      <SideBar />

      <main className="main-content">
        <SearchBar onSearch={setSearchTerm} />

        <section className="products-section" aria-label="Products">
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <Link to={`/product/${product.id}`} className="block">
                    <div className="product-image-container">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-image"
                      />
                    </div>
                  </Link>
                  <div className="product-info">
                    <Link to={`/product/${product.id}`} className="block text-inherit no-underline">
                      <h2 className="product-name">{product.name}</h2>
                    </Link>
                    <p className="product-variant">
                      {product.subtitle || product.color}
                    </p>
                    <div className="product-bottom">
                      <span className="product-price">
                        $ {product.price.toFixed(2)}
                      </span>
                      <button
                        type="button"
                        className="add-button"
                        onClick={() => dispatch(addToCart(product))}
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <span aria-hidden="true">+</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="no-products" role="status">
              No products found.
            </p>
          )}
        </section>
      </main>

      <BagPanel />
    </div>
  );
}

export default ProductPage;
