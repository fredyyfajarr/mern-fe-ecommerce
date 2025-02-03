import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Hero = () => {
  const { products } = useLoaderData();
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            Selamat Datang di IsaacShop
          </h1>
          <p className="mt-8 mx-w-xl text-lg leading-8">
            Dimana kalian bisa mencari sepatu dari brand-brand ternama, ini
            bukan official shop, ini cuman buat testing development
          </p>
          <div className="mt-10">
            <Link to="/products" className="btn btn-primary">
              Product Us
            </Link>
          </div>
        </div>
        <div className="hidden lg:carousel carousel-center bg-neutral rounded-box space-x-4 p-4">
          {products.map((item) => (
            <div className="carousel-item" key={item._id}>
              <img src={item.image} className="rounded-box" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
