import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Component
import AboutView from './page/AboutView';
import CartView from './page/CartView';
import HomeView from './page/HomeView';
import OrderView from './page/OrderView';
import ProductView from './page/ProductView';
import LoginView from './page/auth/LoginView';
import RegisterView from './page/auth/RegisterView';
import PublicLayouts from './Layouts/PublicLayouts';
import DetailProduct from './page/DetailProduct';
import CheckoutView from './page/CheckoutView';
import CreateProductView from './page/CreateProductView';
import EditProductView from './page/EditProductView';

// Loader
import { loader as HomeLoader } from './page/HomeView';
import { loader as ProductLoader } from './page/ProductView';
import { loader as CheckoutLoader } from './page/CheckoutView';
import { loader as OrderLoader } from './page/OrderView';
import { loader as CreateProductLoader } from './page/CreateProductView';
import { loader as EditProductLoader } from './page/EditProductView';

// Action
import { action as LoginAction } from './page/auth/LoginView';
import { action as RegisterAction } from './page/auth/RegisterView';

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
    ],
  },
  {
    path: '/login',
    element: <LoginView />,
    action: LoginAction(store),
  },
  {
    path: '/register',
    element: <RegisterView />,
    action: RegisterAction(store),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
