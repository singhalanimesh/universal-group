import PropTypes from "prop-types";

const Card = ({ keyProp, h, text, title }) => {
  return (
    <div className={`${h} bg-white rounded-lg`}>
      <img src={`images/${keyProp}.jpg`} className="rounded-t-lg" />
      <div className="pt-4 my-2 text-center text-lg font-bold">
        {title}
      </div>
      <div className="mx-4 py-4 text-justify">{text}</div>
    </div>
  );
};

Card.propTypes = {
  h: PropTypes.string.isRequired,
  keyProp: PropTypes.string.isRequired,
  text: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Card;
