import { useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { increase_quantity, decrease_quantity} from '../slices/CartSlice.jsx';
import plusIcon from '../assets/plus.svg';
import minusIcon from '../assets/minus.svg';
import bagIcon from '../assets/bagHandle.svg';
import starHalfIcon from '../assets/starHalf.svg';
import starOutlineIcon from '../assets/starOutline.svg';

function Stars({ rating = 0 }) {
  return (
    <div className='flex items-center gap-0.5'>
      {[1, 2, 3, 4, 5].map((n) =>{
        if (rating >= n)
          return <FaStar key={n} size={12} className="text-emerald-700" />;
        if (rating >=n - 0.5)
          return <img key={n} src={starHalfIcon} alt="" className='h-3 w-3' />;
        return <img key={n} src={starOutlineIcon} alt="" className='h-3 w-4' />
      }
      )}
      <span className='ml-2 text-xs text-neutral-600'>{rating} / 5</span>
    </div>
  );
}

function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price *  item.quantity, 0);


  return (
    <div className='flex min-h-screen bg-neutral-100'>
      <main className='flex-1 px-10 py-8'>
        <h1 className='mb-6 text-3xl font-normal text-neutral-900'>Check your Bag Items</h1>
        {items.length === 0 ? (<p className='text-neutral-500'> Your bag is empty. Add a product to see it here.</p>) :(
        <div className='flex flex-col gap-5'>
          {items.map((item) => (
            <div key={item.id} className='flex items-center gap-8 rounded-2xl bg-white px-8 py-6'>
              <div className='flex h-36 w-40 shrink-0 items-center justify-center'>
                <img src={item.image} alt={item.name} className='max-h-full max-w-full object-contain' />
              </div>
            

        <div className='flex flex-1 flex-col gap-1.5'>
          <h3 className='text-xl text-neutral-900'>{item.name}</h3>
          <p className='text-sm text-neutral-500'>{item.color}</p>
          <p className='text-sm text-neutral-800'>{item.description}</p>
          <Stars rating={item.rating} />
          <div className='mt-3 flex items-center justify-between'>
            <p className='text-sm text-neutral-800'>$ {item.price}
            <span className='mx-1'>X</span>{" "} {item.quantity}</p>
            <div className='flex items-center gap-4'>
              <button onClick={() => dispatch(decrease_quantity(item))}
             aria-label='Decrease quantity'>
              <img src={minusIcon} alt="" className='h-3.5 w-3.5'></img>
             </button>
             <span className='w-4 text-center text-sm'>
              {item.quantity}
             </span>
             <button onClick={() => dispatch(increase_quantity(item))}
             aria-label='Increase quantity'>
              <img src={plusIcon} alt="" className='h-3.5 w-3.5' />
             </button>
            </div>
          </div>
        </div>
        </div>
        ))}
        </div> 
        )}
      </main>

      <div className='my-8 w-72 shrink-0 border-l-2 border-neutral-400 px-6'>
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

        <div className='mt-4 flex justify-center'>
          <Link to='/checkout' className='flex items-center gap-2 rounded-lg bg-black px-4 py-1.5 text-xs text-white hover:bg-neutral-800'>
          <img src={bagIcon} alt="" className='h-3 w-3' />
          Checkout
          </Link>
        </div>
    </div>
    </div>
  );
}

export default CartPage;
