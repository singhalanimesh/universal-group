import { Carousel } from "@mantine/carousel";

const Car = () => {
  const images = [
    "src\\assets\\Universal_House.jpg",
    "src\\assets\\Universal_Logo.png",
    "src\\assets\\UniversalHouse.jpg",
  ];
  return (
    <div className="h-screen object-cover">
      <Carousel
        align="start"
        slideGap="xs"
        loop
        withControls={false}
        withIndicators
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
};
export default Car;
