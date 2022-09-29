import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "../../store/reducer";

import styles from "./Subtotal.module.scss";

const cx = classNames.bind(styles);

function Subtotal({ baskets }) {
  
  const navigate = useNavigate()
  
  //todo: Calculate Total items
  const result = getBasketTotal(baskets)

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
