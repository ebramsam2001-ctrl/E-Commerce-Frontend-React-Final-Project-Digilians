import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

//    Correct imports – paths match your actual folder structure    //
// ✅ Folder: src/components/masterLayout → File: MasterLayout.jsx //
// ✅ Folder: src/components/home        → File: Home.jsx         //
// ✅ Folder: src/components/notFound    → File: NotFound.jsx     //
// ✅ Folder: src/components/products    → Files: Products.jsx / SingleProduct.jsx //
// ✅ Folder: src/components/shop        → File: Shop.jsx         //
// ✅ Folder: src/components/myAccount.jsx → File: MyAccount.jsx  //

import MasterLayout from './components/masterLayout/MasterLayout';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound';
import Shop from './components/shop/Shop';
import MyAccount from './components/myAccount.jsx/MyAccount';
import Products from './components/products/Products';
import SingleProduct from './components/products/SingleProduct';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <MasterLayout />,
      children: [
        { element: <Home />, index: true },
        { path: '/home', element: <Home /> },
        { path: '/shop', element: <Shop /> },
        { path: '/myaccount', element: <MyAccount /> },
        {
          path: '/products',
          element: <Products />,
          children: [
            { element: <Products />, index: true },
            { path: '*', element: <NotFound /> }
          ]
        },
        {
          path: '/abc',
          element: <SingleProduct />,
          children: [
            { element: <SingleProduct />, index: true },
            { path: '*', element: <NotFound /> }
          ]
        },
        { path: '*', element: <NotFound /> }
      ]
    }
    // The "/signin" route has been removed because the SignningLayout
    // component does not exist in your repository.
  ]);

  return <RouterProvider router={router} />;
}

export default App;