import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from './Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const { products } = useLoaderData();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="w-full grid lg:grid-cols-2 gap-24 items-center">
        <div data-aos="fade-right" data-aos-delay="200">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            Selamat Datang di FrevanShop
          </h1>
          <p className="mt-8 mx-w-xl text-lg leading-8">
            Dimana kalian bisa mencari sepatu dari brand-brand ternama, ini
            bukan official shop, ini cuman buat testing development
          </p>
          <div className="mt-10">
            <Link to="/products">
              <Button />
            </Link>
          </div>
        </div>
        <div 
          className="hidden lg:carousel rounded-box w-full" 
          data-aos="fade-left" 
          data-aos-delay="400"
        >
          <div className="carousel-item w-full h-[400px]">
            <img
              src="/sepatu1.png"
              className="w-full h-full object-contain animate-fadeIn"
              alt="Sepatu 1"
            />
          </div>
          <div className="carousel-item w-full h-[400px]">
            <img
              src="/sepatu4.png"
              className="w-full h-full object-contain animate-fadeIn"
              alt="Sepatu 2"
            />
          </div>
          <div className="carousel-item w-full h-[400px]">
            <img
              src="/sepatu3.png"
              className="w-full h-full object-contain animate-fadeIn"
              alt="Sepatu 3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
