import PropTypes from "prop-types";
import { Carousel } from "@mantine/carousel";

const Car = ({ h, images, size }) => {
  return (
    <Carousel align="start" slideGap="xs" withIndicator loop slideSize={size}>
      {images.map((image, index) => (
        <img key={index} src={image} className={`h-${h} object-cover`} />
      ))}
    </Carousel>
  );
};

Car.propTypes = {
  h: PropTypes.string.isRequired,
  size: PropTypes.string,
  images: PropTypes.array.isRequired,
};

export default Car;
