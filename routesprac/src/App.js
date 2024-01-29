
import {BrowserRouter, Route, Routes, createBrowserRouter, RouterProvider} from "react-router-dom";

import Next from "./Next";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";

function App() {
    const router= createBrowserRouter([
      {
        path: '/',
                element: <Root/>,
                errorElement:<ErrorPage/>,
                children:[
                  {path: '/',
                  element: <Home/>,
              },
              {path: '/products',
              element: <Product/>,
              },
              {
              path: '/products/:id',
              element: <ProductDetail/>,
              },
                ],
      },
           
    ])


  return(
      <>
      <RouterProvider router={router}/>
      </>
  );
}

export default App;