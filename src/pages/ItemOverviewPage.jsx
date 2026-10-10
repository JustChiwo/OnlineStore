import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../components/SideBar.jsx";
import products from "../data/products.js";
import { addToCart, clearCart } from "../store/cartSlice.js";

function ItemOverviewPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const product = useMemo(
    () => products.find((item) => String(item.id) === String(id)),
    [id]
  );

  const cartQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const descriptionParagraphs = (product?.description || "")
    .split(/\n\s*\n/)
    .filter(Boolean);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#dfe0e1] pl-20 text-lg text-neutral-700">
        <div className="rounded-2xl bg-white px-6 py-4 shadow-sm">
          Product not found.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#dfe0e1] px-4 py-5 sm:px-5 lg:px-6">
      <Sidebar />

      <div className="ml-16 lg:ml-20">
        <div className="mx-auto flex max-w-[1220px] flex-col gap-5 md:flex-row xl:gap-8">
          <main className="min-w-0 flex-1 rounded-[18px] border border-neutral-200 bg-[#efefef] p-4 sm:p-6 lg:p-8">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link
                  to="/products"
                  aria-label="Back"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-300 bg-white text-lg text-neutral-700 shadow-sm"
                >
                  ←
                </Link>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-[minmax(220px,0.85fr)_minmax(0,1.2fr)]">
              <div className="rounded-2xl border border-neutral-200 bg-[#f4f4f4] p-5 shadow-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[280px] w-full object-contain lg:h-[340px]"
                />
              </div>

              <div className="min-w-0 pt-2">
                <h1 className="text-4xl font-semibold tracking-tight text-neutral-900">
                  {product.name}
                </h1>
                <p className="mt-2 text-xl text-neutral-600">{product.subtitle}</p>

                <div className="mt-3 flex items-center gap-2 text-sm text-neutral-700">
                  <div className="flex items-center gap-1 text-emerald-700">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={star <= Math.round(product.rating || 0) ? "text-emerald-700" : "text-neutral-300"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="font-medium">{product.rating || 4.5} / 5</span>
                </div>

                <p className="mt-5 text-3xl font-semibold text-neutral-900">
                  $ {product.price.toFixed(2)}
                </p>

                <p className="mt-4 max-w-xl text-base leading-7 text-neutral-600">
                  {descriptionParagraphs[0] || "Product details are not available."}
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => dispatch(addToCart(product))}
                    className="rounded-lg bg-[#1d1d1d] px-5 py-3 text-sm font-medium text-white transition hover:bg-black"
                  >
                    Add to Bag
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-neutral-300 pt-6">
              <h2 className="mb-3 text-2xl font-semibold text-neutral-900">Description</h2>
              <div className="max-w-4xl space-y-4 text-base leading-7 text-neutral-700">
                {descriptionParagraphs.map((paragraph, index) => (
                  <p key={`${product.id}-description-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </main>

          <aside className="w-full shrink-0 rounded-[18px] bg-[#efefef] p-4 md:w-44 lg:w-[230px]">
            <h2 className="mb-5 text-center text-3xl font-semibold text-neutral-900">Bag</h2>

            <div className="flex flex-wrap justify-center gap-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-1.5 shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>

            <Link
              to="/cart"
              className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-[#1a1a1a] px-4 py-2 text-sm font-medium text-white hover:bg-black"
            >
              <span>View Bag</span>
              {cartQuantity > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#34d399] px-1 text-[10px] font-bold text-white">
                  {cartQuantity}
                </span>
              )}
            </Link>
            {cartItems.length > 0 && (
              <button
                type="button"
                onClick={() => dispatch(clearCart())}
                className="mt-3 w-full rounded-lg border border-red-700 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-700 hover:text-white"
              >
                Clear Cart
              </button>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default ItemOverviewPage;
