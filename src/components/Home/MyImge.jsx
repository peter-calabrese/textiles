const MyImage = ({ image }) => {
  return (
    <img style={{ width: 200, height: 200, objectFit: 'cover' }} src={image} />
  );
};
export default MyImage;
