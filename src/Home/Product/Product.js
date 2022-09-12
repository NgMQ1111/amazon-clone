import classNames from "classnames/bind";
import styles from "./Product.module.scss";

import StarIcon from "@mui/icons-material/Star";

const cx = classNames.bind(styles);

function Product({ title, price, rating, image }) {

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
        <button className={cx("add-btn")}>Add to basket</button>
      </div>
    </div>
  );
}

export default Product;
