import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useStateValue } from "../store/StateProvider";

import BasketItem from "./BasketItem/BasketItem";
import styles from "./Checkout.module.scss";
import Subtotal from "./Subtotal/Subtotal";

const cx = classNames.bind(styles);

function Checkout() {
  const [{ baskets }, dispath] = useStateValue();
  const [isBasket, setIsBasket] = useState(false);

  useEffect(() => {
    if (baskets.length !== 0) {
      setIsBasket(true);
    }
  }, [baskets]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <img
          className={cx("imageAd")}
          src="https://www.termsfeed.com/public/uploads/2022/05/what-is-required-by-amazon-and-privacy-laws.jpg"
          alt="CheckoutAd"
        />

        <div className={cx("wrap__basketIitem")}>
          <h2 className={cx("title")}>Your shopping Basket</h2>
          {isBasket ? (
            baskets.map((basket, index) => (
              <BasketItem
                index={index}
                key={index}
                title={basket.title}
                price={basket.price}
                rating={basket.rating}
                image={basket.image}
              />
            ))
          ) : (
            <h1>You have nothing in your basket</h1>
          )}
        </div>
      </div>

      <div className={cx("right")}>
        <Subtotal baskets={baskets} />
      </div>
    </div>
  );
}

export default Checkout;
