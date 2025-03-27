import PropTypes from "prop-types";
import { Carousel } from "@mantine/carousel";

const Car = ({ imageClass, images, source, size }) => {
  return (
    <Carousel align="start" slideGap="xs" loop slideSize={size}>
      {images.map((image, index) => (
        <Carousel.Slide key={index}>
          <img
            src={`${source}/${image}`}
            alt={`carousel-${index}`}
            className={`${imageClass} object-cover`}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

Car.propTypes = {
  imageClass: PropTypes.string.isRequired,
  size: PropTypes.string,
  images: PropTypes.array.isRequired,
  source: PropTypes.string,
};

export default Car;
