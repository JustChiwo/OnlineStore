import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddAddressPage() {
const navigate = useNavigate();

const [address, setAddress] = useState(() => {
const savedAddress = sessionStorage.getItem("shippingAddress");

```
return savedAddress
  ? JSON.parse(savedAddress)
  : {
      name: "",
      street: "",
      apartment: "",
      city: "",
      province: "",
      postalCode: "",
      country: "",
      phone: "",
    };
```

});

const handleChange = (event) => {
const { name, value } = event.target;

```
setAddress((previousAddress) => ({
  ...previousAddress,
  [name]: value,
}));
```

};

const handleSubmit = (event) => {
event.preventDefault();

```
sessionStorage.setItem("shippingAddress", JSON.stringify(address));

navigate("/checkout");
```

};

const inputClass =
"w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#6154F0] focus:ring-2 focus:ring-[#6154F0]/20";

const labelClass = "mb-2 block text-sm font-medium text-gray-700";

return ( <main className="min-h-screen bg-[#eeeeee] px-4 py-8 sm:px-8"> <div className="mx-auto max-w-3xl"> <Link
       to="/checkout"
       className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 transition hover:text-[#6154F0]"
     > <span aria-hidden="true">←</span>
Back to Checkout </Link>

```
    <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#6154F0]">
          Delivery Details
        </p>

        <h1 className="text-3xl font-semibold text-gray-900">
          Add Address
        </h1>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Enter your shipping information so we know where to deliver your
          order.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name *
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={address.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="street" className={labelClass}>
            Street Address *
          </label>

          <input
            id="street"
            name="street"
            type="text"
            autoComplete="street-address"
            value={address.street}
            onChange={handleChange}
            placeholder="House number and street name"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="apartment" className={labelClass}>
            Apartment, Suite or Unit
          </label>

          <input
            id="apartment"
            name="apartment"
            type="text"
            value={address.apartment}
            onChange={handleChange}
            placeholder="Optional"
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="city" className={labelClass}>
              City *
            </label>

            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              value={address.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="province" className={labelClass}>
              Province or State *
            </label>

            <input
              id="province"
              name="province"
              type="text"
              autoComplete="address-level1"
              value={address.province}
              onChange={handleChange}
              placeholder="Enter province or state"
              className={inputClass}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="postalCode" className={labelClass}>
              Postal Code *
            </label>

            <input
              id="postalCode"
              name="postalCode"
              type="text"
              autoComplete="postal-code"
              value={address.postalCode}
              onChange={handleChange}
              placeholder="Enter postal code"
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="country" className={labelClass}>
              Country *
            </label>

            <input
              id="country"
              name="country"
              type="text"
              autoComplete="country-name"
              value={address.country}
              onChange={handleChange}
              placeholder="Enter your country"
              className={inputClass}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number *
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={address.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className={inputClass}
            required
          />
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-end">
          <Link
            to="/checkout"
            className="rounded-lg border border-gray-300 px-6 py-3 text-center text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="rounded-lg bg-[#1c211a] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#343a31]"
          >
            Save Address
          </button>
        </div>
      </form>
    </section>
  </div>
</main>

);
}

export default AddAddressPage;
