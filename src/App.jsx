import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

import MasterLayout from './Components/MasterLayout/MasterLayout';
import Home from './Components/home/Home';
import NotFound from './Components/notFound/NotFound';
import SignningLayout from './Components/signningLayout/SignningLayout';
import SignIn from './Components/signningLayout/SignIn';
import SignUp from './Components/signningLayout/SignUp';
import Shop from './Components/shop/Shop';
import MyAccount from './Components/myAccount.jsx/MyAccount';
import Products from './Components/products/Products';
import SingleProduct from "./Components/products/SingleProduct"

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