import style from './MyImage.module.css';
const MyImage = ({ image }) => {
  return <img className={style.image} src={image} />;
};
export default MyImage;
