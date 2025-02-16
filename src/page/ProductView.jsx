import React, { useState } from 'react';
import customAPI from '../api';
import { Link, useLoaderData } from 'react-router-dom';
import Filter from '../components/Filter';
import CartProduct from '../components/CartProduct';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const { data } = await customAPI.get('/product', { params: params });

  // console.log(params);
  const products = data.data;
  // console.log(products);
  const pagination = data.pagination;

  return { products, params, pagination };
};

const ProductView = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const user = useSelector((state) => state.userState.user);
  const { products, pagination } = useLoaderData();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-lg p-4 md:p-8 mb-8 animate-gradient-x shadow-lg">
        <div className="flex flex-col  md:flex-row justify-between items-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4 md:mb-0 animate-fade-in w-full">
            Discover <br /> Our Products
            <span className="block text-sm md:text-lg font-normal text-gray-600 mt-2">
              Find the perfect item that suits your needs
            </span>
          </h1>
          
          {/* Mobile Filter Toggle Button */}
          <button 
            className="md:hidden btn btn-primary w-full mb-4"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
              />
            </svg>
            {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>

        {/* Filter Component with responsive visibility */}
        <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block`}>
          <Filter />
        </div>
      </div>

      {user && user.role === 'owner' && (
        <div className="flex justify-end mb-6">
          <Link
            to="/product/create"
            className="btn btn-secondary hover:scale-105 hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:rotate-90 transition-transform duration-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add Product
          </Link>
        </div>
      )}

      <div className="bg-base-200 backdrop-blur-sm bg-opacity-80 rounded-lg p-4 mb-6 shadow-md hover:shadow-lg transition-shadow duration-300 w-fit mx-auto">
        <h3 className="text-xl text-primary font-bold flex items-center gap-2">
          <span>Total Products:</span>
          <span className="text-secondary text-2xl animate-pulse">
            {pagination.totalProduct}
          </span>
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto">
        {!products.length ? (
          <div className="col-span-full flex flex-col items-center justify-center py-16 bg-base-200 rounded-lg shadow-inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-gray-400 mb-4 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01"
              />
            </svg>
            <h1 className="text-3xl font-bold text-gray-600 mb-2">
              Oops! Product not Found!
            </h1>
            <p className="text-gray-500 text-center max-w-md">
              We couldn't find any products matching your criteria. Try
              adjusting your search or filter options.
            </p>
          </div>
        ) : (
          products.map((product) => (
            <CartProduct 
              key={product._id} 
              product={product} 
              user={user}
              className="transform hover:scale-105 hover:shadow-xl transition-all duration-300 rounded-lg bg-base-100" 
            />
          ))
        )}
      </div>

      <div className="mt-12 flex justify-center">
        <div className="p-4 rounded-lg bg-base-200 shadow-md">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
