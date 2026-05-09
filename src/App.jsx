import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

import MasterLayout from './components/MasterLayout/MasterLayout';
import Home from './components/home/Home';
import NotFound from './components/notFound/NotFound';
import SignningLayout from './components/signingLayout/SigningLayout';
import SignIn from './components/signingLayout/SignIn';
import SignUp from './components/signingLayout/SignUp';
import Shop from './components/shop/Shop';
import MyAccount from './components/myAccount.jsx/MyAccount';
import Products from './components/products/Products';
import SingleProduct from "./components/products/SingleProduct"

function App() {

  const router = createBrowserRouter([
    {
      path: "",
      element: <MasterLayout />,
      children: [
        {
          element: <Home />,
          index: true
        },
        {
          path: "/home",
          element: <Home />
        },
        {
          path: "/shop",
          element: <Shop />
        },
        {
          path: "/myaccount",
          element: <MyAccount />
        },
        {
          path: "/products",
          element: <Products />,
          children: [
            {
              element: <Products />,
              index: true
            },
            {
              path: "*",
              element: <NotFound />
            }
          ]
        },
        {
          path: "/abc",
          element: <SingleProduct />,
          children: [
            {
              element: <SingleProduct />,
              index: true
            },
            {
              path: "*",
              element: <NotFound />
            }
          ]
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    },
    {
      path: "/signin",
      element: <SignningLayout />,
      children: [
        {
          element: <SignIn />,
          index: true
        },
        {
          path: "signup",
          element: <SignUp />
        },
        {
          path: "*",
          element: <NotFound />
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App;