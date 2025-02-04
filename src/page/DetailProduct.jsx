import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import customAPI from '../api';
import { FaPlus } from 'react-icons/fa';
import { generateSelectAmount, priceFormat } from '../utils/';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';

const DetailProduct = () => {
  let { id } = useParams();
  const [product, setProduct] = useState('');
  const [amount, setAmount] = useState(1);

  // store
  const dispatch = useDispatch();

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const productCart = {
    cartId: product._id + product.name,
    productId: product._id,
    image: product.image,
    name: product.name,
    price: product.price,
    stock: product.stock,
    amount,
  };

  const handleCart = () => {
    dispatch(addItem({ product: productCart }));
  };

  const productData = async () => {
    const { data } = await customAPI.get(`/product/${id}`);
    setProduct(data.product);
  };

  useEffect(() => {
    productData();
  }, []);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="card lg:card-side bg-base-300 shadow-xl rounded-xl overflow-hidden">
        <figure className="lg:w-1/2">
          <div className="relative w-full h-[300px] lg:h-[600px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            {product.stock < 1 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="bg-error px-6 py-3 rounded-lg font-bold text-2xl lg:text-4xl text-white transform -rotate-12 shadow-lg">
                  Sold Out!!
                </span>
              </div>
            )}
          </div>
        </figure>

        <div className="card-body lg:w-1/2 p-6 lg:p-8">
          <div className="space-y-4">
            <h2 className="card-title text-2xl lg:text-3xl font-bold">
              {product.name}
            </h2>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-2xl lg:text-4xl text-accent font-bold">
                {priceFormat(product.price)}
              </span>
              <div className="badge badge-primary badge-lg">
                {product.category}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold">Stok Tersedia:</span>
              <span
                className={`font-bold ${
                  product.stock < 5 ? 'text-error' : 'text-success'
                }`}
              >
                {product.stock}
              </span>
            </div>

            <div className="divider"></div>

            <div className="prose max-w-none">
              <h3 className="font-bold mb-2">Deskripsi Produk:</h3>
              <p className="text-base-content/80">{product.description}</p>
            </div>

            {product.stock > 0 && (
              <div className="space-y-4 mt-6">
                <label className="form-control w-full max-w-xs">
                  <span className="label-text font-semibold mb-2">
                    Jumlah Pembelian
                  </span>
                  <select
                    name="amount"
                    className="select select-bordered w-full"
                    onChange={handleAmount}
                  >
                    {generateSelectAmount(product.stock)}
                  </select>
                </label>

                <button
                  className="btn btn-primary btn-block lg:btn-wide hover:scale-105 transition-transform duration-200"
                  onClick={handleCart}
                >
                  <FaPlus className="mr-2" />
                  Tambah ke Keranjang
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProduct;
