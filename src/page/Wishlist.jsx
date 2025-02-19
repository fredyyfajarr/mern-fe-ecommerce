import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../features/wishlistSlice';
import { priceFormat } from '../utils';
import { FaTrash, FaShoppingCart, FaHeart, FaArrowLeft } from 'react-icons/fa';
import { addItem } from '../features/cartSlice';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

//* ini gua udah bikin manual lagi cuman gua mau ini itu notif nya di atas, oke ga?, selamat bekerja pajar 🏳️‍🌈
const Wishlist = () => {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const dispatch = useDispatch();
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleRemoveFromWishlist = (productId) => {
    dispatch(removeFromWishlist(productId));
    toast.success('Item removed from wishlist', {
      icon: '💔',
      position: 'bottom-right',
    });
  };

  const handleAddToCart = (product) => {
    const productCart = {
      cartId: product.productId + product.name,
      productId: product.productId,
      image: product.image,
      name: product.name,
      price: product.price,
      amount: 1,
    };
    dispatch(addItem({ product: productCart }));
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  if (wishlistItems.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen flex flex-col items-center justify-center bg-base-200"
      >
        <div className="text-center p-8 bg-base-100 rounded-xl shadow-2xl">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaHeart className="text-7xl text-red-500 mx-auto mb-6" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 text-primary">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8 text-lg">Time to discover your favorite items!</p>
          <Link 
            to="/" 
            className="btn btn-primary btn-lg gap-3 hover:scale-105 transition-transform duration-300"
          >
            <FaArrowLeft /> Explore Products
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-base-200 py-12"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-5xl font-bold text-primary">My Wishlist</h2>
            <p className="text-gray-600 mt-3 text-lg">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
            </p>
          </div>
          <Link 
            to="/" 
            className="btn btn-ghost gap-2 hover:scale-105 transition-transform"
          >
            <FaArrowLeft /> Continue Shopping
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={item.productId}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300"
              onMouseEnter={() => setHoveredItem(item.productId)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <figure className="px-4 pt-4 relative group">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-xl h-56 w-full object-contain transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-primary gap-2 hover:scale-110 transition-transform duration-300"
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </figure>
              <div className="card-body">
                <Link 
                  to={`/product/${item.productId}`}
                  className="card-title text-xl hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </Link>
                <p className="text-accent font-bold text-2xl mt-2">
                  {priceFormat(item.price)}
                </p>
                <div className="card-actions justify-between items-center mt-6">
                  <Link
                    to="/checkout"
                    className="btn btn-primary gap-2 hover:scale-105 transition-all duration-300"
                  >
                    <FaShoppingCart />
                    Buy Now
                  </Link>
                  <button
                    onClick={() => handleRemoveFromWishlist(item.productId)}
                    className="btn btn-ghost btn-circle hover:bg-red-100 hover:text-red-500 transition-all duration-300"
                    title="Remove from Wishlist"
                  >
                    <FaTrash className="text-xl" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Wishlist;