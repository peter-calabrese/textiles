import { useState } from 'react';
import styles from './BurgerMenu.module.css';
import { useEffect } from 'react';
const BurgerMenu = ({ setIsOpen, isOpen }) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (!isOpen) {
      setToggle(false);
    }
  }, [isOpen]);
  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
        setToggle(!toggle);
      }}
      className={styles.burgerMenu}
      // style={
      //   isOpen
      //     ? {
      //         marginTop: -14 + 'px',
      //         marginLeft: 180 + 'px',
      //         transition: 'all .4s ease-in-out .025s',
      //       }
      //     : null
      // }
    >
      <div
        className={toggle ? `${styles.bar1} ${styles.bar1Change}` : styles.bar1}
      />

      <div
        className={toggle ? `${styles.bar2} ${styles.bar2Change}` : styles.bar2}
      />

      <div
        className={toggle ? `${styles.bar3} ${styles.bar3Change}` : styles.bar3}
      />
    </div>
  );
};

export default BurgerMenu;
