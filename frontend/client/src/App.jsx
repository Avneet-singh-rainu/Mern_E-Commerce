import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

import { Home } from "./pages/Home";
import Cart from "./pages/Cart";
import { SingleProduct } from "./pages/SingleProduct";
import SingleCategory from "./pages/SingleCategory";
import { StoreProvider } from "./context/StoreContext";
import Footer from "./components/Footer";
import SearchProduct from "./pages/SearchProduct";

function App() {
  return (
    <div className=" bg-slate-100 w-full h-full">
      <StoreProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<SingleProduct />} />
            <Route path="/search/:search/:id" element={<SingleProduct />} />

            <Route path="*" element={<Error />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/category/:name" element={<SingleCategory />} />
            <Route path="/category/:name/:id" element={<SingleProduct />} />
            <Route path="/search/:search" element={<SearchProduct />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default App;
