import { Carousel } from "@mantine/carousel";

const Car = () => {
  const images = [
    "src\\assets\\Universal_House.jpg",
    "src\\assets\\Universal_House.jpg",
    "src\\assets\\Universal_House.jpg",
  ];
  return (
      <Carousel
        align="start"
        slideGap="xs"
        withControls={false}
        withIndicators
        className="h-screen w-full"
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} className="h-screen w-full object-cover -z-10"/>
        ))}
      </Carousel>
  );
};
export default Car;
