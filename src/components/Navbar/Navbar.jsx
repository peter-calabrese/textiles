import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to={'/'}>
        <p>Sabrina Textile Uniques</p>
      </Link>

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
    </nav>
  );
};
export default Navbar;
