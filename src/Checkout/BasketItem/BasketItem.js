import classNames from "classnames/bind";
import styles from "./BasketItem.module.scss";

import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../../store/StateProvider";
import db from "../../firebase";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function BasketItem({index, title, price, rating, image }) {

  const [{baskets, user}, dispath] = useStateValue()
  const [removeBasket, setRemoveBasket] = useState(baskets.length);


  const removeFromBasket = () => {
    dispath({
      type: "REMOVE_FROM_BASKET",
      item: index
    })

    setRemoveBasket(removeBasket - 1)
  }

  useEffect(() => {
    if (user) {
      //todo: Storage Firebase
      db.collection("users").doc(user.uid).update({
        baskets: baskets,
      });

      localStorage.setItem('baskets', JSON.stringify(baskets))
      
    }
  }, [removeBasket]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrap-img")}>
        <img className={cx("image")} src={image} alt="" />
      </div>

      <div className={cx("info")}>
        <h3 className={cx("title")}>{title}</h3>
        <p className={cx("price")}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={cx("rating")}>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <StarIcon key={index} className={cx("star-icon")} />
            ))}
        </div>

        <div className={cx("wrap-btn")}>
          <button onClick={removeFromBasket} className={cx("remove-btn")}>Remove for basket</button>
        </div>
      </div>
    </div>
  );
}

export default BasketItem;
