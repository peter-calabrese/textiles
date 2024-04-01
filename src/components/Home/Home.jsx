import MainImage from '../../assets/textile1.jpeg';
import SecondImage from '../../assets/textile2.jpeg';
import ThirdImage from '../../assets/textile3.jpeg';
import { motion } from 'framer-motion';
import DownArrow from '../../assets/DownArrow';
import styles from './Home.module.css';
import MyImage from './MyImge';
import { Link } from 'react-router-dom';

function Home() {
  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
  const images = [
    MainImage,
    SecondImage,
    ThirdImage,
    MainImage,
    SecondImage,
    ThirdImage,
    MainImage,
    SecondImage,
    ThirdImage,
    MainImage,
    SecondImage,
    ThirdImage,
  ];
  return (
    <div style={{ height: '200vh' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className={styles.homeWrapper}
      >
        <div className={styles.introWrapper}>
          <h3>Crafting Comfort, Weaving Innovation.</h3>
          <small>
            Weaving tradition with innovation, our textile company produces
            high-quality, sustainable fabrics. Each thread embodies our
            commitment to comfort, durability, and environmental stewardship.
          </small>
          <button>Customize Yours</button>
        </div>
        <img className={styles.mainImage} src={MainImage} />
      </motion.div>
      <div className={styles.downArrow} onClick={handleScroll}>
        <DownArrow />
      </div>

      <div className={styles.myWork}>
        <h3>My Work</h3>
        <div style={{ width: 'fit-content' }}>
          <div className={styles.display}>
            {images.map((image) => (
              <MyImage image={image} />
            ))}
          </div>
          <div className={styles.myWorkCover}>
            <Link
              to={'https://www.instagram.com/sabrina_textile_uniques/'}
              target='_blank'
              rel='noopener noreferrer'
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              See more
              <div
                style={{
                  transform: 'rotate(-90deg)',
                  padding: 0,
                  marginLeft: 2,
                  marginTop: 4,
                }}
              >
                <DownArrow />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
