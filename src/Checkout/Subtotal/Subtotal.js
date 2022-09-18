import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

import styles from "./Subtotal.module.scss";

const cx = classNames.bind(styles);

function Subtotal({ baskets }) {
  
  const navigate = useNavigate()

  const total = baskets.reduce((result, prod) => 
    result + prod.price, 
    0
  );
  const result = Number(total.toFixed(2))

  return (
    <div className={cx("wrapper")}>
      <p>
        Subtotal ({baskets.length} items): <strong>${result}</strong>
      </p>
      <small className={cx("gift")}>
        <input type="checkbox" />
        <p> This order contains a gift</p>
      </small>

      <button onClick={() => navigate("/payment")} className={cx("checkout-btn")}>Procced to Checkout</button>
    </div>
  );
}

export default Subtotal;
