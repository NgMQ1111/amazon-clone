import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import db, { auth } from "./firebase";
import { useStateValue } from "./store/StateProvider";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import Checkout from "./Checkout/Checkout";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Payment from "./Payment/Payment";

const promise = loadStripe(
  "pk_test_51LicjTDrzXBx444pYQYwXQq0PVTiAEYt9W9pTWcr6sxQldzoZrI6zfFMHtKMgBEUJY3dmLyYephCvKF2Zq9DKlmA009fVm75Pk"
);

function App() {
  const [{}, dispath] = useStateValue();
  const [products, setProducts] = useState([]);
  const newProducts = [];

  // Get database Products on FireBase
  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  products.map((product) => {
    newProducts.push(product.data);
  });

  //Set User
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispath({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispath({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home products={newProducts} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
