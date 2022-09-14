import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { auth } from "./firebase";
import { useStateValue } from "./store/StateProvider";

import Checkout from "./Checkout/Checkout";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Login from "./Login/Login";

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

  const [{}, dispath] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispath({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispath({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home products={PRODUCTS} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
