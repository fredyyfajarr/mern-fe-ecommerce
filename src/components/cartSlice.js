import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customAPI from '../api';

const defaultValue = {
  CartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  userId: null,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || defaultValue;
};

// Thunk untuk mengambil cart dari backend
export const fetchCartFromBackend = createAsyncThunk(
  'cart/fetchCartFromBackend',
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().userState.user?.token;
      if (!user || !user.token) {
        console.log('User belum login, tidak fetch cart');
        return []; // Jangan fetch data jika user belum login
      }
      const response = await customAPI.get('cart', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Error fetching cart');
    }
  }
);

export const removeCartItemFromBackend = createAsyncThunk(
  'cart/removeCartItem',
  async (productId, { rejectWithValue }) => {
    try {
      await customAPI.delete(`/cart/${productId}`);
      return productId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.CartItems.find((i) => i.cartId === product.cartId);

      if (item) {
        item.amount += product.amount;
      } else {
        state.CartItems.push(product);
      }

      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;

      localStorage.setItem('cart', JSON.stringify(state));
      toast.success('Success adding product to Cart');
    },
    editItem: (state, action) => {
      const { cartId, amount } = action.payload;
      const itemProduct = state.CartItems.find(
        (item) => item.cartId === cartId
      );

      if (!itemProduct) return;

      state.numItemsInCart += amount - itemProduct.amount;
      state.cartTotal += itemProduct.price * (amount - itemProduct.amount);
      itemProduct.amount = amount;

      localStorage.setItem('cart', JSON.stringify(state));
      toast.info('Cart item updated');
    },
    clearCartItem: (state) => {
      localStorage.removeItem('cart');
      return defaultValue;
    },
    removeItem: (state, action) => {
      const { cartId } = action.payload;
      const itemProduct = state.CartItems.find(
        (item) => item.cartId === cartId
      );

      if (!itemProduct) return;

      state.CartItems = state.CartItems.filter(
        (item) => item.cartId !== cartId
      );
      state.numItemsInCart -= itemProduct.amount;
      state.cartTotal -= itemProduct.price * itemProduct.amount;

      localStorage.setItem('cart', JSON.stringify(state));
      toast.success('Cart item deleted');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartFromBackend.fulfilled, (state, action) => {
      const backendCart = action.payload;
      if (!backendCart?.items) return;

      state.userId = backendCart.user;
      state.CartItems = backendCart.items.map((item) => ({
        cartId: item._id, // Gunakan ID dari backend
        productId: item.product?._id || null,
        name: item.product?.name || 'Unknown', // ✅ Pastikan nama diambil
        image: item.product?.image || '', // ✅ Pastikan gambar diambil
        price: item.price,
        amount: item.quantity, // ✅ Gunakan quantity yang benar
        stock: item.product?.stock || 1,
      }));

      state.numItemsInCart = backendCart.items.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.cartTotal = backendCart.totalPrice;

      localStorage.setItem('cart', JSON.stringify(state));
    }),
      builder.addCase(removeCartItemFromBackend.fulfilled, (state, action) => {
        state.CartItems = state.CartItems.filter(
          (item) => item.cartId !== action.payload // Hapus berdasarkan `cartId`
        );

        // Perbarui jumlah item dan total harga setelah penghapusan
        state.numItemsInCart = state.CartItems.reduce(
          (acc, item) => acc + item.amount,
          0
        );
        state.cartTotal = state.CartItems.reduce(
          (acc, item) => acc + item.price * item.amount,
          0
        );

        localStorage.setItem('cart', JSON.stringify(state));
      });
  },
});

export const { addItem, editItem, removeItem, clearCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;
