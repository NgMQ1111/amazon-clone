import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import BasketItem from "../Checkout/BasketItem/BasketItem";
import { useStateValue } from "../store/StateProvider";

import classNames from "classnames/bind";
import styles from "./Payment.module.scss";
import { useEffect, useState } from "react";
import axios from "../axios";
import { getBasketTotal } from "../store/reducer";

const cx = classNames.bind(styles);

function Payment() {

  const navative = useNavigate()
  const [{ baskets }, dispath] = useStateValue();

  //todo: Calculate Price Items
  const result = getBasketTotal(baskets)


  //todo: use Stripe
  const stripe = useStripe();
  const elements = useElements(); 

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState("")
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async() => {
      const response = await axios({
        method: "post",
        url: `/playments/create?total=${result * 100}`
      })
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret()
  }, [baskets])

  const handleSubmit = async(e) => {
    e.preventDefault()

    //! Can xem lai
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ payment_method }) => {

      setSucceeded(true)
      setError(null)
      setProcessing(false)

      navative("/order")

    })
  }

  const handleChange = (e) => {
    setDisabled(e.empty)
    setError(e.error ? e.error.message : null)
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <h1>
          <Link to="/checkout">Checkout ({baskets.length} items)</Link>
        </h1>

        {/* Payment section - delivery address */}
        <div className={cx("section")}>
          <div className={cx("title")}>
            <h3>Delivery Address</h3>
          </div>
          <div className={cx("address")}>
            <p>Email: ...</p>
            <p>Address: ...</p>
            <p>Area: ...</p>
          </div>
        </div>

        {/* Payment section - delivery items */}
        <div className={cx("section")}>
          <div className={cx("title")}>
            <h3>Review items and delivery</h3>
          </div>
          <div className={cx("items")}>
            {baskets.map((basket, index) => (
              <BasketItem
                index={index}
                key={index}
                title={basket.title}
                price={basket.price}
                rating={basket.rating}
                image={basket.image}
              />
            ))}
          </div>
        </div>

        {/* Payment section - Payment method */}
        <div className={cx("section")}>
          <div className={cx("title")}>
            <h3>Payment Method</h3>
          </div>
          <div className={cx("details")}>

              {/* Stripe NPM */}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange}/>

                <div className={cx("priceContainer")}>
                  <h3>Order Total: ${result}</h3>

                  <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                </div>

                {error && <div>{error}</div>}
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
