import { createSlice } from '@reduxjs/toolkit';

const getLocalWishlist = () => {
  return JSON.parse(localStorage.getItem('wishlist')) || [];
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: getLocalWishlist(),
  },
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.items.find(
        item => item.productId === action.payload.productId
      );
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem('wishlist', JSON.stringify(state.items));
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(
        item => item.productId !== action.payload
      );
      localStorage.setItem('wishlist', JSON.stringify(state.items));
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;