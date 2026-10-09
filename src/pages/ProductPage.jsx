import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import "./ProductPage.css";
import SearchBar from "../components/SearchBar.jsx";
import SideBar from "../components/SideBar.jsx";

// Image import
import Watch from "../images/Name=Watch.png";
import Headphones from "../images/Name=Headphones.png";
import Iphone12_01 from "../images/Name=Iphone-12-01.png";
import Iphone12_02 from "../images/Name=Iphone-12-02.png";
import Iphone12_03 from "../images/Name=Iphone-12-03.png";
import Iphone12_04 from "../images/Name=Iphone-12-04.png";
import Iphone12Pro_01 from "../images/Name=Iphone-12-Pro-01.png";
import Iphone12Pro_02 from "../images/Name=Iphone-12-Pro-02.png";
import Iphone13Pro_01 from "../images/Name=Iphone-13-Pro-01.png";
import Iphone13Pro_02 from "../images/Name=Iphone-13-Pro-02.png";
import Iphone13Pro_03 from "../images/Name=Iphone-13-Pro-03.png";
import Macbook from "../images/Name=Macbook.png";
import SamsungNote21 from "../images/Name=Samsung-Note21.png";
import SamsungS21Pro from "../images/Name=Samsung-S21-Pro.png";
import SamsungS21 from "../images/Name=Samsung-S21.png";
import DellXPS13_Black from "../images/Name=Dell-XPS-13-Black.png";
import DellXPS13_White from "../images/Name=Dell-XPS-13-White.png";
import DellXPS15_Black from "../images/Name=Dell-XPS-15-Black.png";


// SVG icons

const MenuIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);

const StoreIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M4 10h16v10H4z" />
    <path d="M3 10l2-6h14l2 6" />
    <path d="M8 14h3v6H8z" />
    <path d="M14 14h3v3h-3z" />
  </svg>
);

const BagIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
  >
    <path d="M5 8h14l-1 12H6L5 8z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

const LogoutIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M10 17l5-5-5-5" />
    <path d="M15 12H3" />
    <path d="M21 19V5a2 2 0 0 0-2-2h-7" />
  </svg>
);

// Product Data

const defaultProducts = [
  {
  id: 1,
  name: "Apple Watch",
  variant: "Watch",
  price: 529.99,
  image: Watch
},
{
  id: 2,
  name: "Samsung S21",
  variant: "S21",
  price: 529.99,
  image: SamsungS21
},
{
  id: 3,
  name: "Samsung S21 Pro",
  variant: "S21 Pro",
  price: 529.99,
  image: SamsungS21Pro
},
{
  id: 4,
  name: "Samsung Note21",
  variant: "Note21",
  price: 529.99,
  image: SamsungNote21
},
{
  id: 5,
  name: "MacBook",
  variant: "MacBook",
  price: 529.99,
  image: Macbook
},
{
  id: 6,
  name: "iPhone 13 Pro",
  variant: "13 Pro 03",
  price: 529.99,
  image: Iphone13Pro_03
},
{
  id: 7,
  name: "iPhone 13 Pro",
  variant: "13 Pro 02",
  price: 529.99,
  image: Iphone13Pro_02
},
{
  id: 8,
  name: "iPhone 13 Pro",
  variant: "13 Pro 01",
  price: 529.99,
  image: Iphone13Pro_01
},
{
  id: 9,
  name: "iPhone 12 Pro",
  variant: "12 Pro 02",
  price: 529.99,
  image: Iphone12Pro_02
},
{
  id: 10,
  name: "iPhone 12 Pro",
  variant: "12 Pro 01",
  price: 529.99,
  image: Iphone12Pro_01
},
{
  id: 11,
  name: "iPhone 12",
  variant: "12 04",
  price: 529.99,
  image: Iphone12_04
},
{
  id: 12,
  name: "iPhone 12",
  variant: "12 03",
  price: 529.99,
  image: Iphone12_03
},
{
  id: 13,
  name: "iPhone 12",
  variant: "12 02",
  price: 529.99,
  image: Iphone12_02
},
{
  id: 14,
  name: "iPhone 12",
  variant: "12 01",
  price: 529.99,
  image: Iphone12_01
},
{
  id: 15,
  name: "Headphones",
  variant: "Headphones",
  price: 529.99,
  image: Headphones
},
{
  id: 16,
  name: "Dell XPS 15",
  variant: "Black",
  price: 529.99,
  image: DellXPS15_Black
},
{
  id: 17,
  name: "Dell XPS 13",
  variant: "White",
  price: 529.99,
  image: DellXPS13_White
},
{
  id: 18,
  name: "Dell XPS 13",
  variant: "Black",
  price: 529.99,
  image: DellXPS13_Black
},
];


