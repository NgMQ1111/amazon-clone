import { Link } from 'react-router-dom';

import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx('container')}>
        <Link to="/" >
          <div className={cx('wrap__logo')}>
            <img
              className={cx("logo")}
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="logo"
            />
          </div>
        </Link>
  
        <div className={cx('search')}>
          <input className={cx('search__input')} type="text"/>
          <SearchTwoToneIcon className={cx('search__icon')}/>
        </div>
  
        <div className={cx('navigation')}>
          <div className={cx('option')}>
            <span className={cx('optionLineOne')}>Hello Guest</span>
            <span className={cx('optionLineTwo')}>Sign In</span>
          </div>
  
          <div className={cx('option')}>
            <span className={cx('optionLineOne')}>Returns</span>
            <span className={cx('optionLineTwo')}>& Orders</span>
          </div>
  
          <div className={cx('option')}>
            <span className={cx('optionLineOne')}>Your</span>
            <span className={cx('optionLineTwo')}>Prime</span>
          </div>
  
          <Link to="/checkout">
            <div className={cx('optionCart')}>
              <ShoppingCartIcon className={cx('cart__icon')}/>
              <span className={cx('optionLineTwo')}>Cart</span>
              <span className={cx('cart__count')}>0</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
