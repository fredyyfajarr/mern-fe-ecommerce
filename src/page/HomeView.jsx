import CartProduct from '../components/CartProduct';
import customAPI from '../api';
import { useLoaderData } from 'react-router-dom';
import Hero from '../components/Hero';

export const loader = async ({ request }) => {
  const { data } = await customAPI.get('/product?limit=3');

  const products = data.data;
  return { products };
};

const HomeView = () => {
  const { products } = useLoaderData();
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="border-b border-primary pb-5">
          <h2 className="text-3xl font-bold capitalize text-primary">
            Featured Products
          </h2>
          <p className="mt-2 text-gray-600">
            Discover our handpicked selection just for you
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {products.map((product) => (
<<<<<<< HEAD
            <div className="transform transition duration-300 hover:scale-105">
              <CartProduct product={product} key={product._id} />
=======
            <div
              className="transform transition duration-300 hover:scale-105"
              key={product._id}
            >
              <CartProduct product={product} />
>>>>>>> b41cbea (update profile pages)
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
