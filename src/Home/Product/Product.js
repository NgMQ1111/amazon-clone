import classNames from "classnames/bind";
import styles from "./Product.module.scss";

import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../../store/StateProvider";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Product({ id, title, price, rating, image }) {
  const [{ baskets, user }, dispath] = useStateValue();
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
    } else {
      alert("Please Login to continue!")
      setTimeout(() => {
        navigate("/login");
      }, 500)
    }
  };

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
