import classNames from "classnames/bind";
import styles from "./Product.module.scss";

import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../../store/StateProvider";

const cx = classNames.bind(styles);

function Product({id, title, price, rating, image }) {
  
  const [{baskets}, dispath] = useStateValue()

  const addToBasket = () => {
    dispath({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      }
    })
  }

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
        <button onClick={addToBasket} className={cx("add-btn")}>Add to basket</button>
      </div>
    </div>
  );
}

export default Product;
