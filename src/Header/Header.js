import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "../store/StateProvider";
import { auth } from "../firebase";

const cx = classNames.bind(styles);

function Header() {
  const [{ baskets, user }, dispath] = useStateValue();

  const handleSignOut = () => {
    if(user) {
      setTimeout(() => {
        auth.signOut()
      }, 500)
    }
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <Link to="/">
          <div className={cx("wrap__logo")}>
            <img
              className={cx("logo")}
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
            />
          </div>
        </Link>

        <div className={cx("search")}>
          <input className={cx("search__input")} type="text" />
          <SearchTwoToneIcon className={cx("search__icon")} />
        </div>

        <div className={cx("navigation")}>
          <Link to={!user && "/login"}>
            <div onClick={handleSignOut} className={cx("option")}>
              <span className={cx("optionLineOne")}>Hello {user ? auth.currentUser.email : "Guest"} </span>
              <span className={cx("optionLineTwo")}>{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
          </Link>

          <div className={cx("option")}>
            <span className={cx("optionLineOne")}>Returns</span>
            <span className={cx("optionLineTwo")}>& Orders</span>
          </div>

          <div className={cx("option")}>
            <span className={cx("optionLineOne")}>Your</span>
            <span className={cx("optionLineTwo")}>Prime</span>
          </div>

          <Link to="/checkout">
            <div className={cx("optionCart")}>
              <ShoppingCartIcon className={cx("cart__icon")} />
              <div className={cx('notWrapIconCart')}>
                <span className={cx("cart__count")}>{user ? baskets.length : 0}</span>
                <span className={cx("optionLineTwo")}>Cart</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
