import { useSelector } from 'react-redux';
import { priceFormat } from '../utils';
import { motion } from 'framer-motion';

const CartTotal = () => {
  const { cartTotal, numItemsInCart } = useSelector((state) => state.cartState);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-4 md:p-6"
    >
      <div className="space-y-3 md:space-y-4">
        {/* Subtotal */}
        <div className="flex justify-between items-center pb-2 md:pb-3 border-b border-gray-200">
          <span className="text-sm md:text-base text-gray-600">
            Subtotal <br /> ({numItemsInCart} items)
          </span>
          <span className="text-sm md:text-base font-medium">
            {priceFormat(cartTotal)}
          </span>
        </div>

        {/* Shipping Estimate */}
        <div className="flex justify-between items-center pb-2 md:pb-3 border-b border-gray-200">
          <span className="text-sm md:text-base text-gray-600">
            Shipping Estimate
          </span>
          <span className="text-sm md:text-base font-medium text-primary">
            FREE
          </span>
        </div>

        {/* Total */}
        <motion.div 
          className="flex justify-between items-center pt-1 md:pt-2"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.01 }}
        >
          <span className="text-base md:text-lg font-bold">Total</span>
          <span className="text-lg md:text-xl font-bold text-primary">
            {priceFormat(cartTotal)}
          </span>
        </motion.div>

        {/* Tax Note */}
        <p className="text-[10px] md:text-xs text-gray-500 mt-2 md:mt-4">
          * Tax will be calculated at checkout
        </p>
      </div>
    </motion.div>
  );
};

export default CartTotal;
