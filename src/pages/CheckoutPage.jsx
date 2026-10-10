import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../slices/CartSlice.js";

function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);

  // Customer details for the initial checkout layout.
  // We will connect these to the Add Address page next.
  const [shippingAddress] = useState({
    name: "John Maker",
    street: "123 Plae Grond Street",
    city: "Vermont",
    province: "California",
    country: "United States of America",
  });

  const [paymentMethod] = useState({
    card: "Mastercard ending in 1252",
    giftCardBalance: 53.21,
  });

  // Get a product's price, supporting common cart data structures.
  const getPrice = (item) =>
    Number(item.price ?? item.salePrice ?? item.product?.price ?? 0);

  const getQuantity = (item) => Number(item.quantity ?? 1);

  const getProductName = (item) =>
    item.name ?? item.title ?? item.product?.name ?? "Product";

  const getProductImage = (item) =>
    item.image ?? item.thumbnail ?? item.product?.image ?? "";

  const getProductDescription = (item) =>
    item.description ?? item.product?.description ?? "";

  const getProductColor = (item) =>
    item.color ?? item.selectedColor ?? item.product?.color ?? "";

  const subtotal = cartItems.reduce(
    (total, item) => total + getPrice(item) * getQuantity(item),
    0
  );

  // These rates are initial examples based on the reference design.
  const shipping = cartItems.length > 0 ? 6.99 : 0;
  const estimatedGST = subtotal * 0.13;

  const giftCardBalance = paymentMethod.giftCardBalance;
  const giftCardApplied = Math.min(giftCardBalance, subtotal + shipping + estimatedGST);

  const orderTotal = Math.max(
    0,
    subtotal + shipping + estimatedGST - giftCardApplied
  );

  const formatCurrency = (amount) =>
    `$${amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add a product before placing an order.");
      return;
    }

    // Payment processing will not be implemented.
    // This is a front-end demonstration of the checkout flow.
    navigate("/order-success");
  };

  return (
    <main className="min-h-screen bg-[#eeeeee] px-4 py-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-5 text-2xl font-semibold text-gray-500">
          Checkout
        </h1>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(260px,0.8fr)]">
          {/* LEFT SIDE: CHECKOUT DETAILS */}
          <div className="space-y-5">
            {/* SHIPPING ADDRESS */}
            <section className="rounded-xl bg-white p-5 sm:p-7">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl font-medium tracking-[0.2em] text-[#20251e] sm:text-2xl">
                  SHIPPING ADDRESS
                </h2>

                <Link
                  to="/add-address"
                  className="rounded-lg border border-gray-400 px-5 py-2 text-sm text-gray-700 transition hover:bg-gray-100"
                >
                  Change
                </Link>
              </div>

              <div className="space-y-1 text-sm leading-6 text-gray-800">
                <p>{shippingAddress.name}</p>
                <p>{shippingAddress.street}</p>
                <p>
                  {shippingAddress.city}, {shippingAddress.province}
                </p>
                <p>{shippingAddress.country}</p>
              </div>
            </section>

            {/* PAYMENT METHOD */}
            <section className="rounded-xl bg-white p-5 sm:p-7">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
                <h2 className="text-xl font-medium tracking-[0.2em] text-[#20251e] sm:text-2xl">
                  PAYMENT METHOD
                </h2>

                <Link
                  to="/add-payment"
                  className="rounded-lg border border-gray-400 px-5 py-2 text-sm text-gray-700 transition hover:bg-gray-100"
                >
                  Change
                </Link>
              </div>

              <div className="space-y-4 text-sm text-gray-800">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="text-lg">
                    ▰
                  </span>
                  <span>{paymentMethod.card}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="text-lg">
                    ▦
                  </span>
                  <span>
                    {formatCurrency(giftCardBalance)} gift card balance
                  </span>
                </div>

                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={billingSameAsShipping}
                    onChange={(event) =>
                      setBillingSameAsShipping(event.target.checked)
                    }
                    className="h-4 w-4 accent-emerald-600"
                  />

                  <span>Billing address same as Shipping Address</span>
                </label>
              </div>
            </section>

            {/* REVIEW YOUR BAG */}
            <section className="rounded-xl bg-white p-5 sm:p-7">
              <h2 className="mb-7 text-xl font-medium tracking-[0.2em] text-[#20251e] sm:text-2xl">
                REVIEW YOUR BAG
              </h2>

              {cartItems.length === 0 ? (
                <div className="py-8 text-center">
                  <p className="mb-4 text-gray-500">
                    Your shopping bag is empty.
                  </p>

                  <Link
                    to="/"
                    className="inline-block rounded-lg bg-[#1c211a] px-6 py-3 text-sm text-white transition hover:bg-gray-700"
                  >
                    Continue Shopping
                  </Link>
                </div>
              ) : (
                <div>
                  {cartItems.map((item, index) => {
                    const productName = getProductName(item);
                    const productImage = getProductImage(item);
                    const quantity = getQuantity(item);
                    const price = getPrice(item);

                    return (
                      <div
                        key={item.id ?? item.productId ?? index}
                        className={`grid grid-cols-1 gap-5 py-6 sm:grid-cols-[150px_minmax(0,1fr)] ${
                          index !== 0 ? "border-t border-gray-300" : ""
                        }`}
                      >
                        {/* PRODUCT IMAGE */}
                        <div className="flex items-center justify-center">
                          {productImage ? (
                            <img
                              src={productImage}
                              alt={productName}
                              className="h-32 w-full max-w-[150px] object-contain"
                            />
                          ) : (
                            <div className="flex h-32 w-full max-w-[150px] items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-400">
                              No image
                            </div>
                          )}
                        </div>

                        {/* PRODUCT DETAILS */}
                        <div className="min-w-0">
                          <h3 className="text-xl font-medium text-gray-800">
                            {productName}
                          </h3>

                          {getProductColor(item) && (
                            <p className="mt-1 text-sm text-gray-500">
                              {getProductColor(item)}
                            </p>
                          )}

                          {getProductDescription(item) && (
                            <p className="mt-3 text-sm leading-6 text-gray-600">
                              {getProductDescription(item)}
                            </p>
                          )}

                          <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                            <p className="font-medium text-gray-800">
                              {formatCurrency(price)} × {quantity}
                            </p>

                            <div className="flex items-center gap-4">
                              <button
                                type="button"
                                onClick={() => {
                                  if (quantity > 1) {
                                    dispatch(
                                      decrease_quantity(
                                        item.id ?? item.productId
                                      )
                                    );
                                  } else {
                                    dispatch(
                                      remove_from_cart(
                                        item.id ?? item.productId
                                      )
                                    );
                                  }
                                }}
                                aria-label={`Decrease quantity of ${productName}`}
                                className="text-xl font-semibold text-red-500 transition hover:text-red-700"
                              >
                                −
                              </button>

                              <span className="min-w-4 text-center text-sm">
                                {quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(
                                    increase_quantity(
                                      item.id ?? item.productId
                                    )
                                  )
                                }
                                aria-label={`Increase quantity of ${productName}`}
                                className="text-xl font-semibold text-emerald-500 transition hover:text-emerald-700"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          </div>

          {/* RIGHT SIDE: ORDER SUMMARY */}
          <aside className="rounded-xl bg-white p-5 sm:p-6 lg:sticky lg:top-6">
            <h2 className="mb-5 text-xl font-semibold text-gray-900">
              Order Summary
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-600">Items:</span>
                <span className="font-medium text-gray-700">
                  {formatCurrency(subtotal)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-medium text-gray-700">
                  {formatCurrency(shipping)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-600">Estimated GST:</span>
                <span className="font-medium text-gray-700">
                  {formatCurrency(estimatedGST)}
                </span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-gray-600">Gift Card:</span>
                <span className="font-medium text-gray-700">
                  -{formatCurrency(giftCardApplied)}
                </span>
              </div>
            </div>

            <div className="my-5 border-t border-gray-300" />

            <div className="flex items-start justify-between gap-3 text-lg font-semibold text-red-500">
              <span>Order Total:</span>
              <span className="text-right">{formatCurrency(orderTotal)}</span>
            </div>

            <button
              type="button"
              onClick={handlePlaceOrder}
              disabled={cartItems.length === 0}
              className="mt-6 w-full rounded-lg bg-[#1c211a] px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Place Your Order
            </button>

            <Link
              to="/cart"
              className="mt-5 flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-100"
            >
              <span aria-hidden="true">←</span>
              Back
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default CheckoutPage;