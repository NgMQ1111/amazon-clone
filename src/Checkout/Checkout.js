import classNames from "classnames/bind";
import BasketItem from "./BasketItem/BasketItem";
import styles from "./Checkout.module.scss";
import Subtotal from "./Subtotal/Subtotal";

const cx = classNames.bind(styles);

function Checkout({ products }) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <img
          className={cx("imageAd")}
          src="https://www.termsfeed.com/public/uploads/2022/05/what-is-required-by-amazon-and-privacy-laws.jpg"
          alt="CheckoutAd"
        />

        <div className={cx("wrap__basketIitem")}>
            <h2 className={cx("title")}>
                Your shopping Basket
            </h2>
            {products.map((product) => (
            <BasketItem
              key={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>
      </div>

      <div className={cx("right")}>
        <Subtotal products={products}/>
      </div>
    </div>
  );
}

export default Checkout;
