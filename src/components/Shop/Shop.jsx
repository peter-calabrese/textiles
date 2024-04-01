import Card from '../common/Card/Card';
import shop from '../../assets/shop.jpg';
import styles from './Shop.module.css';

const Shop = () => {
  return (
    <div className={styles.container}>
      <h1>Shop</h1>
      <div className={styles.cards}>
        <Card
          image={shop}
          title={'Christmas Cheer'}
          description={
            'A natural, cheerful look with the use of burlap, rope, mohair and cotton! Red, green and embroidered trees make up this holiday piece!'
          }
          price={'$75'}
          dimensions={'13” x 36”'}
        />
        <Card
          image={shop}
          title={'Christmas Cheer'}
          description={
            'A natural, cheerful look with the use of burlap, rope, mohair and cotton! Red, green and embroidered trees make up this holiday piece!'
          }
          price={'$75'}
          dimensions={'13” x 36”'}
        />
        <Card
          image={shop}
          title={'Christmas Cheer'}
          description={
            'A natural, cheerful look with the use of burlap, rope, mohair and cotton! Red, green and embroidered trees make up this holiday piece!'
          }
          price={'$75'}
          dimensions={'13” x 36”'}
        />
      </div>
    </div>
  );
};
export default Shop;