// Product Page

const ProductPage = () => {
  const dispatch = useDispatch();

  const reduxProducts = useSelector(
    (state) => state.products?.products
  );

  const cartItems = useSelector(
    (state) =>
      state.cart?.items ||
      state.cart?.cartItems ||
      []
  );

  const [searchTerm, setSearchTerm] = useState("");

  const products =
    reduxProducts && reduxProducts.length > 0
      ? reduxProducts
      : defaultProducts;

  /* ---------------------------------------------------
     SEARCH
  --------------------------------------------------- */

  const filteredProducts = useMemo(() => {
    if (!searchTerm.trim()) {
      return products;
    }

    const search = searchTerm.toLowerCase();

    return products.filter((product) => {
      return (
        product.name?.toLowerCase().includes(search) ||
        product.variant?.toLowerCase().includes(search) ||
        product.category?.toLowerCase().includes(search)
      );
    });
  }, [products, searchTerm]);

  /* ---------------------------------------------------
     ADD TO CART
  --------------------------------------------------- */

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  /* ---------------------------------------------------
     CART QUANTITY
  --------------------------------------------------- */

  const cartQuantity = cartItems.reduce((total, item) => {
    return total + (item.quantity || 1);
  }, 0);

  /* ---------------------------------------------------
     FORMAT PRICE
  --------------------------------------------------- */

  const formatPrice = (price) => {
    return `$ ${Number(price).toFixed(2)}`;
  };

  return (
    <div className="product-page">

{/* sidebar */}

     <SideBar />



    

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main className="main-content">

        {/* Search */}
        <div className="search-container">

          <label className="search-label">
            Search Item
          </label>

          <input
            type="text"
            className="search-input"
            placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

        </div>

        {/* Product Grid */}
        <section className="products-section">

          {filteredProducts.length > 0 ? (
            <div className="products-grid">

              {filteredProducts.map((product) => (

                <article
                  className="product-card"
                  key={product.id}
                >

                  {/* Product image */}
                  <div className="product-image-container">

                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />

                  </div>

                  {/* Product information */}
                  <div className="product-info">

                    <h2 className="product-name">
                      {product.name}
                    </h2>

                    <p className="product-variant">
                      {product.variant ||
                        product.color ||
                        product.description ||
                        ""}
                    </p>

                    <div className="product-bottom">

                      <span className="product-price">
                        {formatPrice(product.price)}
                      </span>

                      <button
                        className="add-button"
                        onClick={() =>
                          handleAddToCart(product)
                        }
                        aria-label={`Add ${product.name} to cart`}
                      >
                        <BagIcon size={15} />
                        <span className="plus">+</span>
                      </button>

                    </div>

                  </div>

                </article>

              ))}

            </div>
          ) : (

            <div className="no-products">
              No products found.
            </div>

          )}

        </section>

      </main>

      {/* =================================================
          RIGHT BAG
      ================================================= */}

      <aside className="bag-panel">

        <h1 className="bag-title">
          Bag
        </h1>

        {/* Bag items */}
        <div className="bag-items">

          {cartItems.length > 0 ? (

            cartItems.map((item, index) => (

              <div
                className="bag-thumbnail"
                key={item.id || index}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

              </div>

            ))

          ) : (

            <>
              <div className="bag-thumbnail">
                <div className="empty-thumbnail"></div>
              </div>

              <div className="bag-thumbnail">
                <div className="empty-thumbnail"></div>
              </div>

              <div className="bag-thumbnail">
                <div className="empty-thumbnail"></div>
              </div>

              <div className="bag-thumbnail">
                <div className="empty-thumbnail"></div>
              </div>
            </>

          )}

        </div>

        {/* View Bag */}
        <button className="view-bag-button">

          <BagIcon size={16} />

          <span>
            View Bag
          </span>

          {cartQuantity > 0 && (
            <span className="bag-count">
              {cartQuantity}
            </span>
          )}

        </button>

      </aside>

    </div>
  );
};

export default ProductPage;