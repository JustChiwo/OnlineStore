import { Link } from "react-router-dom";
import Sidebar from "../components/SideBar.jsx";
import products from "../data/products.js";
import "./Home.css";

function Home() {
  const featuredProduct = products[0];
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="home-page min-h-screen bg-[#f5f6f4] text-[#171a16]">
      <Sidebar />

      <main className="home-main mx-auto max-w-[1440px] px-5 pb-12 pt-7 sm:px-8 lg:px-12">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 pb-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
              Designed For you
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              Find your next favorite
            </h1>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm font-medium transition hover:border-neutral-500 hover:bg-neutral-50"
          >
            Browse the store <span aria-hidden="true">→</span>
          </Link>
        </header>

        {featuredProduct && (
          <section className="home-hero relative grid overflow-hidden rounded-[28px] bg-[#e6ece7] shadow-sm md:min-h-[350px] md:grid-cols-[1.05fr_0.95fr]">
            <div className="relative z-10 flex flex-col items-start justify-center px-7 py-10 sm:px-12 lg:px-16">
              <span className="home-featured-label rounded-full border border-emerald-900/10 bg-white/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-800">
                This week’s pick
              </span>
              <h2 className="mt-6 max-w-lg text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.5rem]">
                Better tech for your everyday.
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-neutral-600">
                Thoughtful essentials for work, play, and everything in between.
                Meet the {featuredProduct.name.trim()}.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link
                  to={`/product/${featuredProduct.id}`}
                  className="home-featured-link inline-flex items-center gap-3 rounded-full bg-[#172018] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-black"
                >
                  Explore the pick <span aria-hidden="true">→</span>
                </Link>
                <span className="text-sm font-semibold text-neutral-700">
                  $ {featuredProduct.price.toFixed(2)}
                </span>
              </div>
            </div>
            <Link
              to={`/product/${featuredProduct.id}`}
              aria-label={`View ${featuredProduct.name}`}
              className="home-hero-media relative flex h-64 items-center justify-center overflow-hidden bg-white/50 p-8 md:h-full md:min-h-[350px]"
            >
              <div className="absolute h-56 w-56 rounded-full bg-white/60 blur-2xl sm:h-72 sm:w-72" />
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="home-hero-image relative z-10 h-full max-h-60 w-full object-contain transition duration-500 hover:scale-105 md:max-h-72"
              />
            </Link>
          </section>
        )}

        <section className="mt-12 sm:mt-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Popular right now
              </h2>
            </div>
            <Link
              to="/products"
              className="mb-1 text-sm font-semibold text-neutral-600 transition hover:text-emerald-800"
            >
              View all <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="home-products-grid grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="home-product-card group overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-[0_4px_20px_rgba(20,30,22,0.035)] transition duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg"
              >
                <div className="home-product-media relative flex h-52 items-center justify-center overflow-hidden rounded-xl bg-[#f6f7f5] p-5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="home-product-image h-full max-h-44 w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                    Featured
                  </span>
                </div>
                <div className="flex items-end justify-between gap-3 px-2 pb-2 pt-4">
                  <div className="min-w-0">
                    <h3 className="truncate font-semibold text-neutral-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 truncate text-sm text-neutral-500">
                      {product.subtitle || product.color}
                    </p>
                  </div>
                  <span className="whitespace-nowrap text-sm font-semibold text-neutral-900">
                    $ {product.price.toFixed(2)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="home-cta relative mt-12 overflow-hidden rounded-2xl bg-[#172018] px-6 py-8 text-white sm:mt-14 sm:flex sm:items-center sm:justify-between sm:px-10 sm:py-9">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Your next find is here
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Looking for something specific?
            </h2>
            <p className="mt-2 text-sm text-neutral-300">
              Browse the full collection and find your next favorite.
            </p>
          </div>
          <br />
          <Link
            to="/products"
            className="home-cta-shop mt-5 inline-flex items-center gap-5 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#172018] transition hover:bg-emerald-100 sm:mt-0"
          >
            Shop all products <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Home;
