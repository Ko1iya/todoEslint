import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
// import { Suspense } from 'react';
import App from './components/App/App';

import ErrorPage from './errorPage';
// import LazyAbout from './pages/About/About.lazy';
// import LazyShop from '@/pages/Shop/Shop.lazy';
import Shop from './pages/Shop/Shop';

const router = createHashRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'about',
          element: <Shop />,
        },
        // {
        //   path: '/shop',
        //   element: (
        //     <Suspense fallback="Loading...">
        //       <LazyShop />
        //     </Suspense>
        //   ),
        // },
      ],
      errorElement: <ErrorPage />,
    },
  ],
  // { basename: '/build' },
);

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(<RouterProvider router={router} />);
