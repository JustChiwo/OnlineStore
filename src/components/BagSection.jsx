import React from "react";

const BagSection = ({
  items = [],
  onRemove,
  onQuantityChange,
  onClear,
  onCheckout,
}) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formatPrice = (price) =>
    `R ${price.toFixed(2)}`;

  return (
    <section className="bag-section">
      <div className="bag-header">
        <h2>Shopping Bag</h2>
        <span>{items.reduce((sum, item) => sum + item.quantity, 0)} items</span>
      </div>

      {items.length === 0 ? (
        <div className="empty-bag">
          <h3>Your bag is empty</h3>
          <p>Add some products to get started.</p>
        </div>
      ) : (
        <>
          <div className="bag-items">
            {items.map((item) => (
              <div className="bag-item" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="bag-item-image"
                />

                <div className="bag-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.variant}</p>

                  {item.color && (
                    <p>Colour: {item.color}</p>
                  )}

                  <strong>{formatPrice(item.price)}</strong>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        onQuantityChange(
                          item.id,
                          item.quantity - 1
                        )
                      }
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        onQuantityChange(
                          item.id,
                          item.quantity + 1
                        )
                      }
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-button"
                  onClick={() => onRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bag-summary">
            <div className="bag-total">
              <span>Total</span>
              <strong>{formatPrice(total)}</strong>
            </div>

            <button
              className="checkout-button"
              onClick={onCheckout}
            >
              Proceed to Checkout
            </button>

            <button
              className="clear-bag-button"
              onClick={onClear}
            >
              Clear Bag
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default BagSection;