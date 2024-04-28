import PropTypes from "prop-types";

const Card = ({ keyProp, h, text }) => {
  return (
    <div className={`h-[${h}] bg-white rounded-lg`}>
      <div className="">
        <img src={`src/assets/${keyProp}.jpg`} alt="" className="object-fit rounded-lg" />
      </div>
      <div className="h-3/5">
        <div className="pt-4 my-2 text-center text-lg font-bold ">
          UNIVERSAL {`${keyProp.toUpperCase()}`}
        </div>
        <div className="m-4 text-justify">{text}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  h: PropTypes.string.isRequired,
  keyProp: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
