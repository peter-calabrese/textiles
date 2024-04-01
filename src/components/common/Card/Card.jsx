import styles from './Card.module.css';

const Card = ({ image, title, description, price, dimensions }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={image} />
      <h4>{title}</h4>
      <small className={styles.description}>{description}</small>
      <p>Price: {price}</p>
      <p>Dimensions: {dimensions}</p>
      <button>Add to Cart</button>
    </div>
  );
};
export default Card;
