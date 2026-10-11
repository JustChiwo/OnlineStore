import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function AddPayment() {
    constnavigate = useNavigate();

    canost [payment, setPayment] = useState(() => {
        const savedPayment = sessionStorage.getItem("paymentMethod");

        return savedPayment
        ? JSON.parse(savedPayment)
        : { 
            cardholderName: "",
            cardNumber: "",
            expiryDate: "",
            cvv: "",
            paymentType: "Credit or Debit Card",

          };
    });

    const handleChange = (event) => {
        const {name, value} = event.target;

        setPayment((previousPayment) => ({
            ...previousPayment,
            [name]: value,
        }));
};
 const handleSubmit = (event) => {
    event.preventDefault();
    const digits = payment.cardNumber.replace(/\D/g,"");

    if (digits.length < 12 || digits.length> 19) {
        alerts("Please enter a valid card number.");
        return;
    }

    const savedPayment ={
        paymentType: payment.paymentType,
        cardholderName: payment.cardholderName,
        lastFourDigits: digits.slice(-4),
        expiryDate: payment.expiryDate,
    };

    //Only save non-sensitive summary details.
    //Never store the full card nuber or CVV.
    sessionStorage.setItem("paymentMethod", JSON.stringify(savedPayment));

        navigate("/checkout");
    };

    const inputClass =
"w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition focus:border-[#6154F0] focus focus:ring-[#6154F0]/20";

const labelClass = "mb-2 block text-sm font-medium text-gray-700";

return (
<main className="min-h-screen bg-[#eeeeee] px-4 py-8 sm:px-8">
<div className="mx-auto max-w-3xl">
<Link to="/checkout" className="mb-6 inline-flex items-center gap-2 text-sm text-gray-600 transition hover:text-[#6154F0]" >
<span aria-hidden="true">←</span>
Back to Checkout
</Link>

    <section className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[#6154F0]">
          Secure Checkout
        </p>

        <h1 className="text-3xl font-semibold text-gray-900">
          Add Payment
        </h1>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Enter your payment details to continue with your order.
        </p>
      </div>

      <div className="mb-8 rounded-xl bg-[#f6f5ff] p-5">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-gray-500">Payment Method</p>
            <p className="mt-1 font-medium text-gray-900">
              Credit or Debit Card
            </p>
          </div>

          <div
            aria-hidden="true"
            className="flex h-12 w-16 items-center justify-center rounded-lg bg-white text-2xl text-[#6154F0] shadow-sm"
          >
            ▰
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="paymentType" className={labelClass}>
            Payment Type *
          </label>

          <select
            id="paymentType"
            name="paymentType"
            value={payment.paymentType}
            onChange={handleChange}
            className={inputClass}
            required
          >
            <option>Credit or Debit Card</option>
            <option>Gift Card</option>
          </select>
        </div>

        <div>
          <label htmlFor="cardholderName" className={labelClass}>
            Cardholder Name *
          </label>

          <input
            id="cardholderName"
            name="cardholderName"
            type="text"
            autoComplete="cc-name"
            value={payment.cardholderName}
            onChange={handleChange}
            placeholder="Name on card"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label htmlFor="cardNumber" className={labelClass}>
            Card Number *
          </label>

          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            value={payment.cardNumber}
            onChange={handleChange}
            placeholder="Enter card number"
            maxLength={23}
            className={inputClass}
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="expiryDate" className={labelClass}>
              Expiry Date *
            </label>

            <input
              id="expiryDate"
              name="expiryDate"
              type="text"
              autoComplete="cc-exp"
              value={payment.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              maxLength={5}
              pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
              title="Enter the expiry date in MM/YY format."
              className={inputClass}
              required
            />
          </div>

          <div>
            <label htmlFor="cvv" className={labelClass}>
              Security Code (CVV) *
            </label>

            <input
              id="cvv"
              name="cvv"
              type="password"
              inputMode="numeric"
              autoComplete="cc-csc"
              value={payment.cvv}
              onChange={handleChange}
              placeholder="3 or 4 digits"
              minLength={3}
              maxLength={4}
              pattern="[0-9]{3,4}"
              className={inputClass}
              required
            />
          </div>
        </div>

        <p className="text-xs leading-5 text-gray-500">
          Demonstration only: this form does not process payments. Do not
          enter real card details.
        </p>

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
            Save Payment Method
          </button>
        </div>
      </form>
    </section>
  </div>
</main>

);
}

export default AddPaymentPage;

