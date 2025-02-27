import { useState } from "react";
import { ThemeProvider } from "./Context/ThemeProvider";
import Nav from "./components/Nav/Nav";
import Products from "./components/Products/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import ProductsPage from "./pages/ProductsPage";
import ProductDetails from "./pages/ProductDetails";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
      },
    },
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
