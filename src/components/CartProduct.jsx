<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";
import { priceFormat } from "../utils";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import customAPI from "../api";
import { toast } from "react-toastify";
import { useRevalidator } from "react-router-dom";
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { priceFormat } from '../utils';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import customAPI from '../api';
import { toast } from 'react-toastify';
import { useRevalidator } from 'react-router-dom';
>>>>>>> b6020ed (first commit)

const CartProduct = ({ product, user }) => {
  const { revalidate } = useRevalidator();

  const handleDelete = async () => {
    await customAPI.delete(`/product/${product._id}`);
<<<<<<< HEAD
    toast.info("Delete product successfully");
=======
    toast.info('Delete product successfully');
>>>>>>> b6020ed (first commit)
    revalidate();
  };

  const confirmDeleteProduct = () => {
    toast(
      ({ closeToast }) => (
        <div>
          <p>Are you sure you want to delete this product?</p>
          <button
            onClick={() => {
              handleDelete();
              closeToast();
            }}
            className="btn btn-danger"
          >
            Yes
          </button>
          <button onClick={closeToast} className="btn btn-secondary">
            No
          </button>
        </div>
      ),
      { autoClose: false }
    );
  };

  return (
    <>
<<<<<<< HEAD
      <div
        className="card bg-base-300 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        key={product._id}
      >
        <figure className="relative overflow-hidden group aspect-[4/3] flex items-center justify-center bg-white p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-auto h-auto max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
          {product.stock < 1 && (
            <span className="absolute top-2 right-2 bg-error text-white font-bold text-lg px-4 py-1 rounded-full animate-pulse">
              Sold Out!
            </span>
          )}
        </figure>
        <div className="card-body">
          {user && user.role === "owner" && (
            <div className="flex justify-end gap-x-3">
              <FaTrash
                onClick={confirmDeleteProduct}
                className="text-red-500 cursor-pointer hover:text-red-700 transition-colors duration-200 text-xl"
              />
              <Link to={`/product/${product._id}/edit`}>
                <FaPencilAlt className="text-info cursor-pointer hover:text-blue-600 transition-colors duration-200 text-xl" />
              </Link>
            </div>
          )}
          <h2 className="card-title text-primary hover:text-primary-focus transition-colors duration-200">
            {product.name}
          </h2>
          <p className="font-bold text-accent text-xl">
            {priceFormat(product.price)}
          </p>
          <p className="text-gray-600">
            {product.description.substring(0, 50)}...
          </p>
          <div className="card-actions justify-end mt-4">
            <Link
              to={`/product/${product._id}`}
              className="btn btn-primary hover:scale-105 transition-transform duration-200 rounded-full"
            >
=======
      <div className="card bg-base-300 shadow-xl" key={product._id}>
        <figure>
          <div className="relative">
            <img src={product.image} alt={product.name} />
            {product.stock < 1 && (
              <span className="absolute top-0 right-0 bg-error font-bold text-2xl">
                Sold Out!!
              </span>
            )}
          </div>
        </figure>
        <div className="card-body">
          {user && user.role === 'owner' && (
            <div className="flex justify-end gap-x-3">
              <FaTrash
                onClick={confirmDeleteProduct}
                className="text-red-500 cursor-pointer"
              />
              <Link to={`/product/${product._id}/edit`}>
                <FaPencilAlt className="text-info cursor-pointer" />
              </Link>
            </div>
          )}
          <h2 className="card-title text-primary">{product.name}</h2>
          <p className="font-bold text-accent">{priceFormat(product.price)}</p>
          <p>{product.description.substring(0, 50)}</p>
          <div className="card-actions justify-end">
            <Link to={`/product/${product._id}`} className="btn btn-primary">
>>>>>>> b6020ed (first commit)
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
