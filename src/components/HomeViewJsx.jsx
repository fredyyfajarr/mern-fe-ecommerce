import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from './Button';

const Hero = () => {
  const { products } = useLoaderData();
  return (
    <div className="relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      ></div>

      {/* Content */}
      <div className="bg-transparent relative z-10 px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl text-white">
              Selamat Datang di FrevanShop
            </h1>
            <p className="mt-8 mx-w-xl text-lg leading-8 text-gray-200">
              Dimana kalian bisa mencari sepatu dari brand-brand ternama, ini
              bukan official shop, ini cuman buat testing development
            </p>
            <div className="mt-10">
              <Link to="/products">
                <Button />
              </Link>
            </div>
          </div>
          <div className="hidden lg:carousel rounded-box w-full">
            {products.map((item) => (
              <div className="carousel-item w-full" key={item._id}>
                <img 
                  src={item.image} 
                  className="w-full rounded-lg shadow-xl" 
                  alt="Product Carousel" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
