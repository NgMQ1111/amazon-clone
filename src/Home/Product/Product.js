import classNames from "classnames/bind";
import styles from "./Product.module.scss";

import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../../store/StateProvider";
import { useNavigate } from "react-router-dom";
import db from "../../firebase";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Product({ id, title, price, rating, image }) {
  const [{ baskets, user }, dispath] = useStateValue();
  const [addBasket, setAddBasket] = useState(0);
  const navigate = useNavigate();

  const addToBasket = () => {
    if (user) {
      dispath({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          price: price,
          rating: rating,
          image: image,
        },
      });

      setAddBasket(addBasket + 1);
    } else {
      alert("Please Login to continue!");
      setTimeout(() => {
        navigate("/login");
      }, 500);
    }
  };

  useEffect(() => {
    if (user) {
      //todo: Storage Firebase
      db.collection("users").doc(user.uid).update({
        baskets: baskets,
      });

      //todo: Luu bo nho tam thoi
      localStorage.setItem('baskets', JSON.stringify(baskets))
    }
  }, [addBasket]);

  return (
    <div className={cx("wrapper")}>
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
      </div>

      <img className={cx("image")} src={image} alt="" />

      <div className={cx("wrap-btn")}>
        <button onClick={addToBasket} className={cx("add-btn")}>
          Add to basket
        </button>
      </div>
    </div>
  );
}

export default Product;
