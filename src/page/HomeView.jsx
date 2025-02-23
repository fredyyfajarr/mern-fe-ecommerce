import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CartProduct from '../components/CartProduct';
import customAPI from '../api';
import { useLoaderData } from 'react-router-dom';
import Hero from '../components/Hero';
import ReviewSlider from '../components/ReviewSlider';

export const loader = async ({ request }) => {
  const { data } = await customAPI.get('/product?limit=3');

  const products = data.data;
  return { products };
};

const HomeView = () => {
  const { products } = useLoaderData();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-aos="fade-up">
        <div className="border-b border-primary pb-5">
          <h2 className="text-3xl font-bold capitalize text-primary">
            Featured Products
          </h2>
          <p className="mt-2 text-base-content/70">
            Discover our handpicked selection just for you
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {products.map((product) => (
            <CartProduct 
              key={product._id} 
              product={product}
              data-aos="fade-up"
            />
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="max-w-7xl rounded-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-base-200" data-aos="fade-up">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold capitalize text-primary">
            Koleksi Kami
          </h2>
          <p className="mt-2 text-base-content/70">
            Lihat beberapa koleksi terbaik kami
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Sports Collection */}
          <div className="relative overflow-hidden aspect-[4/3] rounded-xl group bg-base-100" data-aos="zoom-in">
            <div className="absolute inset-0 bg-gradient-to-t from-neutral to-neutral/50 transition-opacity group-hover:opacity-90"></div>
            <img
              src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2070&auto=format&fit=crop"
              alt="Sports Collection"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-xl brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-transform duration-300 group-hover:translate-y-[-8px]">
              <h3 className="text-white font-bold text-2xl md:text-3xl text-center mb-2">Sports Collection</h3>
              <p className="text-gray-200 text-sm md:text-base text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Performance meets style in our sports lineup
              </p>
            </div>
          </div>

          {/* Running Series */}
          <div className="relative overflow-hidden aspect-[4/3] rounded-xl group bg-base-100" data-aos="zoom-in">
            <div className="absolute inset-0 bg-gradient-to-t from-neutral to-neutral/50 transition-opacity group-hover:opacity-90"></div>
            <img
              src="https://images.unsplash.com/photo-1556278777-a2a98c0d56da?w=600&auto=format&fit=crop"
              alt="Running Series"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-xl brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-transform duration-300 group-hover:translate-y-[-8px]">
              <h3 className="text-white font-bold text-2xl md:text-3xl text-center mb-2">Running Series</h3>
              <p className="text-gray-200 text-sm md:text-base text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Built for speed and comfort
              </p>
            </div>
          </div>

          {/* Lifestyle Collection */}
          <div className="relative overflow-hidden aspect-[4/3] rounded-xl group bg-base-100" data-aos="zoom-in">
            <div className="absolute inset-0 bg-gradient-to-t from-neutral to-neutral/50 transition-opacity group-hover:opacity-90"></div>
            <img
              src="https://images.unsplash.com/photo-1562183241-840b8af0721e?w=600&auto=format&fit=crop"
              alt="Lifestyle Collection"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-xl brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-transform duration-300 group-hover:translate-y-[-8px]">
              <h3 className="text-white font-bold text-2xl md:text-3xl text-center mb-2">Lifestyle Collection</h3>
              <p className="text-gray-200 text-sm md:text-base text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Casual comfort for everyday wear
              </p>
            </div>
          </div>

          {/* Limited Edition */}
          <div className="relative overflow-hidden aspect-[4/3] rounded-xl group bg-base-100" data-aos="zoom-in">
            <div className="absolute inset-0 bg-gradient-to-t from-neutral to-neutral/50 transition-opacity group-hover:opacity-90"></div>
            <img
              src="https://images.unsplash.com/photo-1523212465813-857a9d1a19f4?w=600&auto=format&fit=crop"
              alt="Limited Edition"
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 rounded-xl brightness-50"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 transition-transform duration-300 group-hover:translate-y-[-8px]">
              <h3 className="text-white font-bold text-2xl md:text-3xl text-center mb-2">Limited Edition</h3>
              <p className="text-gray-200 text-sm md:text-base text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Exclusive designs for collectors
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Review Slider Section */}
      <div data-aos="fade-up">
        <ReviewSlider />
      </div>
    </div>
  );
};

export default HomeView;
