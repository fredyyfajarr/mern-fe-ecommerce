cartRoutes.js =

const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const auth = require('../middleware/auth');

// Add to cart
router.post('/add', auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId, quantity }]
      });
    } else {
      const existingItem = cart.items.find(
        item => item.productId.toString() === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error('Cart error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

================================

cart.js =

const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const auth = require('../middleware/auth');

// Add to cart
router.post('/add', auth, async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({
        userId,
        items: [{ productId, quantity }]
      });
    } else {
      const existingItem = cart.items.find(
        item => item.productId.toString() === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error('Cart error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

===============================

server.js =

const cartRoutes = require('./routes/cartRoutes');
app.use('/api/cart', cartRoutes);

=====================================

CardProduct.jsx =

const CartProduct = ({ product, user }) => {
  const { revalidate } = useRevalidator();
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    try {
      // Pastikan user sudah login
      if (!localStorage.getItem('token')) {
        toast.error('Please login first');
        return;
      }

      const response = await customAPI.post('/cart/add', {
        productId: product._id,
        quantity: 1
      });
      
      if (response.data) {
        addToCart({
          ...product,
          quantity: 1
        });
        toast.success('Added to cart successfully!');
      }
    } catch (error) {
      console.error('Cart error:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'Failed to add to cart');
    }
  };

};