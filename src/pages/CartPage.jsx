import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../store/cartSlice.js'
import Sidebar from '../components/SideBar.jsx'

function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='flex min-h-screen bg-neutral-100 pl-20 pr-6'>
      <Sidebar />
      <main className='min-w-0 flex-1 px-6 py-8 lg:px-10'>
        <h1 className='mb-6 text-3xl font-normal text-neutral-900'>Check your Bag Items</h1>
        {items.length === 0 ? (
          <p className='text-neutral-500'>Your bag is empty. Add a product to see it here.</p>
        ) : (
        <div className='flex flex-col gap-5'>
          {items.map((item) => (
            <div key={item.id} className='flex items-center gap-8 rounded-2xl bg-white px-8 py-6'>
              <div className='flex h-36 w-40 shrink-0 items-center justify-center'>
                <img src={item.image} alt={item.name} className='max-h-full max-w-full object-contain' />
              </div>

              <div className='flex min-w-0 flex-1 flex-col gap-1.5'>
                <h2 className='text-xl text-neutral-900'>{item.name}</h2>
                <p className='text-sm text-neutral-500'>{item.color || item.subtitle}</p>
                <p className='text-sm text-neutral-800'>{item.description}</p>
                <div className='mt-3 flex items-center justify-between gap-4'>
                  <p className='text-sm text-neutral-800'>
                    $ {item.price.toFixed(2)} × {item.quantity}
                  </p>
                  <div className='flex items-center gap-4'>
                    <button
                      type='button'
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>
                    <span className='w-4 text-center text-sm'>{item.quantity}</span>
                    <button
                      type='button'
                      onClick={() => dispatch(increaseQuantity(item.id))}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                    <button
                      type='button'
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className='text-sm text-red-700'
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </main>

      <aside className='my-8 ml-4 w-72 shrink-0 border-l-2 border-neutral-400 px-6'>
        <h2 className='mb-5 text-center text-2xl font-normal text-neutral-900'>Bag</h2>
        <div className='flex flex-wrap justify-center gap-3'> {items.map((item) => (
          <div key={item.id} className='flex h-14 w-14 items-center justify-center rounded-lg bg-white p-1.5'>
            <img src={item.image} alt={item.name} className='max-h-full max-w-full object-contain' />
            </div>
          ))}
        </div>

        <p className='mt-6 text-center text-xs text-neutral-800'>Bag Total:
          <span className='ml-2'>$ {total.toFixed(2)}</span>
        </p>

        {items.length > 0 && (
          <div className='mt-4 flex flex-col items-center gap-3'>
            <Link to='/checkout' className='rounded-lg bg-black px-4 py-2 text-xs text-white hover:bg-neutral-800'>
              Checkout
            </Link>
            <button
              type='button'
              onClick={() => dispatch(clearCart())}
              className='text-xs text-red-700 underline'
            >
              Clear bag
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

export default CartPage;
