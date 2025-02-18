import { generateSelectAmount, priceFormat } from '../utils';
import { FaTrash } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { editItem, removeItem } from '../features/cartSlice';
import { motion } from 'framer-motion';

const CartListItems = ({ cartItem }) => {
  const { cartId, name, price, image, amount, stock } = cartItem;
  const dispatch = useDispatch();

  const handleAmount = (e) => {
    dispatch(editItem({ cartId, amount: parseInt(e.target.value) }));
  };

  const removeProductItem = () => {
    dispatch(removeItem({ cartId }));
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="mb-8 p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 border-b border-gray-200"
      key={cartId}
    >
      {/* Image Container */}
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="w-full md:w-auto flex justify-center"
      >
        <img
          src={image}
          alt={name}
          className="w-56 h-56 md:w-48 md:h-48 rounded-lg object-cover"
        />
      </motion.div>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 flex-1">
        <div className=" md:text-left">
          <h2 className="text-xl md:text-2xl font-bold capitalize mb-2">{name}</h2>
          <p className="text-gray-600 mb-2">Quantity: {amount}</p>
          <p className="text-2xl font-bold text-primary">{priceFormat(price)}</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-3 md:ml-auto">
          <select
            name="amount"
            className="select select-bordered w-32 text-center"
            value={amount}
            onChange={handleAmount}
          >
            {generateSelectAmount(stock)}
          </select>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-error btn-sm w-32 flex items-center gap-2 text-white"
            onClick={removeProductItem}
          >
            <FaTrash className="w-4 h-4" />
            <span>Remove</span>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
};

export default CartListItems;
