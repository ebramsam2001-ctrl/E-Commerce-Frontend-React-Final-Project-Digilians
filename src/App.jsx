import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

// Correct imports – folder names exactly as they appear in src/Components/
import MasterLayout from './Components/MasterLayout/MasterLayout';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import SignningLayout from './Components/SigningLayout/SigningLayout';  // folder is SigningLayout, component name kept as SignningLayout
import SignIn from './Components/SigningLayout/SignIn';
import SignUp from './Components/SigningLayout/SignUp';
import Shop from './Components/Shop/Shop';
import MyAccount from './Components/MyAccount/MyAccount';  // fixed: removed ".jsx" from folder name
import Products from './Components/Products/Products';
import SingleProduct from './Components/Products/SingleProduct';

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <MasterLayout />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/myaccount",
          element: <MyAccount />,
        },
        {
          path: "/products",
          element: <Products />,
          children: [
            {
              element: <Products />,
              index: true,
            },
            {
              path: "*",
              element: <NotFound />,
            },
          ],
        },
        {
          path: "/abc",
          element: <SingleProduct />,
          children: [
            {
              element: <SingleProduct />,
              index: true,
            },
            {
              path: "*",
              element: <NotFound />,
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "/signin",
      element: <SignningLayout />,
      children: [
        {
          element: <SignIn />,
          index: true,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
