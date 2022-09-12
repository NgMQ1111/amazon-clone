import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Product from "./Product/Product";

const cx = classNames.bind(styles);

function Home({ products }) {

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <img
          className={cx("home__img")}
          src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71tIrZqybrL._SX3000_.jpg"
          alt=""
        />

        <div className={cx('row-products')}>
          {products.map((product) => (
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Home;
