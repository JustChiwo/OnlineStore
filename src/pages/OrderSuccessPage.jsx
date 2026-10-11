import { Link, useAsyncValue } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/cartSlice.js";
import { useEffect, useRef } from "react";

function OrderSuccessPage() {
const dispatch = useDispatch();
const cartItems = useSelector((state) => state.cart.items);
const orderProcessed = useRef(false);

useEffect(() => {
if (!orderProcessed.current) {
orderProcessed.current = true;

```
  if (cartItems.length > 0) {
    dispatch(clearCart());
  }

  sessionStorage.removeItem("shippingAddress");
  sessionStorage.removeItem("paymentMethod");
}
```

}, [cartItems.length, dispatch]);

return ( <main className="flex min-h-screen items-center justify-center bg-[#eeeeee] px-4 py-10"> <section className="w-full max-w-xl rounded-2xl bg-white px-6 py-12 text-center shadow-sm sm:px-12"> <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100"> <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2.5"
         className="h-12 w-12 text-green-600"
         aria-hidden="true"
       > <path
           strokeLinecap="round"
           strokeLinejoin="round"
           d="m5 12 4 4L19 6"
         /> </svg> </div>

```
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
      Order Confirmed
    </p>

    <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
      Thank You for Your Order!
    </h1>

    <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
      Your order has been placed successfully in this demonstration. We
      appreciate your purchase and hope you enjoy your items.
    </p>

    <div className="my-8 rounded-xl bg-[#f7f7f7] p-5">
      <p className="text-sm text-gray-500">Order Status</p>
      <p className="mt-2 text-lg font-semibold text-green-600">
        Successful
      </p>
    </div>

    <div className="flex flex-col justify-center gap-3 sm:flex-row">
      <Link
        to="/products"
        className="rounded-lg bg-[#1c211a] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#343a31]"
      >
        Continue Shopping
      </Link>

      <Link
        to="/"
        className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
      >
        Back to Home
      </Link>
    </div>
  </section>
</main>

);
}

export default OrderSuccessPage;

