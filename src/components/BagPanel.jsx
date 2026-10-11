import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../store/cartSlice.js";
import "../pages/ProductPage.css";

function BagPanel() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const cartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <aside className="bag-panel" aria-label="Shopping bag">
      <h1 className="bag-title">Bag</h1>
      <div className="bag-items">
        {cartItems.map((item) => (
          <div className="bag-thumbnail" key={item.id}>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
      <Link to="/cart" className="view-bag-button">
        <span>View Bag</span>
        {cartQuantity > 0 && (
          <span className="bag-count" aria-label={`${cartQuantity} items`}>
            {cartQuantity}
          </span>
        )}
      </Link>
      {cartItems.length > 0 && (
        <button
          type="button"
          onClick={() => dispatch(clearCart())}
          className="mt-3 w-full rounded-lg border border-red-700 px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-700 hover:text-white"
        >
          Clear Cart
        </button>
      )}
    </aside>
  );
}

export default BagPanel;
