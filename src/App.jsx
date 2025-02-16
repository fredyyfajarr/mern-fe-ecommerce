import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

// Component
import AboutView from './page/AboutView';
import CartView from './page/CartView';
import HomeView from './page/HomeView';
import OrderView from './page/OrderView';
import ProductView from './page/ProductView';
import PublicLayouts from './Layouts/PublicLayouts';
import DetailProduct from './page/DetailProduct';
import CheckoutView from './page/CheckoutView';
import CreateProductView from './page/CreateProductView';
import EditProductView from './page/EditProductView';
import ProfileView from './page/ProfileView';
import EditProfileView from './page/EditProfileView';
import EditPasswordView from './page/EditPasswordView';

// Loader
import { loader as HomeLoader } from './page/HomeView';
import { loader as ProductLoader } from './page/ProductView';
import { loader as CheckoutLoader } from './page/CheckoutView';
import { loader as OrderLoader } from './page/OrderView';
import { loader as CreateProductLoader } from './page/CreateProductView';
import { loader as EditProductLoader } from './page/EditProductView';
import { loader as ProfileLoader } from './page/ProfileView';
import { loader as EditProfileLoader } from './page/EditProfileView';
import { loader as EditPasswordLoader } from './page/EditPasswordView';

// Action

// Storage
import { store } from './store';

// Error Component
import ErrorView from './page/ErrorView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayouts />,
    errorElement: <ErrorView />,
    children: [
      {
        index: true,
        element: <HomeView />,
        loader: HomeLoader,
      },
      {
        path: 'products',
        element: <ProductView />,
        loader: ProductLoader,
      },
      {
        path: 'product/create',
        element: <CreateProductView />,
        loader: CreateProductLoader(store),
      },
      {
        path: 'product/:id/edit',
        element: <EditProductView />,
        loader: EditProductLoader(store),
      },
      {
        path: 'product/:id',
        element: <DetailProduct />,
      },
      {
        path: 'order',
        element: <OrderView />,
        loader: OrderLoader(store),
      },
      {
        path: 'checkout',
        element: <CheckoutView />,
        loader: CheckoutLoader(store),
      },
      {
        path: 'carts',
        element: <CartView />,
      },
      {
        path: 'abouts',
        element: <AboutView />,
      },
      {
        path: 'profile/:id',
        element: <ProfileView />,
        loader: ProfileLoader(store),
      },
      {
        path: 'profile/:id/edit',
        element: <EditProfileView />,
        loader: EditProfileLoader(store),
      },
      {
        path: 'profile/:id/change-password',
        element: <EditPasswordView />,
        loader: EditPasswordLoader(store),
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
