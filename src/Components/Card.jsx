import PropTypes from "prop-types";

const Card = ({ keyProp, h, text, title }) => {
  return (
    <div className={`h-[${h}] bg-white rounded-lg`}>
      <img src={`src/assets/${keyProp}.jpg`} className="rounded-t-lg" />
      <div className="pt-4 my-2 text-center text-lg font-bold text-[#18d26e]">{title}</div>
      <div className="m-4 text-justify">{text}</div>
    </div>
  );
};

Card.propTypes = {
  h: PropTypes.string.isRequired,
  keyProp: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
