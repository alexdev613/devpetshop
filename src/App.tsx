import { createBrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

import { Layout } from './components/Layout';
import { ProductDetails } from './pages/Details';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/carrinho",
        element: <Cart />
      },
      {
        path: "/produto/:id",
        element: <ProductDetails />
      }
    ]
  }
]);

export { router };