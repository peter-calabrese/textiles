import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import BurgerMenu from '../common/BurgerMenu/BurgerMenu';
import { useState } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <Link to={'/'}>
        <p>Sabrina Textile Uniques</p>
      </Link>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <ul className={styles.navbarItems}>
        <li>
          <Link to='/shop'>Shop</Link>
        </li>
        <li>
          <Link to='/shop'>About Us</Link>
        </li>
        <li>
          <Link to='/shop'>Contact Us</Link>
        </li>
      </ul>
      {isOpen && (
        <ul className={styles.navbarMobileItems}>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/shop'>About Us</Link>
          </li>
          <li>
            <Link to='/shop'>Contact Us</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
