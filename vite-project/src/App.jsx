import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./Context/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./redux/store";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Login from "./components/Login/Login";
import AppLayout from "./components/AppLayout/AppLayout";
import AddProduct from "./components/ProductsHandling/AddProduct";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound";
import AdminPanel from "./components/ProductsHandling/AdminPanel";
import NotAuthorized from "./pages/NotAuthorized";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import CheckOut from "./pages/CheckOut";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <WishList />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
      {
        element: <PrivateRoute requiredRole="admin" />,
        children: [
          {
            path: "/adminpanel",
            element: <AdminPanel />,
          },
        ],
      },
      {
        path: "/unauthorized",
        element: <NotAuthorized />, 
      },
      {
        path: "*",
        element: (
          <NotFound/>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RouterProvider router={router} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;