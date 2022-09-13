import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Checkout from "./Checkout/Checkout";
import Header from "./Header/Header";
import Home from "./Home/Home";

function App() {

  const PRODUCTS = [
    {
      id: 1,
      title: "The learn startup 1",
      price: 19.99,
      rating: 1,
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/21SPDoiRuGL._AC_UL480_QL65_.jpg",
    },
    {
      id: 2,
      title: "The learn startup 2",
      price: 29.99,
      rating: 2,
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/21SPDoiRuGL._AC_UL480_QL65_.jpg",
    },
    {
      id: 3,
      title: "The learn startup 3",
      price: 39.99,
      rating: 3,
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/21SPDoiRuGL._AC_UL480_QL65_.jpg",
    },
    {
      id: 4,
      title: "The learn startup 4",
      price: 49.99,
      rating: 4,
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/21SPDoiRuGL._AC_UL480_QL65_.jpg",
    },
    {
      id: 5,
      title: "The learn startup 5",
      price: 59.99,
      rating: 5,
      image:
        "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/21SPDoiRuGL._AC_UL480_QL65_.jpg",
    },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Home products={PRODUCTS}/>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
